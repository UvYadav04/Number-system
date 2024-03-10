import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
export default function Navbar() {
    return (
        <div className="navbar">
            <div className="left">

                <Link to='/' id='navlink'>Home</Link>
            </div>
        </div>
    )
}
