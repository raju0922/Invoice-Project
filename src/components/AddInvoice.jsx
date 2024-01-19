import { Box, TextField, Typography,Button,styled } from "@mui/material";
import { useState } from "react";
import { saveInvoice } from "../services/api";

const Component = styled(Box)({
    marginTop: 20,
    '& > p': {
        fontSize: 26,
        marginBottom : 10
    },
    '& > div > div': {
        marginRight : 20 ,
        minWidth: 200
    }
})

const DefaultValue = {
    vendor: '',
    product: '',
    amount:0,
    date :'',
    action: 'pending'
    
}

const AddInvoice = ({ setAddInvoice }) => {
    
    const [invoice, setInvoice]= useState(DefaultValue);

    const onValue = (e) => {
       setInvoice ({...invoice, [e.target.name]: e.target.value });
    
        
    }
    const addNewinvoice = async () => {
          await  saveInvoice({...invoice, amount: Number(invoice['amount'])});

          setAddInvoice(false);

    }
 
    return (
        <Component>
        <Box>
            <Typography> Add Invoice</Typography>

            <TextField
                variant="standard"
                placeholder="Enter vendor name"
                name="vendor"
                onChange={(e) => onValue(e)} 
                autoComplete="off"/>

                <TextField
                variant="standard"
                placeholder="Enter Product name" 
                name="product"
                onChange={(e) => onValue(e)}
                autoComplete="off"/>

                <TextField
                variant="standard"
                placeholder="Enter Amount "
                type="number" 
                name="amount"
                onChange={(e) => onValue(e)}
                autoComplete="off"/>

                <TextField
                variant="standard"
                placeholder="Enter date " 
                type="date"
                name="date"
                onChange={(e) => onValue(e)} 
                autoComplete="off"/>
                <Button variant="contained" onClick={() => addNewinvoice()}  >  Add Invoice</Button>
                

        </Box>
        </Component>

    )
}

export default AddInvoice;