
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
import Profile from './components/Profile'
import Register from './components/Register'




function App() {
const [allData , setAllData]=useState([])
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

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login fetchData={allData} />}/>
       <Route path="/Register" element={ <Register/>}/>
      <Route path="/HomePage" element={ <HomePage fetchData={allData}/>}/>
      <Route path="/Profile" element={ <Profile/>}/>
 


  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
