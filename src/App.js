
import './App.css';
import Form from './Form/Form';
import { Route,Routes} from 'react-router-dom';
import FormSubmit from './pages/FormSubmit';
import Layout from './Layout/Layout';

function App() {
  return (
    <div className="App">
       
   
       <Routes>
        <Route path='/' exact element={<Form/>}/>
        <Route path="/submitted" exact element={<FormSubmit/>}/>
      </Routes>
    </div>
  );
}

export default App;
