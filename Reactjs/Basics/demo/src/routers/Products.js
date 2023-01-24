import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
export default function Products() {
    const {id} = useParams();
    const nav = useNavigate();
  return (
    <div>
      <h1>Products no : {id}</h1>
      <button style={{width:90, height:30, backgroundColor:"red", color:"white"}} 
      // onClick={()=>{window.history.back()}} method one
       onClick={()=>{nav(-1)}} // method two
      > Back 
      </button>

    </div>
  )
}
