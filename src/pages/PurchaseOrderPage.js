import Layout from '../Layout/Layout'
import { useContext, useState } from 'react';
import VendorForm from '../Form/VendorForm';
import Tier1 from '../Form/Tier1';
import Tier2 from '../Form/Tier2';
import ManufacturerForm from '../Form/ManufacturerForm';
import classes from './SupplierPage.module.css';
import { categoryContext } from '../store/CategoryProvider';
import StandardPurchaseOrder from '../Form/PurchaseOrder/StandardPurchaseOrder';
import BlanketPurchaseOrder from '../Form/PurchaseOrder/BlanketPurchaseOrder';
import ContractPurchaseOrder from '../Form/PurchaseOrder/ContractPurchaseOrder';
import SchedulePurchaseOrder from '../Form/PurchaseOrder/SchedulePurchaseOrder';
const PurchaseOrderPage = () => {

  const categoryItemsCtx=useContext(categoryContext);
  console.log(categoryItemsCtx)

  const [selected, setSelected]=useState('');
  const handleChange=(e)=>{
    console.log(e.target.value)
    setSelected(e.target.value)
  }

  if(selected==='manufacturer'){
    localStorage.setItem('manufacturer',selected)
  }
  else{
    localStorage.removeItem('manufacturer')
  }

  if(selected==='vendor'){
    localStorage.setItem('vendor',selected)
  }
  else{
    localStorage.removeItem('vendor')
  }

  if(selected==='tier1'){
    localStorage.setItem('tier1',selected)
  }
  else{
    localStorage.removeItem('tier1')
  }

  if(selected==='tier2'){
    localStorage.setItem('tier2',selected)
  }
  else{
    localStorage.removeItem('tier2')
  }

  return (
    <>
      <Layout>
      <div className={classes.container}>
      <h3 style={{marginTop:"80px",
                textAlign: "center",
                fontWeight:"bold",
                border:"2px solid rgba(25, 24, 24, 0.153)",
                padding:"15px",
                backgroundColor: "rgb(181, 179, 177)",
                boxShadow: "0 15px 20px rgba(0,0,0,3)",}}>Purchase Order</h3>
         <div className={classes.supplier_page}>
           <div className={classes.supplier_label}>
              <label>Purchase Order Category*</label>
                    <select 
                    style={{ height:"30px", width:"10.5rem",borderRadius:"5px",borderStyle:"none"}}
                    value={selected} onChange={(e)=>handleChange(e)}>
                      <option>choose category</option>
                      {categoryItemsCtx.purchaseCategories.map((item,ind)=>{
                          return (
                          <option key={ind}>{item.value}</option>)
                      })}
                        
                    </select>
            </div>
            </div>
            <div className={classes.components}>
            {selected==="standard purchase order"?<StandardPurchaseOrder/>:""}
            {selected === "blanket purchase order"?<BlanketPurchaseOrder/>:""}
            {selected === "contract purchase order"?<ContractPurchaseOrder/>:""}
            {selected === "scheduled purchase order"?<SchedulePurchaseOrder/>:""}
            </div>
            </div>
      </Layout>
    </>
  )
}

export default PurchaseOrderPage;