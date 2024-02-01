
import { Route,Routes} from 'react-router-dom';
import FormSubmit from './pages/FormSubmit';
import HomePage from './pages/HomePage';
import Supplier from './Form/Supplier';
import SupplierPage from './pages/SupplierPage';



function App() {
  return (
    <div className="App">
       
  
       <Routes>
        <Route path='/' exact element={<HomePage/>}/>
        <Route path="/submitted" exact element={<FormSubmit/>}/>
        <Route path='/supplier' exact element={<Supplier/>}/>
        <Route path='/supplier-page' exact element={<SupplierPage/>}/>

      </Routes>

    </div>
  );
}

export default App;
