import Layout from '../Layout/Layout'
import { useContext, useState } from 'react';
import classes from './SupplierPage.module.css';
import { categoryContext } from '../store/CategoryProvider';
import StandardSupplierBom from '../Form/BomManagement/StandardSupplierBom';
import CustomSupplierBom from '../Form/BomManagement/CustomSupplierBom';
const BomManagementPage = () => {

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
      <div className={classes.container}>
      <h3 style={{marginTop:"80px",
                textAlign: "center",
                fontWeight:"bold",
                border:"2px solid rgba(25, 24, 24, 0.153)",
                padding:"15px",
                backgroundColor: "rgb(181, 179, 177)",
                boxShadow: "0 15px 20px rgba(0,0,0,3)",}}>Bom Management</h3>
         <div className={classes.supplier_page}>
           <div className={classes.supplier_label}>
              <label>Category*</label>
                    <select 
                    style={{ height:"30px", width:"10.5rem",borderRadius:"5px",borderStyle:"none"}}
                    value={selected} onChange={(e)=>handleChange(e)}>
                      <option>choose category</option>
                      {categoryItemsCtx.bomCategories.map((item,ind)=>{
                          return (
                          <option key={ind}>{item.value}</option>)
                      })}
                        
                    </select>
            </div>
            </div>
            <div className={classes.components}>
            {selected==="standard supplier bom"?<StandardSupplierBom/>:""}
            {selected === "custom supplier bom"?<CustomSupplierBom/>:""}
           
            </div>
            </div>
      </Layout>
    </>
  )
}

export default BomManagementPage;