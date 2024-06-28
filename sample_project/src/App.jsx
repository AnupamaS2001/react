import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Dashbord from './pages/Dashbord';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
function App() {
  const [data, setData] = useState([
    {id:1, name:"sai",email:'sai@123'}]);


  const [value, setValue] = useState(0)

  const values =[
  {id:2, name:"anu",email:'anu@123'},
  {id:3, name:"manu",email:'manu@123'},
  {id:4, name:"hari",email:'hari@123'},
  {id:5, name:"salu",email:'salu@123'}
  ]
  
  
  const handleButtonClick = () => {

    if (value < values.length){
      setData([...data,values[value]])
      setValue(value+1)
    }
    
  }
  
    

  return (
    <>

     <Router>
      <Routes>
      <Route path = '/' element={<Home/>}/>
      <Route path = '/dashboard' element = {<Dashbord data={data} value={value} handleButtonClick={handleButtonClick}/>}> </Route>

        
      </Routes>
     </Router>


     
    </>
  )


}


export default App
