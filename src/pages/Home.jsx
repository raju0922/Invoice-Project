import Header from "../components/Header";
import React, { useState, useEffect } from "react";
import { Box, Typography,Button } from "@mui/material";
import AddInvoice from "../components/AddInvoice";
import Invoices from "../components/Invoices" ;
import { getAllInvoices , deleteInvoice} from "../services/api";




const Home = () => {
    const [addInvoice, setAddInvoice] = useState(false);
    const [invoices,setInvoices] = useState([]);
    useEffect (() => {
    const getData = async () => {
        const response = await getAllInvoices();
        setInvoices(response.data);
    }
    getData();
    },[addInvoice])

    const toggleinvoive = () => {
        setAddInvoice(true);
    }
   const removeInvoice = async (id) => {
     await deleteInvoice(id);
     const updateInvoice = invoices.filter(invoice => invoice.id != id);
     setInvoices(updateInvoice);
   }

    return (
        <>
          <Header /> 
          <Box style={{margin: 20}}>
                   <Typography variant="h4">Pending Invoices</Typography>
                   <Button variant="contained" style={{margin: 15}}
                   onClick={() => toggleinvoive()}
                   >Add Invoice</Button>
         { addInvoice && <AddInvoice setAddInvoice = {setAddInvoice}/> }
          </Box>
          <Box>
            <Invoices 
            invoices = {invoices}
            removeInvoice={removeInvoice}/>
          </Box>
        </>
           
     )
}

export default Home;