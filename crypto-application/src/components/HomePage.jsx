import React,{useState} from 'react'
import Pagination from './Pagination'
import styled from "styled-components";
import CryptoCoins from './CryptoCoins';
const Input = styled.input`
  padding-left: 16px;
  margin-bottom:25px;
  width: 300px;
  height: 50px;
  border-radius: 4px;
  border: none;
  font-size: 25px;
 background-image: linear-gradient(
    -225deg,
    #b5ce2a 0%,
    #2dca18 48%,
    #06680b 100%
  );

  color: #e2e2e2;
::placeholder {
  color: #e2e2e2;
  font-size: 25px;
}
}`

const HomePage = ({fetchData}) => {
  console.log(fetchData[0])
  const [search, setsearch]=useState('')

 const fetchAllData = fetchData.filter(data => {
   if(data){
return data.name.toLowerCase().includes(search.toLowerCase())
   }
 }) 
  console.log(fetchData)
  return (
    <div>
      <h1 style={{fontSize:'40px', color: '#e2e2e2'}}>Crypto Currency App</h1>
  <form>
    <label style={{fontSize:'30px', color: '#e2e2e2'}}>Search for Currency</label><br/>
    <br/>
    <Input type="text" style={{fontSize:'25px'}} value={search} placeholder='Search ...' onChange={(e)=> {
      console.log('working')
      setsearch(e.target.value)
    }}/>
  </form>
  {fetchAllData === 0 ? 
  <h5> Sorry No Matches</h5>
  :( <CryptoCoins 
    fetchAllData={fetchAllData}
  
    
    />
    // fetchAllData.map(allData => (
    // <h1 style={{color: '#e2e2e2'}} key={allData.id}>{allData.name}</h1>
  // )
  // )
  )}
  <Pagination/>
    </div>
  )
}

export default HomePage
