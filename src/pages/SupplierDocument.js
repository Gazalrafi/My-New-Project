import React from 'react';
import { categoryContext } from '../store/CategoryProvider';
import { useContext, useState } from 'react';
import SupplierContract from '../Form/SupplierDocumentForm/SupplierContract';
import classes from './SupplierPage.module.css';
import PurchaseOrder from '../Form/SupplierDocumentForm/PurchaseOrder';
import Invoice from '../Form/SupplierDocumentForm/Invoice';
import CertificateOfInsurance from '../Form/SupplierDocumentForm/CertificateOfInsurance';
import ComplianceCertificate from '../Form/SupplierDocumentForm/ComplianceCertification';

const SupplierDocument = () => {
 
    const categoryItemsCtx=useContext(categoryContext);
  
    const [selected, setSelected]=useState('');
    const handleChange=(e)=>{
      console.log(e.target.value)
      setSelected(e.target.value)
    }

  return (
    <>  <div className={classes.container}>
         <h2 style={{marginTop:"10px",
                textAlign: "center",
                fontWeight:"bold",
                border:"2px solid rgba(25, 24, 24, 0.153)",
                padding:"15px",
                backgroundColor: "rgb(181, 179, 177)",
                boxShadow: "0 15px 20px rgba(0,0,0,3)",}}>Supplier Document</h2>
           <div className={classes.supplier_page} style={{marginTop:"10px"}}>
          
             <div className={classes.supplier_label}>
              <label>Category*</label>
                    <select 
                    style={{margin:"1px", height:"25px", width:"10.5rem",borderRadius:"5px",borderStyle:"none"}}
                    value={selected} onChange={(e)=>handleChange(e)}>
                      <option>select documents</option>
                      {categoryItemsCtx.supplierDocument.map((item,ind)=>{
                          return (
                          <option key={ind}>{item.value}</option>)
                      })}
                        
                    </select>
            </div>
            </div>
            <div className={classes.components}>
            {selected==="supplier contract"?<SupplierContract/>:""}
            {selected==="purchase order"?<PurchaseOrder/>:""}
            {selected==="invoice"?<Invoice/>:""}
            {selected==="certificate of insurance"?<CertificateOfInsurance/>:""}
            {selected==="compliance certificate"?<ComplianceCertificate/>:""}
            </div>
          </div>      
    </>
  )
}

export default SupplierDocument