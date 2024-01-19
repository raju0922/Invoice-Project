import { Table,TableHead,TableBody,TableRow,TableCell, Button,styled } from '@mui/material';

const StyledTable = styled(Table)({
  width: '80%',
  margin: 20,
  marginTop: 40,
  '& > thead > tr > th' : {
    background: '#000' ,
    color: '#FFFFFF',
    fontSize: 18
  },
  '& > tbody > tr > td': {
    fontSize: 16
  } 
})


const Invoices = ({ invoices,removeInvoice }) => {
    return (
      <StyledTable>
      
        <TableHead>
            <TableRow>
              <TableCell> vendor</TableCell>
              <TableCell> Product</TableCell>
              <TableCell> Amount</TableCell>
              <TableCell> Date</TableCell>
              <TableCell> status</TableCell>
              <TableCell>action</TableCell>
            </TableRow>
        </TableHead>

<TableBody> {

  invoices.map(invoice => (
      <TableRow>
                    <TableCell>{invoice.vendor}</TableCell>
                    <TableCell>{invoice.product}</TableCell>
                    <TableCell>{invoice.amount}</TableCell>
                    <TableCell>{invoice.date}</TableCell>
                    <TableCell>{invoice.action}</TableCell>
                    
                    <TableCell> 
                      <Button variant ="contained"
                       color="success"
                       onClick={() => removeInvoice(invoice.id)}>
                        Mark Done
                      </Button>
                  </TableCell>
        </TableRow>
  ))
}
</TableBody>
      
      </StyledTable>
    )
} 

export default Invoices;