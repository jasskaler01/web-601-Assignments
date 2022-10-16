import React, {useState} from "react";

export default function TempControl(){
    const [ temp , tempChange] = useState(30)
    return (
        <div>
            <h1>Jaskaran Singh</h1>
            <h2>Temprature Converter App</h2>
            <br/>
           <div>
            <h3>Current Temperature : {temp} </h3>
            </div> 
            </div>
       
    )
}