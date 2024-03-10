import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'

export default function Decimal() {
    const [decimalMain, setdecimal] = useState(0);
    const [binary, setbinary] = useState("0");
    const [octal, setoctal] = useState("0");
    const [hexa, sethexa] = useState("0");

    let negative = false;
    let decimal = decimalMain;

    const handlechange = (e) => {
        // console.log(`changing`)
        setdecimal((item) => {
            return e.target.value;
        })
    }

    const handlesubmit = (e) => {
        e.preventDefault()
        if (decimalMain < 0) {
            negative = true;
            decimal = decimal * (-1);
        }

        let q = 1;
        while (decimal >= Math.pow(2, q))
            q++;
        console.log(`bits required : `, q)

        let Num1 = decimal, Num2 = decimal, Num3 = decimal, digit1, digit2, digit3;
        let s1 = "", s2 = "", s3 = "";

        while (Num1 > 0) {
            digit1 = Num1 % 8;
            s1 = s1.concat(digit1);
            Num1 = parseInt(Num1 / 8);
        }

        while (Num2 > 0) {
            digit2 = Num2 % 16;
            if (digit2 >= 10) {
                s2.concat()
                switch (digit2) {
                    case (10):
                        s2 = s2.concat('A')
                        break;
                    case (11):
                        s2 = s2.concat('B')
                        break;
                    case (12):
                        s2 = s2.concat('C')
                        break;
                    case (13):
                        s2 = s2.concat('D')
                        break;
                    case (14):
                        s2 = s2.concat('E')
                        break;
                    case (15):
                        s2 = s2.concat('F')
                        break;
                    default:
                }
            }
            else
                s2 = s2.concat(digit2);
            Num2 = parseInt(Num2 / 16);
        }

        while (Num3 > 0) {
            digit3 = Num3 % 2;
            s3 = s3.concat(digit3);
            Num3 = parseInt(Num3 / 2);
        }

        // ****if number is negative*******
        if (negative) {
            let i = 0;
            //making actual binary number
            s3 = s3.split('').reverse().join('')

            //flipping ones and zeroes
            s3 = s3.replaceAll('0', '2')
            s3 = s3.replaceAll('1', '0')
            s3 = s3.replaceAll('2', '1')

            // adding one to binary number
            let arr4 = s3.split()
            for (i = 0; i < s3.length; i++)
                arr4[i] = s3[i]
            let arr2 = arr4.reverse();
            let carry = 1;
            let j = 0;
            while (1 && j !== arr2.length) {
                if (carry === 0)
                    break;
                else {
                    if (arr2[j] === "1") {
                        arr2[j] = "0";
                        carry = 1;
                    }
                    else {
                        arr2[j] = "1";
                        carry = 0;
                    }

                    j++;
                }
            }
            arr2 = arr2.reverse();

            // converting ino string again
            let newdata = "";
            for (i = 0; i < arr2.length; i++)
                newdata = newdata.concat(arr2[i])

            setbinary((item) => {
                return newdata;
            })

            // ************setting octal and hexa***********
            // *******************octal*********************

            let n1, octalnumber = "", temport;
            let str3 = ""
            str3 = str3.concat(newdata);
            let powerer = 0;
            // console.log(str3)

            while (str3.length >= 3) {
                n1 = 0;
                // console.log(`str : `, str3)
                temport = 0;
                while (n1 < 3) {
                    temport = temport + str3[str3.length - n1 - 1] * Math.pow(2, n1)
                    n1++;
                }
                str3 = str3.slice(0, str3.length - 3)
                // console.log(`temport : `, temport)
                octalnumber = octalnumber.concat(temport);
                powerer++;
            }
            // console.log(`str3 remianed : `, str3)


            if (str3.length >= 1) {
                // console.log(`yup size is >=1`)
                str3 = str3.split('').reverse().join('');
                while (str3.length < 3)
                    str3 = str3.concat('0')

                str3 = str3.split('').reverse().join('');
                // console.log(`str3 updatedx :`, str3)
                n1 = 0;
                temport = 0;
                while (n1 < 3) {
                    temport = temport + str3[str3.length - n1 - 1] * Math.pow(2, n1)
                    n1++;
                }
                octalnumber = octalnumber.concat(temport);

            }

            setoctal((item) => {
                return octalnumber.split('').reverse().join('')
            })


            // *******************octal*********************
            // *******************hexa*********************
            let hexanumber = ""
            let str4 = ""
            str4 = str4.concat(newdata)

            // console.log(str4)

            while (str4.length >= 4) {
                n1 = 0;
                // console.log(`str : `, str4)
                temport = 0;
                while (n1 < 4) {
                    temport = temport + str4[str4.length - n1 - 1] * Math.pow(2, n1)
                    n1++;
                }
                str4 = str4.slice(0, str4.length - 4)
                // console.log(`temport : `, temport)
                if (temport >= 10)
                    hexanumber = hexanumber.concat(String.fromCharCode(65 + temport - 10));
                else
                    hexanumber = hexanumber.concat(temport);
            }
            // console.log(`hexanumber: `, hexanumber)

            if (str4.length >= 1) {
                str4 = str4.split('').reverse().join('');
                while (str4.length < 4)
                    str4 = str4.concat('0')

                str4 = str4.split('').reverse().join('');
                n1 = 0;
                temport = 0;
                while (n1 < 4) {
                    temport = temport + str4[str4.length - n1 - 1] * Math.pow(2, n1)
                    n1++;
                }
                if (temport >= 10)
                    hexanumber = hexanumber.concat(String.fromCharCode(65 - 10 + temport));
                else
                    hexanumber = hexanumber.concat(temport);

            }
            // console.log(hexanumber)
            hexanumber = hexanumber.split('').reverse().join('')
            // console.log(hexanumber)

            sethexa((item) => {
                return hexanumber
            })
            // *******************hexa*********************
            // ************setting octal and hexa***********
        }

        else {
            s1 = s1.split('').reverse().join('')
            s2 = s2.split('').reverse().join('')
            s3 = s3.split('').reverse().join('');



            setbinary((item) => {
                return s3;
            })
            sethexa((item) => {
                return s2;
            })
            setoctal((item) => {
                return s1;
            })
        }
    }
    return (
        <div className='binary'>
            <div><Navbar /></div>
            <div className="mainbinary">
                <div className="contentbinary">
                    <div className="input1">
                        <form onSubmit={handlesubmit}>
                            <label htmlFor="binaryinput">Enter a number in decimals: </label>
                            <input type="number" onChange={handlechange} id='binaryinput' name='binaryinput' value={decimalMain} />
                            <br />
                            <button>Convert</button>
                        </form></div>
                    <div className="show1">
                        <div className="left">
                            <label htmlFor="Binary">Binary</label>
                            <input type="string" disabled value={binary} />
                        </div>
                        <div className="right">
                            <label htmlFor="Octal">Octal</label>
                            <input type="string" disabled value={octal} />
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
