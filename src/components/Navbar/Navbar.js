import React from 'react'
import "./Navbar.css"

export default function Navbar() {
    return (
        <div id='navbar'>
            <a id='logo' href='#'>PORTFOLIO</a>
            <a href="#">Home</a>
            <a href="#">Acccount</a>
            <a href="#">Services</a>
            <a href="#">Contact Me</a>
            <button id='download-bu'>Downlaod CV</button>

        </div>
    )
}
