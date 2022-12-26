import './Signup.css'
import {useState} from 'react'
 



const Signup=()=>{
    const [firstName,setFirstName]=useState('')
    const [LastName,setLastName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const SignupUser=()=>{
        console.log(`${firstName}`)
        console.log(`${LastName}`)
        console.log(`${email}`)
        console.log(`${password}`)
    }
    return (
   <div>
       <div className="container">
       <h1> Sign Up</h1>
       <div className="mb-3">
        <label>First Name</label>
        <input  onChange={(event)=>{
       setFirstName(event.target.value)
        }} className="form-control"type="text"></input>
        <label>Last Name</label>
        <input onChange={(event)=>{
        setLastName(event.target.value)
        }} className="form-control" type="text"></input>
        <label>Email</label>
        <input onChange={(event)=>{
        setEmail(event.target.value)
                 }} className="form-control" type="email"></input>
        <label>Password</label>
        <input onChange={(event)=>{
           setPassword(event.target.value)
        }} className="form-control" type="password"></input>
        
        <div className="mb-3">
        <button onClick={SignupUser} className="btn btn-success"> SignUp</button>
        </div>
       </div>
       </div>
   </div>

    )


}
export default Signup;