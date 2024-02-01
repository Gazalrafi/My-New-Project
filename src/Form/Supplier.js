import React from 'react';
import { Link} from 'react-router-dom';
import Layout from '../Layout/Layout';
import classes from './Supplier.module.css'


const Supplier = () => {

  return (
    <>
    <Layout> 
    <div className={classes.details}>
          <h3>Supplier Management</h3>
    </div> 
    <div className={classes.sup_home}>
            <Link to='/supplier-page' className={classes.suphome_link}>Onboard Suppliers</Link> 
            <p>Lorem ipsum is typically a corrupted version</p>
    </div>
    <div className={classes.sup_home}>
            <Link to='' className={classes.suphome_link}>View Supplier Details</Link> 
            <p>Lorem ipsum is typically a corrupted version</p>
    </div>
    <div className={classes.sup_home}>
            <Link to='' className={classes.suphome_link}>View Supplier Contract Status</Link> 
            <p>Lorem ipsum is typically a corrupted version</p>
    </div>
    <div className={classes.sup_home}>
            <Link to='' className={classes.suphome_link}>Create User</Link> 
            <p>Lorem ipsum is typically a corrupted version</p>
    </div>
    <div className={classes.sup_home}>
            <Link to='' className={classes.suphome_link}>Add User To A Role</Link> 
            <p>Lorem ipsum is typically a corrupted version</p>
    </div>

    </Layout>
 
    </>
  )
}

export default Supplier;