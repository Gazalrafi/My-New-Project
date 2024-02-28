import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { categoryContext} from '../../store/CategoryProvider'
import { useState } from 'react';
import classes from '../Form.module.css'
// import {message} from "antd";


const Invoice = () => {
  
  // const categoryItemsCtx=useContext(categoryContext);
  const navigate=useNavigate();
  
  const [userData,setUserData]=useState([{

    document_name:"",
    invoice_number:"",
    supplier_name:"",
    invoice_date:"",
    due_date:"",
    itemized_charges:"",
    amount_due:"",
    payment_instructions:"",
   
  }]);
  
    let name,value;

    const postUserData=(event)=>{

       name=event.target.name;
       value=event.target.value;
       setUserData({...userData,[name]:value});
          
    }

    const submitHandler = async(event)=>{
      
      event.preventDefault();
      const { document_name,invoice_number,supplier_name,invoice_date,due_date,itemized_charges,amount_due,payment_instructions,}=userData;
      
    try{
      let document_type="invoice";
     if( document_name && invoice_number && supplier_name && invoice_date && due_date && itemized_charges && amount_due && payment_instructions){
     const res= await fetch(`https://kkh-mechware-b4b32-default-rtdb.firebaseio.com/userDocuments/${document_type}.json`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({

            document_name,
            invoice_number,
            supplier_name,
            invoice_date,
            due_date,
            itemized_charges,
            amount_due,
            payment_instructions,
        
        })
     });
     if(res){
        setUserData({ 
       
            document_name:"",
            invoice_number:"",
            supplier_name:"",
            invoice_date:"",
            due_date:"",
            itemized_charges:"",
            amount_due:"",
            payment_instructions:"",
        
    });
      
     }
     navigate('/submitted');
    }
    else{
      alert("please Fill the Required Details")
    }
  }
    catch(error){
       console.log(error)
    }
    }
      
      return (
        <>
       
        <div className={classes.container}>
            <form className={classes.form} onSubmit={submitHandler}>
              <h3>Invoice</h3>
              <div className={classes.content}>

              <div className={classes.input}>
                <label htmlFor='text'>Document Name*</label>
                <input type='text'  name="document_name"  value={userData.document_name} onChange={postUserData} />
              </div>

              <div className={classes.input}>
                <label htmlFor='text'>Invoice No.*</label>
                <input type='number' name="invoice_number" value={userData.invoice_number_number} onChange={postUserData} />
              </div>
        
              <div className={classes.input}>
                <label htmlFor='text'>Supplier Name*</label>
                <input type='text' name="supplier_name" value={userData.supplier_name} onChange={postUserData}/>
              </div>

              <div className={classes.input}>
                    <label htmlFor='text'>Invoice Date*</label>
                    <input type='date' name="invoice_date" value={userData.invoice_date} onChange={postUserData}/>
                  </div>
                  <div className={classes.input}>
                    <label htmlFor='text'>Due Date*</label>
                    <input type='date' name="due_date"  value={userData.due_date} onChange={postUserData}/>
                  </div>
                  <div className={classes.input}>
                    <label htmlFor='text'>Itemized Charges*</label>
                    <input type='file' name="itemized_charges" value={userData.itemized_charges} onChange={postUserData}/>
                  </div>
                  <div className={classes.input}>
                    <label htmlFor='text'>Total Amount Due*</label>
                    <input type='text' name="amount_due" value={userData.amount_due} onChange={postUserData}/>
                  </div>
                  <div className={classes.input}>
                    <label htmlFor='text'>Payment Instructions*</label>
                    <input type='file' name="payment_instructions" value={userData.payment_instructions} onChange={postUserData}/>

                    <input type='text' name="payment_instructions" value={userData.payment_instructions} onChange={postUserData}/>
                  </div>
                 
     
            </div>
            <div className={classes.button_container}>
            <button >
              Submit the details
            </button>
            </div>
      </form>
      </div>
  
    </>
      )
    }
    
export default Invoice;