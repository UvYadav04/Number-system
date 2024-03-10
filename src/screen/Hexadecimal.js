import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'

export default function Gray() {
    const [hexa, sethexa] = useState("0");
    const [binary, setbinary] = useState("0");
    const [decimal, setdecimal] = useState("0");
    const [octal, setoctal] = useState("0");

    const handlechange = (e) => {
        sethexa((item) => {
            return e.target.value;
        })
    }


    const handlesubmit = (e) => {
        e.preventDefault();
        let i = 0, Num = 0, digit;
        let num1 = "", increaser = 0;
        num1 = num1.concat(hexa)
        // ************Decimal*****************
        i = num1.length - 1;
        while (i >= 0) {
            digit = num1[i];
            if (digit >= 'A' && digit <= 'F') {
                Num = (digit.charCodeAt() - 65 + 10) * Math.pow(16, increaser);
            }
            else if (digit >= '0' && digit <= '9') {
                Num = Num + (digit.charCodeAt() - 48) * Math.pow(16, increaser)
            }
            else {
                let none = "../error"
                setbinary((item) => {
                    return none
                })
                setdecimal((item) => {
                    return none
                })
                setoctal((item) => {
                    return none
                })
                return
            }
            increaser++;
            i--;
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
            digit2 = Num2 % 8;
            s2 = s2.concat(digit2);
            Num2 = parseInt(Num2 / 8);
        }
        s2 = s2.split('').reverse().join('')

        setoctal((item) => {
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
                            <label htmlFor="binaryinput">Enter a Hexadecimal number : </label>
                            <input type="text" onChange={handlechange} id='binaryinput' name='binaryinput' value={hexa} />
                            <br />
                            <button>Convert</button>
                        </form></div>
                    <div className="show1">
                        <div className="left">
                            <label htmlFor="decimal">Decimal</label>
                            <input type="text" disabled value={decimal} />
                        </div>
                        <div className="right">
                            <label htmlFor="Binary">Binary</label>
                            <input type="text" disabled value={binary} />
                        </div>
                        <div className="mid">
                            <label htmlFor="Octal">Octal</label>
                            <input type="text" disabled value={octal} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
