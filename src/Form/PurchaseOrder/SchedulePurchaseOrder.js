import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from '../Form.module.css'
import { categoryContext} from '../../store/CategoryProvider'
import { useState,useContext } from 'react';
// import {message} from "antd";


const SchedulePurchaseOrder = () => {
  
  const categoryItemsCtx=useContext(categoryContext);

  const [selected, setSelected]=useState('');

  const navigate=useNavigate();
  
  const [userData,setUserData]=useState([{

    purchase_order_number:"",
    purchase_order_name:"",
    purchase_order_description:"",
    supplier_category:"",
    supplier_name:"",
    part_type:"",
    quantity:"",
    unit_price:"",
    total_price:"",
    delivery_date:"",
    payment_terms:"",
    shipping_method:"",
    terms_and_conditions:"",
    approval_status:"",
    purchase_order_status:""
   
  }]);

  const handleChange=(e)=>{

    console.log(e.target.value)
    setSelected(e.target.value)

  }
  
    let name,value;

    const postUserData=(event)=>{

       name=event.target.name;
       value=event.target.value;
       setUserData({...userData,[name]:value});
          
    }

    const submitHandler = async(event)=>{
      
      let supplier;
      event.preventDefault();
      const {purchase_order_number,purchase_order_name,purchase_order_description,supplier_category,
      supplier_name,part_type,quantity,unit_price,total_price,delivery_date,payment_terms,
      shipping_method,terms_and_conditions,approval_status,purchase_order_status}=userData;
      
    try{
      let document_type="purchase_order";
     if(purchase_order_number && purchase_order_name && purchase_order_description && supplier_category && 
     supplier_name && part_type && quantity && unit_price && total_price && delivery_date && payment_terms && 
     shipping_method && terms_and_conditions && approval_status && purchase_order_status){
     const res= await fetch(`https://kkh-mechware-b4b32-default-rtdb.firebaseio.com/userDocuments/${document_type}.json`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({

            purchase_order_number,purchase_order_name,purchase_order_description,supplier_category,
            supplier_name,part_type,quantity,unit_price,total_price,delivery_date,payment_terms,
            shipping_method,terms_and_conditions,approval_status,purchase_order_status
        
        })
     });
     if(res){
        setUserData({ 
       
            purchase_order_number:"",
            purchase_order_name:"",
            purchase_order_description:"",
            supplier_category:"",
            supplier_name:"",
            part_type:"",
            quantity:"",
            unit_price:"",
            total_price:"",
            delivery_date:"",
            payment_terms:"",
            shipping_method:"",
            terms_and_conditions:"",
            approval_status:"",
            purchase_order_status:""
        
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
              <h3>Scheduled Purchase Order</h3>
              <div className={classes.content}>

              <div className={classes.input}>
                <label htmlFor='text'>Purchase Order No.*</label>
                <input type='number' name="purchase_order_number" value={userData.purchase_order_number} onChange={postUserData} />
              </div>

              <div className={classes.input}>
                <label htmlFor='text'>Purchase Order Name*</label>
                <input type='text'  name="purchase_order_name"  value={userData.purchase_order_name} onChange={postUserData} />
              </div>

              <div className={classes.input}>
                <label htmlFor='text'>Purchase Order Description*</label>
                <input type='text' name="purchase_order_description" value={userData.purchase_order_description} onChange={postUserData}/>
              </div>
        
              <div className={classes.input}>
              <label>Supplier Category*</label>
                    <select style={{margin:"5px", height:"30px", width:"17.8rem",borderRadius:"5px",borderStyle:"none",fontSize:"11px"}}
                    name="supplier_category" value={selected} onChange={(e)=>handleChange(e)}>
                      <option>Select Supplier Category</option>
                      {categoryItemsCtx.category.map((item,ind)=>{
                          return (
                          <option key={ind}>{item.value}</option>)
                      })}
                        
                    </select>
              </div>
        
              <div className={classes.input}>
              <label>Supplier Name*</label>
                    <select style={{margin:"5px", height:"30px", width:"17.8rem",borderRadius:"5px",borderStyle:"none",fontSize:"11px"}}
                    name="supplier_name" value={userData.supplier_name} onChange={postUserData}>
                      <option>Select Supplier Name</option>
                      {selected==="manufacturer" ? categoryItemsCtx.manufactureData.map((item,ind)=>{
                          return (
                          <option key={ind}>{item.name}({item.category})</option>)
                      }):""}

                      {selected==="vendor" ? categoryItemsCtx.vendorData.map((item,ind)=>{
                          return (
                          <option key={ind}>{item.name}</option>)
                      }):""}
                      {selected==="tier1" ? categoryItemsCtx.tier1Data.map((item,ind)=>{
                          return (
                          <option key={ind}>{item.name}</option>)
                      }):""}
                      {selected==="tier2" ? categoryItemsCtx.tier2Data.map((item,ind)=>{
                          return (
                          <option key={ind}>{item.name}</option>)
                      }):""}
                        
                    </select>
              </div>

              <div className={classes.input}>

              <label>Part Category*</label>
                    <select style={{margin:"5px", height:"30px", width:"17.8rem",borderRadius:"5px",borderStyle:"none",fontSize:"11px"}}
                    name="part_type" value={userData.part_type} onChange={(e)=>handleChange(e)}>
                      <option>Select Type</option>
                      <option>part</option>
                      <option>material</option>
                      <option>product</option>   
                    </select>
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
                    <label htmlFor='text'>Total Price*</label>
                    <input type='text' name="total_price" value={userData.total_price} onChange={postUserData}/>
                  </div>

                  <div className={classes.input}>
                    <label htmlFor='text'>Delivery Date*</label>
                    <input type='date' name="delivery_date"  value={userData.delivery_date} onChange={postUserData}/>
                  </div>
                   
                  <div className={classes.input}>
                    <label htmlFor='text'>Payment Terms*</label>
                    <input type='text' name="payment_terms" value={userData.payment_terms} onChange={postUserData}/>
                  </div>

                  <div className={classes.input}>
                    <label htmlFor='text'>Shipping Method*</label>
                    <input type='file' name="shipping_method" value={userData.shipping_method} onChange={postUserData}/>

                    <input type='text' name="shipping_method" value={userData.shipping_method} onChange={postUserData}/>
                  </div>

                  <div className={classes.input}>
                    <label htmlFor='text'>Terms and Conditions*</label>
                    <input type='text' name="terms_and_conditions" value={userData.terms_and_conditions} onChange={postUserData}/>
                  </div>

                  <div className={classes.input}>
                    <label htmlFor='text'>Approval Status*</label>
                    <input type='text' name="approval_status" value={userData.approval_status} onChange={postUserData}/>
                  </div>

                  <div className={classes.input}>
                    <label htmlFor='text'>Purchase Order Status*</label>
                    <input type='text' name="purchase_order_status" value={userData.purchase_order_status} onChange={postUserData}/>
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
    
export default SchedulePurchaseOrder;