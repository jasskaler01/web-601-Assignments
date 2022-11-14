import { useSlotProps } from "@mui/base";
import React, {useState} from "react";

export default function Movie(props){
const [movieAge , setAge]= useState(2022-props.year)
    return(
        <div>
        
        <h2>{props.title}</h2>
        <h2>{props.year}</h2>
        <h2>{props.genre}</h2>
        <h2>{props.director}</h2>
        <h2>{movieAge}</h2>
        
    
        </div>
        
    )

}

