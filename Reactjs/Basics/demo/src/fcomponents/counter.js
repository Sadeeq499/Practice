import { useState } from "react"
import { useEffect } from "react";
import axios from 'axios';
export default function Counter (){
    
    const [Rdata,setRdata] = useState([]);
    useEffect (() =>{
        const display = async () =>{    
            const {data} = await axios.get("https://api.github.com/users");
            setRdata(data);
        }      
        display();
    },[Rdata])

    // usedeepcompareffect hook
    // const handlePlus = () =>{
    //     setcount(count+1)
    // }
    // const handleMinus =()=>{
    //     setcount(count-1)
    // }
    // const handleReset =() =>{
    //     setcount(0)
    // }
    return(
        <div>
                {
                    Rdata.map(l =>{
                        return <li>{l.id}  {l.login}`</li>
                    })
                }
            {/* <h1>{count}</h1>
            <button onClick={handlePlus}>+</button> 
            <button onClick={handleMinus}>-</button> 
            <button onClick={handleReset}>Reset</button>  */}
        </div>
    )
}