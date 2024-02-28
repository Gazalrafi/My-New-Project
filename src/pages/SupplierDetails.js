
import {useState,useEffect,useContext} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import classes from './SupplierDetails.module.css';
import { categoryContext } from '../store/CategoryProvider';

const SupplierDetails = () => {

  const [value,setValue]=useState('');
  // const[datas,setDatas]=useState([])
  const [tableFilter,setTableFilter]=useState([]);
  const [showTable,setIsShowTable]=useState(false);
  const [checked, setChecked] = useState(false); 

  const getApiCtx=useContext(categoryContext);
  const data=getApiCtx.getApi;
  
            
      const filterData=(e)=>{

           if(e.target.value !==""){
            setValue(e.target.value);
            const filterData=data.filter(o=>Object.keys(o).some(k=>String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())));
            setTableFilter([...filterData])
           }else{
             setValue(e.target.value);
            //  setDatas([...datas])
           }
      }
      const tableShowHandler=()=>{ 
          setIsShowTable(prev=>!prev)  
      }
      const handleCheckboxChange=(e)=> {
        setChecked(e.target.checked);
     }
    
  return (
    <>
      <div className={classes.search_data}>
        <div className="container mt-3 ">

          <div className="row height d-flex justify-content-center align-items-center">

            <div className="col-md-6">

              <div className="form d-flex p-4">
              
                <input type="text" className="form-control form-input" placeholder="Search supplier here..."
                onChange={filterData} value={value} style={{height:'40px'}}/>
                 <button onClick={tableShowHandler} style={{height:'40px',width:'150px',marginTop:"-0.5px"}}>Search All</button>
                
              </div>
             
            </div>
            
          </div>

          </div>

          {value.length>0 && !showTable && <div className='container mt-5'style={{maxWidth:"100%"}}><table className="table table-sm table-striped table-hover table-bordered "
            style={{fontSize:"12px"}}>
           <thead className='table-dark' >
            <tr>
            <th></th>
              <th scope="col">#</th>
              {/* <th scope="col">ID</th> */}
              <th scope="col">Category</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Contact</th>
              <th scope="col">District</th>
              <th scope="col">State</th>
              <th scope="col">Country</th>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
              <th scope="col">Location</th>
              <th scope="col">Product Id</th>
              <th scope="col">Product Type</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
           <tbody>
          {value.length>0 ? tableFilter.map((result,index)=>{
            return(  
           <tr key={index}>
             <td><input type="checkbox"/></td>
             <td>{index}</td>
             <td>{result.category}</td>
             <td>{result.name}</td>
             <td>{result.email}</td>
             <td>{result.contact}</td>
             <td>{result.district}</td>
             <td>{result.state}</td>
             <td>{result.country}</td>
             <td>{result.start_date}</td>
             <td>{result.end_date}</td>
             <td>{result.location}</td>
             <td>{result.pid}</td>
             <td>{result.pt}</td>
             <td>
              <button style={{backgroundColor:'blue',borderStyle:'none'}}>edit</button>
              <button style={{backgroundColor:'red',borderStyle:'none'}}><DeleteIcon/></button>
            </td>
            </tr>
          )}):[]
          }
          </tbody>      
         </table>
        </div>}
         
       {/* /////////////////////////////////Search All///////////////////////////////////////////// */}

          {showTable && <div className='container mt-5'style={{maxWidth:"100%"}}><table className="table table-sm table-striped table-hover table-bordered "
        style={{fontSize:"12px"}}>
           <thead className='table-dark'>
            <tr>
            <th></th>
              <th scope="col">#</th>
              {/* <th scope="col">ID</th> */}
              <th scope="col">Category</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Contact</th>
              <th scope="col">District</th>
              <th scope="col">State</th>
              <th scope="col">Country</th>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
              <th scope="col">Location</th>
              <th scope="col">Product Id</th>
              <th scope="col">Product Type</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
           <tbody>
          {value.length>0 ? tableFilter.map((result,index)=>{
            return(  
           <tr key={index}>
             <td><input type="checkbox" onChange = {handleCheckboxChange}/></td>
             <td>{index}</td>
             <td>{result.category}</td>
             <td>{result.name}</td>
             <td>{result.email}</td>
             <td>{result.contact}</td>
             <td>{result.district}</td>
             <td>{result.state}</td>
             <td>{result.country}</td>
             <td>{result.start_date}</td>
             <td>{result.end_date}</td>
             <td>{result.location}</td>
             <td>{result.pid}</td>
             <td>{result.pt}</td>
            {!checked ? <td>
              <button style={{backgroundColor:'blue',borderStyle:'none'}}>edit</button>
              <button style={{backgroundColor:'red',borderStyle:'none'}}><DeleteIcon/></button>
            </td>:[]}
            </tr>
          )}):data.map((result,index)=>{
              return(  
             <>
               <tr key={index}>
               <td><input type="checkbox"/></td>
               <td>{index}</td>
               <td>{result.category}</td>
               <td>{result.name}</td>
               <td>{result.email}</td>
               <td>{result.contact}</td>
               <td>{result.district}</td>
               <td>{result.state}</td>
               <td>{result.country}</td>
               <td>{result.start_date}</td>
               <td>{result.end_date}</td>
               <td>{result.location}</td>
               <td>{result.pid}</td>
               <td>{result.pt}</td>
               <td>
                 <button style={{backgroundColor:'blue',borderStyle:'none'}}>edit</button>
                 <button style={{backgroundColor:'red',borderStyle:'none'}}><DeleteIcon/></button>
               </td>
              </tr>
              </>
              )
             })

          }
          </tbody>      
         </table>
        </div>}
      </div>
    </>
  )
}

export default SupplierDetails

//<input type="text" onChange={(event)=>setValue(event.target.value)} value={value}/>

  //    const user= {     
              //     0:{
              //         category:  "manufacturer",
              //         contact: "64666",
              //         country: "Holy See (Vatican City State)"
              //     },
              //     1:{
              //       category:  "vendor",
              //       contact: "64666",
              //       country: "Holy See (Vatican City State)"
              //   },
              //   2:{
              //     category:  "tier",
              //     contact: "64666",
              //     country: "Holy See (Vatican City State)"
              // }
              //       }

              //       for (const key in user) {
              //         // console.log(key.country) //undefined
              //         console.log(key) // it will give key 0, 1, 2
              //         const keyObj=user[key];
              //        console.log(keyObj)
              //        console.log(keyObj.category)
              //    }
     