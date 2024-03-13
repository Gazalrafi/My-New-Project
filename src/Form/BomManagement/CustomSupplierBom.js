import React from 'react';
import { useNavigate } from 'react-router-dom';
import {  useContext,useState } from 'react';
import classes from '../Form.module.css';
import { categoryContext} from '../../store/CategoryProvider';
// import {message} from "antd";          


const CustomSupplierBom = () => {

  const categoryItemsCtx=useContext(categoryContext);

  const navigate=useNavigate();

  const [userData,setUserData]=useState([{
    
    part_number:"",
    part_name:"",
    description:"",
    supplier_category:"",
    supplier_name:"",
    quantity:"",
    unit_of_measure:"",
    reference_designator:"",
    mpn_number:"",
    material:"",
    cost:"",
    lead_time:"",
   
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
      const {part_number,part_name,description,supplier_category,supplier_name,quantity,
      unit_of_measure,reference_designator,mpn_number,material,cost,lead_time,}=userData;
      
    try{
     
     if(part_number && part_name && description && supplier_category && supplier_name && quantity && 
        unit_of_measure && reference_designator && mpn_number && material && cost && lead_time){
     const res= await fetch(`https://kkh-mechware-b4b32-default-rtdb.firebaseio.com/bom-management.json`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({

            part_number,part_name,description,supplier_category,supplier_name,quantity,
      unit_of_measure,reference_designator,mpn_number,material,cost,lead_time,
        
        })
     });
     if(res.ok){
        setUserData({ 
            part_number:"",
            part_name:"",
            description:"",
            supplier_category:"",
            supplier_name:"",
            quantity:"",
            unit_of_measure:"",
            reference_designator:"",
            mpn_number:"",
            material:"",
            cost:"",
            lead_time:"",
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
              <h3>Custom Supplier Bom</h3>
              <div className={classes.content}>

              <div className={classes.input}>
                <label htmlFor='text'>Part Number*</label>
                <input type='number'  name="part_number"  value={userData.part_number} onChange={postUserData} />
              </div>

              <div className={classes.input}>
                <label htmlFor='text'>Part Name*</label>
                <input type='text'  name="part_name"  value={userData.part_name} onChange={postUserData} />
              </div>

              <div className={classes.input}>
                <label htmlFor='text'>Description*</label>
                <input type='text' name="description" value={userData.description} onChange={postUserData} />
              </div>
              <div className={classes.input}>
              <label>Supplier Category*</label>
                    <select style={{margin:"5px", height:"30px", width:"17.8rem",borderRadius:"5px",borderStyle:"none",fontSize:"11px"}}
                    name="supplier_category" value={userData.supplier_category} onChange={postUserData}>
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
                      <option>Select Supplier Name*</option>
                      {categoryItemsCtx.getApi.map((item,ind)=>{
                          return (
                          <option key={ind}>{item.name}</option>)
                      })}
                        
                    </select>
              </div>

              <div className={classes.input}>
                <label htmlFor='text'>Quantity*</label>
                <input type='text' name="quantity" value={userData.quantity} onChange={postUserData}/>
              </div>

              <div className={classes.input}>
              <label>Unit of Measure*</label>
                    <select style={{margin:"5px", height:"30px", width:"17.8rem",borderRadius:"5px",borderStyle:"none",fontSize:"11px"}}
                    name="unit_of_measure" value={userData.unit_of_measure} onChange={postUserData}>
                      <option>select here*</option>
                      <option >gram</option>
                      <option >kg</option>
                    </select>
              </div>

              <div className={classes.input}>
                <label htmlFor='text'>Reference Designator*</label>
                <input type='text' name="reference_designator" value={userData.reference_designator} onChange={postUserData}/>
              </div>

              <div className={classes.input}>
                <label htmlFor='text'>MPN Number*</label>
                <input type='number' name="mpn_number" value={userData.mpn_number} onChange={postUserData}/>
              </div>

              <div className={classes.input}>
                <label htmlFor='text'>Material*</label>
                <input type='text' name="material" value={userData.material} onChange={postUserData}/>
              </div>

              <div className={classes.input}>
                <label htmlFor='text'>Cost*</label>
                <input type='text' name="cost" value={userData.cost} onChange={postUserData}/>
              </div>
 
              <div className={classes.input}>
                <label htmlFor='text'>Lead Time*</label>
                <input type='text' name="lead_time" value={userData.lead_time} onChange={postUserData}/>
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
    
export default CustomSupplierBom;