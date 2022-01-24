import React,{useEffect} from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const List = styled.li`
float: right;
 a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
a:hover {
   background: -webkit-linear-gradient(-225deg,
    #b5ce2a 0%,
    #2dca18 48%,
    #06680b 100%);
}
`
const Unorderlist = styled.ul`
list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: rgb(31, 29, 29);
  font-size:30px;
`
const Navbar = () => {
  let navigate = useNavigate();

  const logout = () => {
  // localStorage.removeItem('token')
  navigate('/')
};


// useEffect(() => {
//  logout()
// }, []);


  return (
    <div>
   <Unorderlist>
     
  <List><Link to={'/Profile'}>Profile</Link></List>
  <List><Link to={'/'}>Logout</Link></List>
</Unorderlist>

    </div>

  )
}

export default Navbar
