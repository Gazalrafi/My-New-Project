
import './App.css';
import Form from './Form/Form';
import { Route,Routes} from 'react-router-dom';
import FormSubmit from './pages/FormSubmit';
import Layout from './Layout/Layout';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
       
   
       <Routes>
        <Route path='/' exact element={<HomePage/>}/>
        <Route path="/submitted" exact element={<FormSubmit/>}/>
        <Route path='/supplier' exact element={<Form/>}/>

      </Routes>
    </div>
  );
}

export default App;
