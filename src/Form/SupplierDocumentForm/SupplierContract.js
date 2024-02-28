
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {  useContext,useState } from 'react';
import classes from '../Form.module.css';
import { categoryContext} from '../../store/CategoryProvider';
// import {message} from "antd";          


const SupplierContract = () => {

  const categoryItemsCtx=useContext(categoryContext);

  const navigate=useNavigate();

  const [userData,setUserData]=useState([{

    document_name:"",
    document_number:"",
    supplier_name:"",
    supplier_category:"",
    effective_date:"",
    expiration_date:"",
    work_scope:"",
    pricing_payment:"",
    term_termination:"",
    law_jursidiction:"",
    signatures:"",
   
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
      const {document_name , document_number , supplier_name ,supplier_category, effective_date , expiration_date , work_scope , pricing_payment , term_termination , law_jursidiction , signatures}=userData;
      
    try{
     let document_type="supplier_contract";
     if(document_name  && document_number && supplier_name && supplier_category && effective_date && expiration_date && work_scope && pricing_payment && term_termination && law_jursidiction && signatures){
     const res= await fetch(`https://kkh-mechware-b4b32-default-rtdb.firebaseio.com/userDocuments/${document_type}.json`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({

            document_name,
            document_number,
            supplier_name,
            effective_date,
            expiration_date,
            work_scope,
            pricing_payment,
            term_termination,
            law_jursidiction,
            signatures,
        
        })
     });
     if(res.ok){
        setUserData({ 
        document_name:"",
        document_number:"",
        supplier_name:"",
        supplier_category:"",
        effective_date:"",
        expiration_date:"",
        work_scope:"",
        pricing_payment:"",
        term_termination:"",
        law_jursidiction:"",
        signatures:"",
        
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
              <h3>Supplier Contract</h3>
              <div className={classes.content}>

              <div className={classes.input}>
                <label htmlFor='text'>Document Name*</label>
                <input type='text'  name="document_name"  value={userData.document_name} onChange={postUserData} />
              </div>

              <div className={classes.input}>
                <label htmlFor='text'>Document No.*</label>
                <input type='number' name="document_number" value={userData.document_number} onChange={postUserData} />
              </div>
        
              <div className={classes.input}>
              <label>Supplier Name*</label>
                    <select style={{margin:"5px", height:"30px", width:"17.8rem",borderRadius:"5px",borderStyle:"none",fontSize:"11px"}}
                    name="supplier_name" value={userData.supplier_name} onChange={postUserData}>
                      <option>Select Supplier Name</option>
                      {categoryItemsCtx.getApi.map((item,ind)=>{
                          return (
                          <option key={ind}>{item.name}</option>)
                      })}
                        
                    </select>
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
                <label htmlFor='text'>Scope of Work*</label>
                <input type='text' name="work_scope" value={userData.work_scope} onChange={postUserData}/>
              </div>

              <div className={classes.input}>
                <label htmlFor='text'>Pricing and Payment Terms*</label>
                <input type='file' name="pricing_payment" value={userData.pricing_payment} onChange={postUserData}/>
              </div>

              <div className={classes.input}>
                <label htmlFor='text'>Terms and Termination*</label>
                <input type='file' name="term_termination" value={userData.term_termination} onChange={postUserData}/>
              </div>

              <div className={classes.input}>
                    <label htmlFor='text'>Effective Date*</label>
                    <input type='date' name="effective_date" value={userData.effective_date} onChange={postUserData}/>
                  </div>
                  <div className={classes.input}>
                    <label htmlFor='text'>Expiration Date*</label>
                    <input type='date' name="expiration_date"  value={userData.expiration_date} onChange={postUserData}/>
                  </div>
                  <div className={classes.input}>
                    <label htmlFor='text'>Governing Law and jurisdiction*</label>
                    <input type='file' name="law_jursidiction" value={userData.law_jursidiction} onChange={postUserData}/>
                  </div>
                  <div className={classes.input}>
                    <label htmlFor='text'>Signatures*</label>
                    <input type='file' name="signatures" value={userData.signatures} onChange={postUserData}/>
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
    
export default SupplierContract