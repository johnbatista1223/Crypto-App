import React,{useState} from 'react'
import Pagination from './Pagination'
import styled from "styled-components";
import CryptoCoins from './CryptoCoins';
import Navbar from './Navbar';
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
const Header = styled.h1`
 font-family: 'The Nautigal', cursive;
    text-align: center;
    top: 50%;
    width: 100%;
    background: -webkit-linear-gradient(-225deg,
    #b5ce2a 0%,
    #2dca18 48%,
    #06680b 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 92px;
  font-weight:bold;
`
const HomePage = ({fetchData}) => {
  console.log(fetchData[0])
  const [search, setsearch]=useState('')
  const [users, setUsers] = useState([]);
  const [CurrentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(6);

 const fetchAllData = fetchData.filter(data => {
   if(data){
return data.name.toLowerCase().includes(search.toLowerCase())
   }
 }) 
  console.log(fetchData)

  const indexOfLastUser = CurrentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Navbar/>
      <Header>Crypto's App</Header>
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
    indexOfFirstUser={indexOfFirstUser}
    indexOfLastUser={indexOfLastUser}
    />
  )}
  <Pagination
        totalUsers={users.length}
        usersPerPage={usersPerPage}
        paginate={paginate}
        currentPage={CurrentPage}
  />
    </div>
  )
}

export default HomePage
