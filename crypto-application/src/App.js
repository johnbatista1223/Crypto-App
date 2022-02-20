import './App.css';
import Login from './components/Login';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HomePage from './components/HomePage';
import axios from 'axios'
import{ useEffect,useState } from 'react'
import Register from './components/Register'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import CryptoHomeScreen from './components/CryptoHomeScreen';








function App() {
const [allData , setAllData]=useState([])
const [isLoggedIn, setIsLoggedIn]=useState(false)
const [users ,setUsers]=useState(null)
  const fetchData = () => {
  axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
  .then(function (response) {
    console.log(response.data);
    setAllData(response.data)
  })
  .catch(function (error) {
    console.log(error);
  })
  }

  useEffect(() => {
    fetchData()
  }, [])

  
    //  const getUser=  localStorage.getItem('user')
    //  setUsers(getUser)

  



   

//eventually update to private routes 
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/> 
      <Routes>
        <Route path="/" element={ <CryptoHomeScreen/> }/>
      <Route path="/login" element={<Login fetchData={allData} setIsLoggedIn={setIsLoggedIn} />}/>
       <Route path="/Register" element={ <Register/>}/>
        <Route path="/Homepage" element={ <HomePage fetchData={allData} />}/>        
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
