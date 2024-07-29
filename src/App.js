import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Createpost from './components/Createpost';
import Viewall from './components/Viewall';
import Viewmy from './components/Viewmy';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signin/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/create' element={<Createpost/>} />
      <Route path='/view' element={<Viewall/>} />
      <Route path='/viewmy' element={<Viewmy/>} />
      
      
    </Routes>
    </BrowserRouter>
  );
}


export default App;
