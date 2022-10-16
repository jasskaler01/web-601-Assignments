import React, {useState} from "react";

export default function TempControl(){
    const [ temp , setTemp] = useState(30)
    const [state , setState] = useState("Celsius")
    function ChangeState(){
        if (state === "Celsius"){
            setTemp(temp+38.3)
            setState("Fahrenheit")
        }
        if (state === "Fahrenheit"){
            setTemp(temp-38.3)
            setState("Celsius")
        }
    }
    return (
        <div>
            <h1>Jaskaran Singh</h1>
            <h2>Temprature Converter App</h2>
            <br/>
           <div>
            <h3>Current Temperature : {temp} {state} </h3>
          <button onClick={()=>{ChangeState()
        }}>Change To {state}</button>
            </div> 
            </div>
       
    )
}