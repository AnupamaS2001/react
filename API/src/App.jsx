import Dashboard from './pages/Dashboard';
import Shop from './pages/Shop';
import Home from './pages/Home';
import Addform from './pages/Addform';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';

import './App.css'

function App() {

  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/shop/products/add' element={<Addform/>}/>
        </Routes>
      </Router>
  );
}

export default App;
