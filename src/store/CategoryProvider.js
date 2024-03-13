
import React from 'react';
import { useState,createContext,useEffect } from 'react';

export const categoryContext=createContext({
    category:[],
    supplierDocument:[],
    getApi:[],
    manufactureData:[],
    vendorData:[],
    tier1Data:[],
    tier2Data:[],
    partCategories:[],
    bomCategories:[],
    purchaseCategories:[],
    inventoryCategories:[],
    partDatas:[]
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
        
        value:"invoice"
    },
    {
        
        value:"certificate of insurance"
    },
    {
        
        value:"compliance certificate"
    },
]

export const partCategories=[
    {
        
        value:"standard parts"
    },
    {
        
        value:"custom parts"
    },
    
    
]

export const bomCategories=[
    {
        
        value:"standard supplier bom"
    },
    {
        
        value:"custom supplier bom"
    },
]

    export const purchaseCategories=[
        {
            
            value:"standard purchase order"
        },
        {
            
            value:"blanket purchase order"
        },   
        {
            
            value:"contract purchase order"
        },
        {
            
            value:"scheduled purchase order"
        },
]

export const inventoryCategories=[
    {
        
        value:"raw material inventory"
    },
    {
        
        value:"work in progress inventory"
    },   
    {
        
        value:"finished goods inventory"
    },
    {
        
        value:"safety stock inventory"
    },
    {
        
        value:"cycle count inventory"
    },
    {
        
        value:"consignment inventory"
    },
    {
        
        value:"obsolete inventory"
    },
]


const CategoryProvider = (props) => {

    const [category,setCategory]=useState(categories);
    const[document,setDocument]=useState(documents);
    const [data,setData]=useState([]);
    const [manufacture,setManufacture]=useState([]);
    const [vendor,setVendor]=useState([]);
    const[tier1,setTier1]=useState([]);
    const[tier2,setTier2]=useState([]);
    const[partCategory,setPartCategory]=useState(partCategories);
    const[bomCategory,setBomCategory]=useState(bomCategories);
    const[purchaseCategory,setPurchaseCategory]=useState(purchaseCategories);
    const[inventoryCategory,setInventoryCategory]=useState(inventoryCategories);
    const[partData,setPartData]=useState([])
    

    const Api="https://kkh-mechware-b4b32-default-rtdb.firebaseio.com/userData.json";
     
    // All data
    const getResult= async (url)=>{

        try{ 
         const res= await fetch(url);
         const mydata=await res.json();
         console.log({mydata})
        
         // first solution
         
        //  const abc=Object.values(mydata)
        //  setData(abc)
        //  console.log(abc)



        let arr=[];
        for (const category in mydata) {
            console.log(`Category: ${category}`);
            for (const itemId in mydata[category]) {
                const item = mydata[category][itemId];
                console.log(item)
                arr.push(item);
            }
            console.log(arr)
        }
        setData(arr);

         // second solution
        //   let arr=[];
        //   for(let elem in mydata){
        //    arr.push(mydata[elem])
        //    console.log(mydata[elem])
        //   }
        //  setData(arr)
       
        }
        catch(error){
           console.log(error)
        }
        }
        useEffect(()=>{
            getResult(Api)
        },[])
                         
        console.log(data)

    // Manufacturer data

    useEffect(()=>{
        const getResult= async ()=>{

            try{ 
             const res= await fetch("https://kkh-mechware-b4b32-default-rtdb.firebaseio.com/userData/manufacturer.json");
             const mydata=await res.json();
             console.log(mydata)
            
             // first solution
             
            const abc=Object.values(mydata)
            setManufacture(abc)
            console.log(abc)
            }
            catch(error){
               console.log(error)
            }
            }
            getResult();
    },[])

     //Vendor Data

     useEffect(()=>{
        const getResult= async ()=>{

            try{ 
             const res= await fetch("https://kkh-mechware-b4b32-default-rtdb.firebaseio.com/userData/vendor.json");
             const mydata=await res.json();
             console.log(mydata)
            
             // first solution
             
            const abc=Object.values(mydata)
            setVendor(abc)
            console.log(abc)
            }
            catch(error){
               console.log(error)
            }
            }
            getResult();
    },[])

   //Tier1 data

   useEffect(()=>{
    const getResult= async ()=>{

        try{ 
         const res= await fetch("https://kkh-mechware-b4b32-default-rtdb.firebaseio.com/userData/tier1.json");
         const mydata=await res.json();
         console.log(mydata)
        
         // first solution
         
        const abc=Object.values(mydata)
        setTier1(abc)
        console.log(abc)
        }
        catch(error){
           console.log(error)
        }
        }
        getResult();
},[])

   //Tier2 data

   useEffect(()=>{
    const getResult= async ()=>{

        try{ 
         const res= await fetch("https://kkh-mechware-b4b32-default-rtdb.firebaseio.com/userData/tier2.json");
         const mydata=await res.json();
         console.log(mydata)
        
         // first solution
         
        const abc=Object.values(mydata)
        setTier2(abc)
        console.log(abc)
        }
        catch(error){
           console.log(error)
        }
        }
        getResult();
},[])

// part data

    const getPartApi= async ()=>{

        try{ 
         const res= await fetch("https://kkh-mechware-b4b32-default-rtdb.firebaseio.com/part-management.json");
         const mypartData=await res.json();
         console.log(mypartData);
         
        const abc=Object.values(mypartData)
        setPartData(abc)
        console.log(abc)
        }
        catch(error){
           console.log(error)
        }
        }
useEffect(()=>{
        getPartApi();
},[])



    const categoryItems={
        category:category,
        supplierDocument:document,
        getApi:data,
        partCategories:partCategory,
        bomCategories:bomCategory,
        manufactureData:manufacture,
        vendorData:vendor,
        tier1Data:tier1,
        tier2Data:tier2,
        purchaseCategories:purchaseCategory,
        inventoryCategories:inventoryCategory,
        partDatas:partData
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