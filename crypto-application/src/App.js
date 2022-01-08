
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

function App() {
const [allData , setAllData]=useState([])
  const fetchData = () => {
  axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
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
      <Route path="/" element={ <Login/>}/>
      <Route path="/HomePage" element={ <HomePage fetchData={allData}/>}/>
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
