import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from '../Form.module.css'
import { categoryContext} from '../../store/CategoryProvider'
import { useState,useContext } from 'react';
// import {message} from "antd";


const SafetyStockInventory = () => {
  
  const categoryItemsCtx=useContext(categoryContext);

  const [selected, setSelected]=useState('');

  const navigate=useNavigate();
  
  const [userData,setUserData]=useState([{

    item_number:"",
    item_name:"",
    item_description:"",
    supplier_category:"",
    supplier_name:"",
    quantity:"",
    unit_of_measure:"",
    cost_per_unit:"",
    location:"",
    reorder_point:"",
    lead_time:"",
    expiration_date:"",
    lifecycle_status:"",

   
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
      const {item_number,item_name,item_description,supplier_category,supplier_name,quantity,
      unit_of_measure,cost_per_unit,location,reorder_point,lead_time,expiration_date,lifecycle_status,}=userData;
      
    try{
      let document_type="purchase_order";
     if(item_number && item_name && item_description && supplier_category && supplier_name && 
     quantity && unit_of_measure && cost_per_unit && location && reorder_point && lead_time && 
     expiration_date && lifecycle_status){
     const res= await fetch(`https://kkh-mechware-b4b32-default-rtdb.firebaseio.com/userDocuments/${document_type}.json`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({

            item_number,item_name,item_description,supplier_category,supplier_name,quantity,
      unit_of_measure,cost_per_unit,location,reorder_point,lead_time,expiration_date,lifecycle_status
        
        })
     });
     if(res){
        setUserData({ 
       
            item_number:"",
            item_name:"",
            item_description:"",
            supplier_category:"",
            supplier_name:"",
            quantity:"",
            unit_of_measure:"",
            cost_per_unit:"",
            location:"",
            reorder_point:"",
            lead_time:"",
            expiration_date:"",
            lifecycle_status:"",
        
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
              <h3>Safety Stock Inventory</h3>
              <div className={classes.content}>

              <div className={classes.input}>
                <label htmlFor='text'>Item No.*</label>
                <input type='number' name="item_number" value={userData.item_number} onChange={postUserData} />
              </div>

              <div className={classes.input}>
                <label htmlFor='text'>Item Name*</label>
                <input type='text'  name="item_name"  value={userData.item_name} onChange={postUserData} />
              </div>

              <div className={classes.input}>
                <label htmlFor='text'>Item Description*</label>
                <input type='text' name="item_description" value={userData.item_description} onChange={postUserData}/>
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
                <label htmlFor='text'>Quantity*</label>
                <input type='text' name="quantity" value={userData.quantity} onChange={postUserData}/>
              </div>

              <div className={classes.input}>
                <label htmlFor='text'>Unit Of Measure*</label>
                <input type='text' name="unit_of_measure" value={userData.unit_of_measure} onChange={postUserData}/>
              </div>

              <div className={classes.input}>
                    <label htmlFor='text'>Cost Per Unit*</label>
                    <input type='text' name="cost_per_unit" value={userData.cost_per_unit} onChange={postUserData}/>
                  </div>

                  <div className={classes.input}>
                    <label htmlFor='text'>Location*</label>
                    <input type='text' name="location" value={userData.location} onChange={postUserData}/>
                  </div>

                  <div className={classes.input}>
                    <label htmlFor='text'>Reorder Point*</label>
                    <input type='text' name="reorder_point" value={userData.reorder_point} onChange={postUserData}/>
                  </div>

                  <div className={classes.input}>
                    <label htmlFor='text'>Lead Time*</label>
                    <input type='text' name="lead_time" value={userData.lead_time} onChange={postUserData}/>
                  </div>

                  <div className={classes.input}>
                    <label htmlFor='text'>Expiration Date*</label>
                    <input type='date' name="expiration_date"  value={userData.expiration_date} onChange={postUserData}/>
                  </div>

                  <div className={classes.input}>
                    <label htmlFor='text'>Lifecycle Status*</label>
                    <input type='text' name="lifecycle_status" value={userData.lifecycle_status} onChange={postUserData}/>
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
    
export default SafetyStockInventory;