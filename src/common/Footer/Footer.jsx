import React from "react";
import "./Footer.style.css";

const Footer = () => {
    return (
        <div className= "FooterContainer">
            <div className= "FooterText">
                &copy; {new Date().getFullYear()} Netflix.
            </div>
        </div>
    );
};

export default Footer;