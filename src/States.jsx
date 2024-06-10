import  { useState } from 'react'

const States = () => {
    const[name,setname]=useState("virat")

    setname("dhoni")
    console.warn('warning');
  return (
    <div>
    <h6>hello</h6>
      {name}
    </div>
  )
}

export default States
