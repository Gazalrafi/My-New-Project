import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { categoryContext} from '../../store/CategoryProvider'
import { useState } from 'react';
import classes from '../Form.module.css'
// import {message} from "antd";


const ComplianceCertificate = () => {

  // const categoryItemsCtx=useContext(categoryContext);
  const navigate=useNavigate();
  
  const [userData,setUserData]=useState([{

    document_name:"",
    certification_number:"",
    supplier_name:"",
    compliance_standard:"",
    certification_date:"",
    expiration_date:"",
    certifying_authority:"",
    compliance_statement:""
   
  }]);
  
    let name,value;

    const postUserData=(event)=>{

       name=event.target.name;
       value=event.target.value;
       setUserData({...userData,[name]:value});
          
    }

    const submitHandler = async(event)=>{
      
      event.preventDefault();
      const {document_name,certification_number,supplier_name,compliance_standard,
      certification_date,expiration_date,certifying_authority,compliance_statement}=userData;
      
    try{
     let document_type="compliance_certification";
     if(document_name && certification_number && supplier_name && compliance_standard && 
    certification_date && expiration_date && certifying_authority && compliance_statement ) {
     const res= await fetch(`https://kkh-mechware-b4b32-default-rtdb.firebaseio.com/userDocuments/${document_type}.json`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({

            document_name,
            certification_number,
            supplier_name,
            compliance_standard,
            certification_date,
            expiration_date,
            certifying_authority,
            compliance_statement
        })
     });
     if(res){
        setUserData({ 
       
            document_name:"",
            certification_number:"",
            supplier_name:"",
            compliance_standard:"",
            certification_date:"",
            expiration_date:"",
            certifying_authority:"",
            compliance_statement:""
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
              <h3>Compliance Certification</h3>
              <div className={classes.content}>

              <div className={classes.input}>
                <label htmlFor='text'>Document Name*</label>
                <input type='text'  name="document_name"  value={userData.document_name} onChange={postUserData} />
              </div>

              <div className={classes.input}>
                <label htmlFor='text'>Certification No.*</label>
                <input type='number' name="certification_number" value={userData.certification_number} onChange={postUserData} />
              </div>
        
              <div className={classes.input}>
                <label htmlFor='text'>Supplier Name*</label>
                <input type='text' name="supplier_name" value={userData.supplier_name} onChange={postUserData}/>
              </div>

              <div className={classes.input}>
                <label htmlFor='text'>Compliance Standard*</label>
                <input type='file' name="compliance_standard" value={userData.compliance_standard} onChange={postUserData}/>
              </div>
              <div className={classes.input}>
                    <label htmlFor='text'>Certification Date*</label>
                    <input type='date' name="certification_date" value={userData.certification_date} onChange={postUserData}/>
                  </div>
                  <div className={classes.input}>
                    <label htmlFor='text'>Expiration Date*</label>
                    <input type='date' name="expiration_date"  value={userData.expiration_date} onChange={postUserData}/>
                  </div>
                  <div className={classes.input}>
                    <label htmlFor='text'>Certifying Authority*</label>
                    <input type='file' name="certifying_authority" value={userData.certifying_authority} onChange={postUserData}/>
                  </div>
                  <div className={classes.input}>
                    <label htmlFor='text'>Compliance Statement*</label>
                    <input type='file' name="compliance_statement" value={userData.compliance_statement} onChange={postUserData}/>
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
    
export default ComplianceCertificate;