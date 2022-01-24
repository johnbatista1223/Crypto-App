import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from 'axios'

const LoginInput = styled.input`
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
const Form =styled.form`
margin-top: 120px;
    position: absolute;
    text-align: center;
    top: 50%;
    width: 100%;
    // display:flex;
    // justify-content:space-evenly;
    `
    const Button = styled.input`
     width: 10%;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: -webkit-linear-gradient(-225deg,
    #b5ce2a 0%,
    #2dca18 48%,
    #06680b 100%);
  `
const BackButton = styled.button`
 width: 90px;
  color: white;
  padding: 14px 20px;

float:right;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: -webkit-linear-gradient(-225deg,
    #b5ce2a 0%,
    #2dca18 48%,
    #06680b 100%);
`
const Register = ({fetchData}) => {
  const [loading , setLoading]=useState(false);
  const [email , setEmail]=useState('');
  const [password , setPassword]=useState('');
 let navigate = useNavigate();
 console.log(fetchData)


 
  return (
    <div>
    
    <h1 className='heading'>Crypto's</h1>

      <h1 className='headingFont'>Register</h1>
      <BackButton onClick={() => {
        navigate('/')
      }}>back</BackButton>
     
      {loading ? 
      (<h1>Loading ...</h1>)
      :(<Form>
        <LoginInput type="text" autocomplete="on" value={email} placeholder='Email ...'
        onChange={(e) => {
          setEmail(e.target.value)
        }}/>
        <span style={{marginLeft: "2rem"}}></span>
        <LoginInput  type="password" autocomplete="on" value={password} placeholder='Password ...' onChange={(e) => {
      setPassword(e.target.value)
        }} /><br/>


      <Button type="submit" value="Submit" onClick={ (e) => {
        e.preventDefault();
        setLoading(true)
      
          if(email.length < 6 || email.length === 0 || password === 0 ){
            alert('Email needs to be more than 7 characters long and cannot be left blank ')
          }                
          if(password.length < 8 ){
            alert('password should be atleast more than 8 characters long')
          }         
          //push to database
          const sendUser ={
            email:email,
            password:password
          }
          axios.post('http://localhost:4000/register', sendUser) 
          .then(res => {
            if(res){
               navigate('/')
            }else {
              alert ('something went wrong')
            }
            console.log(res)
          })
      }}/>
      </Form>)}
  
    </div>
  )
}

export default Register
