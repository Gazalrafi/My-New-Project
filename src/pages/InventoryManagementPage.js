import Layout from '../Layout/Layout'
import { useContext, useState } from 'react';
import classes from './SupplierPage.module.css';
import { categoryContext } from '../store/CategoryProvider';
import RawMaterialInventory from '../Form/InventoryManagement/RawMaterialInventory';
import WorkInProgressInventory from '../Form/InventoryManagement/WorkInProgressInventory';
import FinishedGoodsInventory from '../Form/InventoryManagement/FinishedGoodsInventory';
import SafetyStockInventory from '../Form/InventoryManagement/SafetyStockInventory';
import CycleCountInventory from '../Form/InventoryManagement/CycleCountInventory';
import ConsignmentInventory from '../Form/InventoryManagement/ConsignmentInventory';
import ObsoleteInventory from '../Form/InventoryManagement/ObsoleteInventory';


const InventoryManagementPage = () => {

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
                boxShadow: "0 15px 20px rgba(0,0,0,3)",}}>Inventory Management</h3>
         <div className={classes.supplier_page}>
           <div className={classes.supplier_label}>
              <label>Category*</label>
                    <select 
                    style={{ height:"30px", width:"10.5rem",borderRadius:"5px",borderStyle:"none"}}
                    value={selected} onChange={(e)=>handleChange(e)}>
                      <option>choose category</option>
                      {categoryItemsCtx.inventoryCategories.map((item,ind)=>{
                          return (
                          <option key={ind}>{item.value}</option>)
                      })}
                        
                    </select>
            </div>
            </div>
            <div className={classes.components}>
            {selected==="raw material inventory"?<RawMaterialInventory/>:""}
            {selected === "work in progress inventory"?<WorkInProgressInventory/>:""}
            {selected === "finished goods inventory"?<FinishedGoodsInventory/>:""}
            {selected === "safety stock inventory"?<SafetyStockInventory/>:""}
            {selected === "cycle count inventory"?<CycleCountInventory/>:""}
            {selected === "consignment inventory"?<ConsignmentInventory/>:""}
            {selected === "obsolete inventory"?<ObsoleteInventory/>:""}
           
            </div>
            </div>
      </Layout>
    </>
  )
}

export default InventoryManagementPage;