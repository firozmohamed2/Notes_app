import React from "react";
import Image1 from "./Image1";



function Note(Props){
    return <div className="note">
       <p>{Props.key}</p>
        <h1>{Props.title}</h1>
        <p>{Props.content}</p>
       
         <Image1 img={Props.image} />
    </div>
}


export default Note;
