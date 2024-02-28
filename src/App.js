
import { Route,Routes} from 'react-router-dom';
import FormSubmit from './pages/FormSubmit';
import HomePage from './pages/HomePage';
import Supplier from './Form/Supplier';
import SupplierPage from './pages/SupplierPage';
import SupplierDetails from './pages/SupplierDetails';
import SupplierDocument from './pages/SupplierDocument';


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

      </Routes>
      {/* "proxy":"http://localhost:5000/api/v1", */}
    </div>
  );
}

export default App;
