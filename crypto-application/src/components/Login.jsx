import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loading , setLoading]=useState(false);
  const [email , setEmail]=useState('');
  const [password , setPassword]=useState('');
  
 let navigate = useNavigate();

  return (
    <div>
      {loading ? (<h1>Loading ...</h1>):
      (<form>
        <label>email</label>
        <input type="text" value={email} onChange={(e) => {
          setEmail(e.target.value)
        }}/>
        <label >password</label>
        <input  type="password" value={password} onChange={(e) => {

  setPassword(e.target.value)
        }} />
      <input type="submit" value="Submit" onClick={ (e) => {
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
          // const sendUser ={
          //   email:email,
          //   password:password
          // }
          // axios.post('url', sendUser) .then(res => {
          //   console.log(res)
          // })
      }}/>
      </form>)}
  
    </div>
  )
}

export default Login
