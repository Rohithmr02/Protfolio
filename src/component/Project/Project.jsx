import React from "react";
import '../Project/Project.css'
import ProjectCard from "./ProjectCard";
import Resume from '../asset/RESUME.pdf'



function Project(){

    const data=[
        {
            img:"https://www.edigitallibrary.com/img/libraryBooks.jpg",
            Title:"Library Management System",
            description:"This Website is devloped by Mern Stack.An integrated library management system (LMS)  that helps in simplifying the daily operations of the library. The purpose of a library management system is to manage & track the daily work of the library such as issuing books, return books etc."
        },
        {
            img:"https://png.pngtree.com/thumb_back/fh260/background/20230408/pngtree-burger-double-cheese-illustration-background-image_2150904.jpg",
            Title:"Go Food",
            description:"This Site is used to order food . This site is developed by Mern Stack."
        },
        {
            img:"https://t4.ftcdn.net/jpg/05/96/62/65/360_F_596626503_jrzjZNYStDexiWxQFqO7oCh6M8PdMlJs.jpg",
            Title:"Ecommerce Site",
            description:"This Site is used to order Dresses,Jewellery for mens,womens etc. This site is developed by Mern Stack."
        }
    ]


    return(
        <div className="Project-container" id="Project">
            <div className="Project-heading">
                <div className="Project-title">
                    <p>Portfolio</p>
                    <h1>Latest Work</h1>
                </div>
                <div className="Project-button">
                    <button><a href={Resume} download>Resume</a></button>
                </div>
            </div>
            <div className="Project-content">
                    {data.map((item,index)=>{
                        return(
                            <div className="Card" key={index}>
                                <ProjectCard item={item}/>
                            </div>
                        )
                    })}
                </div>
        </div>
    )
}

export default Project;