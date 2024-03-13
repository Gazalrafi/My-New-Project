import {useState,useEffect,useContext} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import classes from './SupplierDetails.module.css';
import { categoryContext } from '../store/CategoryProvider';

const PartDetails = () => {

    const getApiCtx=useContext(categoryContext);
    const data=getApiCtx.partDatas;
    console.log(data.createdDate);

  return (
    <>
    <div className='container mt-5'style={{maxWidth:"100%"}}><table className="table table-sm table-striped table-hover table-bordered "
            style={{fontSize:"12px"}}>
           <thead className='table-dark' >
            <tr>
              <th scope="col">Created Date</th>
              <th scope="col">Description</th>
              <th scope="col">Modified Date</th>
              <th scope="col">Part Name</th>
              <th scope="col">Part Number</th>
              <th scope="col">Compliance Information</th>
              <th scope="col">Cost</th>
              <th scope="col">Material</th>
              <th scope="col">MPN NUmber</th>
              <th scope="col">Quality Matrices</th>
              <th scope="col">Supplier Name</th>
              <th scope="col">Weight</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          
          <tbody>
           <tr >
             {/* <td>{index}</td> */}
             <td>{data.createdDate}</td>
             <td>{data.description}</td>
             <td>{data.modifiedDate}</td>
             <td>{data.part_name}</td>
             <td>{data.part_number}</td>
             <td>{data.compliance_information}</td>
             <td>{data.cost}</td>
             <td>{data.material}</td>
             <td>{data.mpn_number}</td>
             <td>{data.quality_matrices}</td>
             <td>{data.supplier_name}</td>
             <td>{data.weight}</td>
             <td>
              <button style={{backgroundColor:'blue',borderStyle:'none'}}>edit</button>
              <button style={{backgroundColor:'red',borderStyle:'none'}}><DeleteIcon/></button>
            </td>
            </tr>
          
          </tbody>      
         </table>
        </div>
    </>
  )
}

export default PartDetails