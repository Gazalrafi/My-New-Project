import React from 'react';
import { useState,createContext,useEffect } from 'react';

export const categoryContext=createContext({
    category:[],
    supplierDocument:[],
    getApi:[]
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
    
]

export const documents=[
    {
        
        value:"supplier contract"
    },
    {
        
        value:"purchase order"
    },
    {
        
        value:"invoice"
    },
    {
        
        value:"certificate of insurance"
    },
    {
        
        value:"compliance certificate"
    },
]
const CategoryProvider = (props) => {

    const [category,setCategory]=useState(categories);
    const[document,setDocument]=useState(documents);
    const [data,setData]=useState([]);

    const Api="https://kkh-mechware-b4b32-default-rtdb.firebaseio.com/userData.json";

    const getResult= async (url)=>{

        try{ 
         const res= await fetch(url);
         const mydata=await res.json();
         console.log(mydata)
        
         // first solution
         const abc=Object.values(mydata)
         setData(abc)
         console.log(abc)
       
 
         // second solution
         //  let arr=[];
         //  for(let elem in mydata){
         //   arr.push(mydata[elem])
         //   console.log(mydata[elem])
         //  }
         // setData(arr)
       
        }
        catch(error){
           console.log(error)
        }
        }
        useEffect(()=>{
            getResult(Api)
        },[])
                         
        console.log(data)






    const categoryItems={
        category:category,
        supplierDocument:document,
        getApi:data
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