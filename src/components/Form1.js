import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

export default function Form1() {
    return (
        <div className='Form1'>
            <div className='link'> <NavLink id='buttonform' to='/decimal'>Decimal</NavLink></div>
            <div className='link'> <NavLink id='buttonform' to='/binary'> Binary</NavLink ></div>
            <div className='link'> <NavLink id='buttonform' to='/octal'>Octal</NavLink></div>
            <div className='link'> <NavLink id='buttonform' to='/hexadecimal'>Hexadecimal</NavLink></div>
        </div >
    )
}
