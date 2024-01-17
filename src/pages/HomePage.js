import React from 'react';
import Layout from '../Layout/Layout';
import classes from './HomePage.module.css';
import {Link }from 'react-router-dom';
const HomePage = () => {
  return (
    <>
    <Layout>
        <div className={classes.home}>
            <Link to='/supplier' className={classes.home_link}>Supplier Management</Link>
            <Link  className={classes.home_link}>Purchase Order</Link>
            <Link  className={classes.home_link}>Sales Order</Link>
            <Link  className={classes.home_link}>Inventory Management</Link>
            <Link  className={classes.home_link}> Reports</Link>
        </div>
    </Layout>
    </>
  )
}

export default HomePage