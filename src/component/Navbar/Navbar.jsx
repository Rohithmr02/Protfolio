import React from "react";
import '../Navbar/Navbar.css'
import logo from '../asset/Polygon.jpg'
import Resume from '../asset/RESUME.pdf'

function Navbar(){
    return(
        <div className="navbar-container">
            <div className="logo">
                <div className="logo-image">
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44" fill="none">
                <path d="M3.11357 17.5385L23 3.09017L42.8864 17.5385L35.2905 40.9164H10.7095L3.11357 17.5385Z" stroke="#EF6D58" stroke-width="5"/>
                </svg>
               <div className="logo-image1">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                <path d="M9.5 0L18.535 6.56434L15.084 17.1857H3.91604L0.464963 6.56434L9.5 0Z" fill="white"/>
              </svg>
               </div>
                </div>
                <div className="Logo-name">
                 <h1>Rohith.</h1>
                </div>
            </div>
            <nav>
                <ul>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Services">Services</a></li>
                    <li><a href="#Project">Project</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </nav>
            <div className="contact">
            <button><a href={Resume} download>Resume</a></button>
            </div>
        </div>
    )
}

export default Navbar;