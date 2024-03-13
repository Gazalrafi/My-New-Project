import React from 'react';
import { Link} from 'react-router-dom';
import Layout from '../Layout/Layout';
import classes from './Supplier.module.css'



const Supplier = () => {

  return ( 
    <>
    <Layout>
    <div>
    <div className={classes.details} >
          <h3>Supplier Management</h3>
    </div> 
    <div className={classes.sup_home}>
            <Link to='/supplier-page' className={classes.suphome_link}>Onboard Suppliers</Link> 
            <p>Create multiple supplier like (Manufacturer, Vendor, Tier-1, Tier-2) using this link !</p>
    </div>
    <div className={classes.sup_home}>
            <Link to='/supplier-details' className={classes.suphome_link}>View Supplier Details</Link> 
            <p>View supplier related information like (Onborading status, Related Documents) using this link !</p>
    </div>
    <div className={classes.sup_home}>
            <Link to='/supplier-documents' className={classes.suphome_link}>Supplier Documents</Link> 
            <p>Create Supplier documents like (Contract, Compliances, Purchase Order, Invoice) using this link !</p>
    </div>
    <div className={classes.sup_home}>
            <Link to='' className={classes.suphome_link}>View Supplier Contract Status</Link> 
            <p>View the supplier Onboarding status like (Inprogress, UnderReview, Approved, Rejected) using this link !</p>
    </div>
    <div className={classes.sup_home}>
            <Link to='/part' className={classes.suphome_link}>Part Management</Link> 
            <p>Create Supplier Part using this link !</p>
    </div>
    <div className={classes.sup_home}>
            <Link to='/bom' className={classes.suphome_link}>Bom Management</Link> 
            <p>Create Supplier Bill of material using link !</p>
    </div>
    <div className={classes.sup_home}>
            <Link to='/purchase-order' className={classes.suphome_link}>Purchase Order</Link> 
            <p>Create Supplier Purchase Order using link !</p>
    </div>
    <div className={classes.sup_home}>
            <Link to='/inventory-management' className={classes.suphome_link}>Inventory Management</Link> 
            <p>Create Supplier Inventory Management using link !</p>
    </div>
    <div className={classes.sup_home}>
            <Link to='' className={classes.suphome_link}>Create User</Link> 
            <p>Create multiple user using this link !</p>
    </div>
    <div className={classes.sup_home}>
            <Link to='' className={classes.suphome_link}>Add User To A Role</Link> 
            <p>Add users to respective group to handle the supplier data using this link !</p>
    </div>
   
    </div>
    </Layout>
 
    </>
  )
}

export default Supplier;