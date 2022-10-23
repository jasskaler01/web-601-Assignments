import React, {useState} from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
export default function TempControl(){
    const [ temp , setTemp] = useState(30)
    const [cel , setCel] = useState("Celsius")
    const [fah , setFah] = useState("")
    const [m , setMode] = useState("Heat")
   function changeMode(){
    if (m ==="Heat"){
        setMode("Cold")
        
    }
    if (m ==="Cold"){
        setMode("Auto")
    }
    if (m ==="Auto"){
        setMode("Heat")
    }
   }
    function ChangeF(){
        if (cel === "Celsius"){
            setTemp(temp+38.3)
            setFah("Fahrenheit")
            setCel("")
        }}
        function ChangeC(){
        if (cel === ""){
            setTemp(temp-38.3)
            setCel("Celsius")
            setFah("")
        }}
    
    return (
        <Container maxWidth="sm">
        <div>
            
            <h1>Jaskaran Singh</h1>
            <h2>Temprature Converter App</h2>
            <br/>
           <div >
            <h3>Current Temperature :<button onClick={()=>{setTemp(temp-1)}}>-</button> {temp} <button onClick={()=>{setTemp(temp+1)}}>+</button> {cel}{fah} </h3>
          <button onClick={()=>{ChangeF()
        }}>Change To Fahrenheit</button>
        <br/>
        <button onClick={()=>{ChangeC()
        }}>Change To Celsius</button>

            </div> 
            <div>
                <h1>Mode : {m} </h1>
                <button onClick={()=>{changeMode()
        }}>Change Mode</button>
            </div>
            
            
            </div>
       
            </Container>)
}