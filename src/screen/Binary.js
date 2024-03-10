import React, { useState } from 'react'
import Navbar from '../components/Navbar'

export default function Binary() {
  const [total, settotal] = useState(1);
  const [binary, setbinary] = useState(0);
  const [decimal, setdecimal] = useState(0);
  const [octal, setoctal] = useState("0");
  const [hexa, sethexa] = useState("0");
  let negative = false;
  const handlechange = (e) => {
    let value = e.target.value
    // console.log(total)
    // console.log(value.length)
    if (value.length > total)
      return
    setbinary((item) => {
      return e.target.value;
    })
  }

  const handletotal = (e) => {
    if (e.target.value <= 0) {
      settotal((item) => {
        return "";
      })
      return
    }
    setbinary((item) => {
      return 0
    })
    settotal((item) => {
      return e.target.value;
    })
  }



  const handlesubmit = (e) => {
    e.preventDefault();

    // ************Decimal*****************

    // ********check if it's negative or positve************

    const length = binary.length;
    let unit, b = 0, totalvalue = 0;

    let number = binary;

    let check = ""
    check = check.concat(number)
    // console.log(`chwecking: `, check.length)

    // *************if invalid**************
    let length2 = check.length;
    let errorstring = "../error"
    let i = 0;
    for (i = 0; i < length2; i++) {
      if (check[i] !== '0' && check[i] !== '1') {
        setdecimal((item) => {
          return errorstring
        });
        setoctal((item) => {
          return errorstring
        });
        sethexa((item) => {
          return errorstring
        });
        return
      }
    }
    // *************if invalid**************

    let min = Math.pow(2, total - 1)
    let max = Math.pow(2, total)
    let Num = 0, num1 = binary, digit;
    i = 0;
    while (number > 0) {
      unit = number % 10;
      totalvalue = totalvalue + unit * (Math.pow(2, b));
      number = parseInt(number / 10);
      b++;
    }
    console.log(`min : `, min)
    console.log(`max : `, max)
    console.log(`totalvalue : `, totalvalue)
    if (totalvalue >= min && totalvalue < max) {

      // ************if number is positive **********
      while (num1 > 0) {
        digit = num1 % 10;
        Num = Num + digit * (Math.pow(2, i));
        i++;
        num1 = parseInt(num1 / 10);
      }
      setdecimal((item) => {
        return Num
      });
      let Num2 = Num, Num3 = Num, digit1, digit2;
      let s1 = "", s2 = "";
      while (Num2 > 0) {
        digit1 = Num2 % 8;
        s1 = s1.concat(digit1);
        Num2 = parseInt(Num2 / 8);
      }

      while (Num3 > 0) {
        digit2 = Num3 % 16;
        if (digit2 >= 10) {
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
        Num3 = parseInt(Num3 / 16);
      }
      s1 = s1.split('').reverse().join('')
      s2 = s2.split('').reverse().join('')
      // console.log(`s1 is :`, s1);
      // console.log(`s2 is :`, s2);

      sethexa((item) => {
        return s2;
      })
      setoctal((item) => {
        return s1;
      })


      // ************if number is positive **********

    }
    else {
      // console.log('negative')
      negative = true;

      let str = "";
      str = str.concat(binary);
      let i = 0;
      let arr = str.split();
      // console.log(str)
      // console.log(str.split())
      // console.log(arr.length)
      while (i < str.length) {
        arr[i] = str[i];
        // console.log(arr[i])
        i++;
      }

      i = 0;
      while (i < arr.length) {
        arr[i] === '0' ? arr[i] = '1' : arr[i] = '0';
        // console.log(arr[i])
        i++;
      }

      let arr2 = arr.reverse();
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
      let decimalnumber = 0;
      let number9 = 0
      arr2 = arr2.reverse();
      // console.log(arr2)
      for (i = arr2.length - 1; i >= 0; i--) {
        decimalnumber = decimalnumber + arr[i] * Math.pow(2, arr2.length - i - 1);
        number9 = number9 + arr[i] * Math.pow(10, arr2.length - i - 1);
      }
      // console.log(decimalnumber)
      // console.log(number9)

      // ********setting decimal number***********
      setdecimal((item) => {
        return (decimalnumber * (-1))
      })
      // ********setting decimal number**********
      // *******************octal*********************

      let n1, octalnumber = 0, temport;
      let str3 = ""
      str3 = str3.concat(binary);
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
        octalnumber = temport * Math.pow(10, powerer) + octalnumber;
        powerer++;
      }


      if (str3.length >= 1) {

        str3 = str3.split('').reverse().join('');
        while (str3.length < 3) {

          str3 = str3.concat('0')
        }
        str3 = str3.split('').reverse().join('');
        n1 = 0;
        temport = 0;
        while (n1 < 3) {
          temport = temport + str3[str3.length - n1 - 1] * Math.pow(2, n1)
          n1++;
        }
        octalnumber = temport * Math.pow(10, powerer) + octalnumber;
      }

      setoctal((item) => {
        return octalnumber
      })

    }
    // *******************octal*********************
    // *******************hexa*********************
    let n1, hexanumber = "", temport;
    let str3 = ""
    str3 = str3.concat(binary);

    // console.log(str3)

    while (str3.length >= 4) {
      n1 = 0;
      // console.log(`str : `, str3)
      temport = 0;
      while (n1 < 4) {
        temport = temport + str3[str3.length - n1 - 1] * Math.pow(2, n1)
        n1++;
      }
      str3 = str3.slice(0, str3.length - 4)
      // console.log(`temport : `, temport)
      if (temport >= 10)
        hexanumber = hexanumber.concat(String.fromCharCode(65 + temport - 10));
      else
        hexanumber = hexanumber.concat(temport);
    }
    // console.log(`hexanumber: `, hexanumber)

    if (str3.length >= 1) {
      str3 = str3.split('').reverse().join('');
      while (str3.length < 4) {

        str3 = str3.concat('0')
      }
      str3 = str3.split('').reverse().join('');
      n1 = 0;
      temport = 0;
      while (n1 < 4) {
        temport = temport + str3[str3.length - n1 - 1] * Math.pow(2, n1)
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

    // ********check if it's negative or positve************


  }
  return (
    <div className='binary'>
      <div><Navbar /></div>
      <div className="mainbinary">
        <div className="contentbinary">
          <div className="input1">
            <form onSubmit={handlesubmit}>
              <label htmlFor="numbers" style={{ "fontSize": "1.7em", "margin": "10px 0px 0", "display": "inline" }}>Enter number of binary digits : </label>
              <input type="number" id="number" name='total' onChange={handletotal} value={total} style={{ "width": "100px", "height": "1em" }} />
              <br />
              {/* <label htmlFor="uhu">uvyadav</label> */}

              <label htmlFor="binaryinput" style={{ "display": "block", "fontSize": "2.4em", "margin": "40px 0 0" }} >Enter a binary number : </label>
              <input type="number" onChange={handlechange} id='binaryinput' name='binaryinput' value={binary} style={{ "margin": "10px 0 0" }} />
              <br />
              <button>Convert</button>
            </form>
          </div>
          <div className="show1">
            <div className="left">
              <label htmlFor="decimal">Decimal</label>
              <input type="string" disabled value={decimal} />
            </div>
            <div className="right">
              <label htmlFor="Octal">Octal</label>
              <input type="string" disabled value={octal} />
            </div>
            <div className="mid">
              <label htmlFor="Hexadecimal">Hexadecimal</label>
              <input type='string' disabled value={hexa} />
            </div>
          </div>
        </div>
        <div>

        </div>

      </div>
    </div >
  )
}
