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

const Login = ({fetchData}) => {
  const [loading , setLoading]=useState(false);
  const [email , setEmail]=useState('');
  const [password , setPassword]=useState('');
 let navigate = useNavigate();
 console.log(fetchData)
//  grab all images from image urls
// const bitcoinUrl = fetchData[0].image;
// const etherumUrl = fetchData[1].image;
// const tetherUrl = fetchData[2].image;
// const binancecoinUrl = fetchData[3].image;
// const solanaUrl = fetchData[4].image;
// const usdcoinUrl = fetchData[5].image;
// const cardanoUrl = fetchData[6].image;
// const rippleUrl = fetchData[7].image;

 
  return (
    <div>
      {/* <img src={bitcoinUrl} className='bitcoin' />
      <img src={etherumUrl} className='etherum' />
      <img src={tetherUrl} className='teather' />
      <img src={binancecoinUrl} className='binance' />
      <img src={solanaUrl} className='solana' />
      <img src={usdcoinUrl} className='usdcoin' />
      <img src={cardanoUrl} className='cardano' />
      <img src={rippleUrl} className='ripple' /> */}
      <h1 className='headingFont'>CRYPTO 's</h1>
      {loading ? (<h1>Loading ...</h1>):
      (<Form>
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
          if(email.length < 6 ||email.length === 0 || password === 0 ){
            alert('Email needs to be more than 7 characters long and cannot be left blank ')
          }                
          if(password.length < 8 ){
            alert('password should be atleast more than 8 characters long')
          }         
          if(email.length > 6 && password.length > 8 ){
            navigate('/HomePage')
          }
          //push to database
          const sendUser ={
            email:email,
            password:password
          }
          axios.post('http://localhost:4000/login', sendUser) 
          .then(res => {
            console.log(res)
          })
      }}/>
      </Form>)}
  
    </div>
  )
}

export default Login
