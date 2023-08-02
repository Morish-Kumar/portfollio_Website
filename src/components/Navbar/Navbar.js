import React from 'react'
import "./Navbar.css"

export default function Navbar() {
    return (
        <div id='navbar'>
            <a id='logo' href='/home'>PORTFOLIO</a>
            <a href="/home">Home</a>
            <a href="/account">Acccount</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact Me</a>
            <button id='download-bu'>Downlaod CV</button>

        </div>
    )
}
