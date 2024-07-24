import React, { useState } from "react";
import '../Project/Project.css'

function ProjectCard({item}){
    const[value,setvalue]=useState(true);
    const HandleViewButton=()=>{
        setvalue(false)
    }
    const Handelclosebutton=()=>{
        setvalue(true)
    }
    return(
        <>
        {value ?
        
        <div className="ProjectCard-container">
             <img src={item.img} alt="" />
             <div className="ProjectCard-title">
             <h1>{item.Title}</h1>
             <button onClick={HandleViewButton}>View description</button>
             </div>
        </div>
        :
        <div className="ProjectCard-container-description">
             <p><b>Description : </b> {item.description}</p>
             <button onClick={Handelclosebutton}>close</button>
            
        </div>
        }
        </>
    )
}

export default ProjectCard;