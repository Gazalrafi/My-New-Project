import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { categoryContext} from '../../store/CategoryProvider'
import { useState } from 'react';
import classes from '../Form.module.css'
// import {message} from "antd";


const CertificateOfInsurance = () => {
  
  const navigate=useNavigate();
  
  // const categoryItemsCtx=useContext(categoryContext);
  const [userData,setUserData]=useState([{

    document_name:"",
    policy_number:"",
    supplier_name:"",
    insured_party:"",
    insurance_coverage:"",
    effective_date:"",
    expiration_date:"",
    insurance_company:"",
    authorized_signatures:""
   
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
      const {document_name, policy_number,supplier_name,insured_party,insurance_coverage,effective_date,
      expiration_date,insurance_company,authorized_signatures}=userData;
      
    try{
      let document_type="certificate_of_insurance";
     if(document_name && policy_number && supplier_name && insured_party && insurance_coverage && 
    effective_date && expiration_date && insurance_company && authorized_signatures) {
     const res= await fetch(`https://kkh-mechware-b4b32-default-rtdb.firebaseio.com/userDocuments/${document_type}.json`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({

            document_name,
            policy_number,
            supplier_name,
            insured_party,
            insurance_coverage,
            effective_date,
            expiration_date,
            insurance_company,
            authorized_signatures
        })
     });
     if(res){
        setUserData({ 
       
            document_name:"",
            policy_number:"",
            supplier_name:"",
            insured_party:"",
            insurance_coverage:"",
            effective_date:"",
            expiration_date:"",
            insurance_company:"",
            authorized_signatures:""
        
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
              <h3>Certificate Of Insurance</h3>
              <div className={classes.content}>

              <div className={classes.input}>
                <label htmlFor='text'>Document Name*</label>
                <input type='text'  name="document_name"  value={userData.document_name} onChange={postUserData} />
              </div>

              <div className={classes.input}>
                <label htmlFor='text'>Policy No.*</label>
                <input type='number' name="policy_number" value={userData.policy_number} onChange={postUserData} />
              </div>
              <div className={classes.input}>
                <label htmlFor='text'>Supplier Name*</label>
                <input type='text' name="supplier_name" value={userData.supplier_name} onChange={postUserData}/>
              </div>
        
              <div className={classes.input}>
                <label htmlFor='text'>Insured Party*</label>
                <input type='text' name="insured_party" value={userData.insured_party} onChange={postUserData}/>
              </div>

              <div className={classes.input}>
                <label htmlFor='text'>Insurance Coverage*</label>
                <input type='file' name="insurance_coverage" value={userData.insurance_coverage} onChange={postUserData}/>
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
                    <label htmlFor='text'>Insurance Company*</label>
                    <input type='text' name="insurance_company" value={userData.insurance_company} onChange={postUserData}/>
                  </div>
                  <div className={classes.input}>
                    <label htmlFor='text'>Authorized Signatures*</label>
                    <input type='file' name="authorized_signatures" value={userData.authorized_signatures} onChange={postUserData}/>
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
    
export default CertificateOfInsurance;