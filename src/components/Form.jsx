import React, { useState } from 'react'
import "./Form.css"


const Form = () => {
    const [data,setData]=useState([])
    const[name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [mobile,setMobile]=useState("")
    const changename=(e)=>{
        setName(e.target.value)
        console.log(e.target.value);
        
    }
    const changeemail=(e)=>{
        setEmail(e.target.value)
        console.log(e.target.value);
        
    }
    function mobiles(e){
        setMobile(e.target.value)
        console.log(e.target.value);
    }
    
    const submit=(e)=>{
        let obj={
            name:name,
            email:email,
            mobile:mobile
        }
        data.push(obj)
        console.log(data,"data")
        localStorage.setItem("register",JSON.stringify(data))
        
        setData(JSON.parse(localStorage.getItem("register")))
        console.log(data);
    
    }
  return (
    <div className='form'>
      <label>Name</label>
      <input type="text" placeholder='enter your name' onChange={changename} /><br></br>
      <label>Email</label>
      <input type="email" placeholder='enter your email' onChange={changeemail}/><br></br>
      <label>Mob.</label>
      <input type='number'placeholder='enter your number'onChange={mobiles}/><br></br>

      <button className="btn"  style={{margin:"auto"}} onClick={submit}>submit</button>
      
      <table>
      <thead >
      <th>Name</th>
      <th>Email</th>
      <th>Mob</th>
      </thead>
      </table>
      
{
    data.map((e)=>{
        return(
            <div>
            <table>
            <tbody style={{margin:"20px"}}>
            <tr >
            <td  >{e.name}</td>
            <td >{e.email}</td>
            <td  >{e.mobile}</td>
            </tr>
            </tbody>
            </table>
           
            </div>
        )
    })
}
      
      </div>
      
    
  )
}

export default Form
