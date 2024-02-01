import React from 'react';
import { useState,createContext } from 'react';

export const categoryContext=createContext({
    category:[]
})
export const categories=[
    {
        
        value:"manufacturer"
    },
    {
        
        value:"vendor"
    },
    {
        
        value:"tier1"
    },
    {
        
        value:"tier2"
    },
    {
        
        value:"tier3"
    },
]
const CategoryProvider = (props) => {

    const [category,setCategory]=useState(categories);

    const categoryItems={
        category:category
    }

  return (
    <>
    <categoryContext.Provider value={categoryItems}>
           {props.children}
    </categoryContext.Provider>
    </>
  )
}

export default CategoryProvider