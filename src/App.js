
import { Route,Routes} from 'react-router-dom';
import FormSubmit from './pages/FormSubmit';
import HomePage from './pages/HomePage';
import Supplier from './Form/Supplier';
import SupplierPage from './pages/SupplierPage';
import SupplierDetails from './pages/SupplierDetails';
import SupplierDocument from './pages/SupplierDocument';
import PartManagementPage from './pages/PartManagementPage';
import BomManagementPage from './pages/BomManagementPage';
import PurchaseOrderPage from './pages/PurchaseOrderPage';
import InventoryManagementPage from './pages/InventoryManagementPage';


function App() {
  return (
    <div className="App">
       
    
       <Routes>
        <Route path='/' exact element={<HomePage/>}/>
        <Route path="/submitted" exact element={<FormSubmit/>}/>
        <Route path='/supplier' exact element={<Supplier/>}/>
        <Route path='/supplier-page' exact element={<SupplierPage/>}/>
        <Route path='/supplier-details' exact element={<SupplierDetails/>}/>
        <Route path='/supplier-documents' exact element={<SupplierDocument/>}/>
        <Route path='/part' exact element={<PartManagementPage/>}/>
        <Route path='/bom' exact element={<BomManagementPage/>}/>
        <Route path='/purchase-order' exact element={<PurchaseOrderPage/>}/>
        <Route path='/inventory-management' exact element={<InventoryManagementPage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
