import Layout from '../Layout/Layout'
import { useContext, useState } from 'react';
import VendorForm from '../Form/VendorForm';
import Tier1 from '../Form/Tier1';
import Tier2 from '../Form/Tier2';
import ManufacturerForm from '../Form/ManufacturerForm';
import classes from './SupplierPage.module.css';
import { categoryContext } from '../store/CategoryProvider';
const SupplierPage = () => {

  const categoryItemsCtx=useContext(categoryContext);
  console.log(categoryItemsCtx)

  const [selected, setSelected]=useState('');
  const handleChange=(e)=>{
    console.log(e.target.value)
    setSelected(e.target.value)
  }
  return (
    <>
      <Layout>
         <div className={classes.supplier_page}>
           <h3>Supplier Management</h3>
           <div className={classes.supplier_label}>
              <label>Category*</label>
                    <select 
                    style={{margin:"5px", height:"30px", width:"10.5rem",borderRadius:"5px",borderStyle:"none"}}
                    value={selected} onChange={(e)=>handleChange(e)}>
                      <option>choose category</option>
                      {categoryItemsCtx.category.map((item,ind)=>{
                          return (
                          <option key={ind}>{item.value}</option>)
                      })}
                        
                    </select>
            </div>
            </div>
            {selected==="manufacturer"?<ManufacturerForm/>:""}
            {selected === "vendor"?<VendorForm/>:""}
            {selected === "tier1"?<Tier1/>:""}
            {selected === "tier2"?<Tier2/>:""}
      </Layout>
    </>
  )
}

export default SupplierPage