import React from 'react'
import OH from '../components/OH.png'
import Form1 from '../components/Form1'
import Navbar from '../components/Navbar'
export default function Home() {
    return (
        <div className="mainbody">
            <div><Navbar /></div>
            <div className="main2">
                <div className="left">
                    <div className="up">
                        <h2 className='userhello'>Hello User,</h2>
                        <h3 className='userhello2'>Today What You Have to Convert.</h3>
                    </div>
                    <div className="down">
                        <Form1 />
                    </div>
                </div>
                <div className="right">
                    <img src={OH} alt="this is a convertor" />
                </div>
            </div>
        </div>
    )
}
