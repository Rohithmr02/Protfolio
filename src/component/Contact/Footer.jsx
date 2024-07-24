import React from "react";
import '../Contact/Contact.css'
import facebook from '../asset/Group 1.png'
import Twitter from '../asset/Group 2.png'
import Instagram from '../asset/Group 3.png'


function Footer(){
    return(
        <div className="footer">
            <div className="footer-content">
             <div className="footer-heading"><h1>Personal</h1></div>
             <div className="footer-menu">
                <div className="footer-menu-heading"><h3>Menu</h3></div>
                <div className="footer-menu-content">
                <ul>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Services">Services</a></li>
                    <li><a href="#Project">Project</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
                </div>
             </div>
             <div className="footer-service">
                <div className="footer-service-heading">
                    <h3>Service</h3>
                </div>
                <div className="footer-service-content">
                    <ul>
                    <li><a href="#Services">Design</a></li>
                    <li><a href="#Services">Development</a></li>
                    </ul>
                </div>
             </div>
             <div className="footer-logo">
                <div className="facebook"><a href=""><img src={facebook} alt="facebook" /></a></div>
                <div className="twitter"><a href=""><img src={Twitter} alt="Twitter" /></a></div>
                <div className="instagram"><a href=""><img src={Instagram} alt="Instagram" /></a></div>
             </div>
            </div>
            <div className="line"></div>
            <div className="footer-copyright">
                 <p>Copyright © 2024 Rohith. All Rights Reserved.</p>
            </div>
        </div>
    )
}


export default Footer;