import { useSlotProps } from "@mui/base";
import React, {useState} from "react";

export default function Movie(props){

    return(
        <div>
        <hr />
        <h2>{props.title}</h2>
        <h2>{props.year}</h2>
        <h2>{props.genre}</h2>
        <h2>{props.director}</h2>
        <hr />
        </div>
        
    )

}
