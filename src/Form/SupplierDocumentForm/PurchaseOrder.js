import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from '../Form.module.css'
// import { categoryContext} from '../../store/CategoryProvider'
import { useState } from 'react';
// import {message} from "antd";


const PurchaseOrder = () => {
  
  // const categoryItemsCtx=useContext(categoryContext);
  const navigate=useNavigate();
  
  const [userData,setUserData]=useState([{

    document_name:"",
    purchase_order_number:"",
    supplier_name:"",
    order_date:"",
    delivery_date:"",
    item_description:"",
    quantity:"",
    unit_price:"",
    total_amount:"",
    shipping_instructions:"",
   
  }]);
  
    let name,value;

    const postUserData=(event)=>{

       name=event.target.name;
       value=event.target.value;
       setUserData({...userData,[name]:value});
          
    }

    const submitHandler = async(event)=>{
      
      let supplier;
      event.preventDefault();
      const {document_name , purchase_order_number , supplier_name , order_date , delivery_date , item_description , quantity , unit_price , total_amount , shipping_instructions}=userData;
      
    try{
      let document_type="purchase_order";
     if(document_name &&  purchase_order_number && supplier_name && order_date && delivery_date && item_description && quantity && unit_price && total_amount && shipping_instructions){
     const res= await fetch(`https://kkh-mechware-b4b32-default-rtdb.firebaseio.com/userDocuments/${document_type}.json`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({

            document_name,
            purchase_order_number,
            supplier_name,
            order_date,
            delivery_date,
            item_description,
            quantity,
            unit_price,
            total_amount,
            shipping_instructions,
        
        })
     });
     if(res){
        setUserData({ 
       
            document_name:"",
            purchase_order_number:"",
            supplier_name:"",
            order_date:"",
            delivery_date:"",
            item_description:"",
            quantity:"",
            unit_price:"",
            total_amount:"",
            shipping_instructions:"",
        
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
              <h3>Purchase Order</h3>
              <div className={classes.content}>

              <div className={classes.input}>
                <label htmlFor='text'>Document Name*</label>
                <input type='text'  name="document_name"  value={userData.document_name} onChange={postUserData} />
              </div>

              <div className={classes.input}>
                <label htmlFor='text'>Purchase Order No.*</label>
                <input type='number' name="purchase_order_number" value={userData.purchase_order_number} onChange={postUserData} />
              </div>
        
              <div className={classes.input}>
                <label htmlFor='text'>Supplier Name*</label>
                <input type='text' name="supplier_name" value={userData.supplier_name} onChange={postUserData}/>
              </div>

              <div className={classes.input}>
                <label htmlFor='text'>Item Description*</label>
                <input type='text' name="item_description" value={userData.item_description} onChange={postUserData}/>
              </div>

              <div className={classes.input}>
                <label htmlFor='text'>Quantity*</label>
                <input type='text' name="quantity" value={userData.quantity} onChange={postUserData}/>
              </div>

              <div className={classes.input}>
                <label htmlFor='text'>Unit Price*</label>
                <input type='text' name="unit_price" value={userData.unit_price} onChange={postUserData}/>
              </div>

              <div className={classes.input}>
                    <label htmlFor='text'>Order Date*</label>
                    <input type='date' name="order_date" value={userData.order_date} onChange={postUserData}/>
                  </div>
                  <div className={classes.input}>
                    <label htmlFor='text'>Delivery Date*</label>
                    <input type='date' name="delivery_date"  value={userData.delivery_date} onChange={postUserData}/>
                  </div>
                  <div className={classes.input}>
                    <label htmlFor='text'>Total Amount*</label>
                    <input type='text' name="total_amount" value={userData.total_amount} onChange={postUserData}/>
                  </div>

                  <div className={classes.input}>
                    <label htmlFor='text'>Shipping Instructions*</label>
                    <input type='file' name="shipping_instructions" value={userData.shipping_instructions} onChange={postUserData}/>

                    <input type='text' name="shipping_instructions" value={userData.shipping_instructions} onChange={postUserData}/>
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
    
export default PurchaseOrder;