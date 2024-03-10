import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'

export default function Gray() {
    const [octal, setoctal] = useState(0);
    const [binary, setbinary] = useState("0");
    const [decimal, setdecimal] = useState("0");
    const [hexa, sethexa] = useState("0");
    const handlechange = (e) => {
        setoctal((item) => {
            return e.target.value;
        })
    }


    const handlesubmit = (e) => {
        e.preventDefault();
        let i = 0, Num = 0, num1 = octal, digit;

        // ************invalidity************

        let str9 = "";
        str9 = str9.concat(octal);
        let r = 0;
        while (r < str9.length) {
            if (str9[r] === '8' || str9[r] === '9' || str9[r] === '-') {

                setbinary((item) => {
                    let error = "../error/."
                    return error
                })
                setdecimal((item) => {
                    let error = "../error/."
                    return error
                })
                sethexa((item) => {
                    let error = "../error/."
                    return error
                })
                return;
            }
            r++;
        }


        // ************invalidity************
        // ************Decimal*****************
        while (num1 > 0) {
            digit = num1 % 10;
            Num = Num + digit * (Math.pow(8, i));
            i++;
            num1 = parseInt(num1 / 10);
        }
        setdecimal((item) => {
            return Num
        });
        console.log(Num)
        // ************Decimal ***********************


        // ******binary*********
        let Num3 = Num, digit3, s3 = "";

        while (Num3 > 0) {
            digit3 = Num3 % 2;
            s3 = s3.concat(digit3);
            Num3 = parseInt(Num3 / 2);
        }
        s3 = s3.split('').reverse().join('')
        setbinary((item) => {
            return s3;
        })
        // ******binary*********

        // ***********hexadecimal***********


        let Num2 = Num, s2 = "", digit2
        while (Num2 > 0) {
            digit2 = Num2 % 16;
            if (digit2 >= 10) {
                s2.concat(String.fromCharCode(65 + digit2 - 10))
            }
            else
                s2 = s2.concat(digit2);
            Num2 = parseInt(Num2 / 16);
        }
        s2 = s2.split('').reverse().join('')

        sethexa((item) => {
            return s2
        })

        // ***********hexadecimal***********
    }
    return (
        <div className='binary'>
            <div><Navbar /></div>
            <div className="mainbinary">
                <div className="contentbinary">
                    <div className="input1">
                        <form onSubmit={handlesubmit}>
                            <label htmlFor="binaryinput">Enter a Octal number : </label>
                            <input type="number" onChange={handlechange} id='binaryinput' name='binaryinput' value={octal} />
                            <br />
                            <button>Convert</button>
                        </form></div>
                    <div className="show1">
                        <div className="left">
                            <label htmlFor="decimal">Decimal</label>
                            <input type="string" disabled value={decimal} />
                        </div>
                        <div className="right">
                            <label htmlFor="Binary">Binary</label>
                            <input type="string" disabled value={binary} />
                        </div>
                        <div className="mid">
                            <label htmlFor="Hexadecimal">Hexadecimal</label>
                            <input type="string" disabled value={hexa} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
