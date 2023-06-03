import React,{useState} from 'react'

function Main() {

    const [inputValue, setInputValue] = useState('');


    function  display(value){
        setInputValue(inputValue + value)

    }

    function calculate() {
        var result = eval(inputValue)
        setInputValue(result)
    }

    function sin()
    {
        var signvalue =Math.sin(inputValue);
        setInputValue(signvalue )

    }

    function cos()
    {
        var cosvalue =Math.cos(inputValue);
        setInputValue(cosvalue )

    }
    function tan()
    {
        var tanvalue =Math.tan(inputValue);
        setInputValue(tanvalue )

    }
    function pow()
    {
        var powvalue =Math.pow( inputValue, 2);
        setInputValue(powvalue)
    }

    function log()
    {
        var logvalue =Math.log(inputValue);
        setInputValue(logvalue )

    }
    function sqrt()
    {
        var sqrtvalue =Math.sqrt( inputValue, 2);
        setInputValue(sqrtvalue)

    }
    
    
    function pi()
    {
        setInputValue(inputValue +3.14159265359);
    }


    function e()
    {
        setInputValue(inputValue +2.71828182846);
    }

    function fact()
    {
        var i, num, f;
        f=1
        num= inputValue;
        for(i=1; i<=num; i++)
        {
            f=f*i;
        }

        i=i-1;

        setInputValue(f)
    }
    function clear() {
        setInputValue('')
    }

    function  backspc() {
        setInputValue(inputValue.substr(0,inputValue.length-1))
    }
    return (
        <div className="row justify-content-center">
           <div className="col-md-5">
           <h2> calculator</h2>
           <table className="table">
           <tr>

              <td colSpan="3"> <input type="text" value={inputValue}/></td>
             <td>  <button onClick={()=>{clear()}}> c</button></td>
           </tr>
           <tr>
            <td> <button onClick={()=>{display('1')}}>1</button></td>
            <td>  <button onClick={()=>{display('2')}}>2</button></td>

           <td>  <button onClick={()=>{display('3')}}>3</button></td>
            <td> <button onClick={()=>{display('/')}}>/</button></td>


           </tr>
           <tr>
           <td>  <button onClick={()=>{display('4')}}>4</button></td>
           <td>  <button onClick={()=>{display('5')}}>5</button></td>

           <td>  <button onClick={()=>{display('6')}}>6</button></td>
           <td>  <button onClick={()=>{display('-')}}>-</button></td>


           </tr>
           <tr>
           <td>  <button onClick={()=>{display('7')}}>7</button></td>
            <td> <button onClick={()=>{display('8')}}>8</button></td>

           <td>   <button onClick={()=>{display('9')}}>9</button></td>
           <td>   <button onClick={()=>{display('+')}}>+</button></td>


           </tr>

           <tr>
            <td> <button onClick={()=>{display('.')}}>.</button></td>
            <td> <button onClick={()=>{display('0')}}>0</button></td>

            <td>   <button onClick={()=>{calculate()}}>=</button></td>
             <td>  <button onClick={()=>{display('*')}}>*</button></td>


           </tr>
           <tr>
            <td> <button onClick={()=>{pi()}}>pi</button></td>
            <td> <button onClick={()=>{ sin()}}>sin</button></td>

            <td>   <button onClick={()=>{cos()}}>cos</button></td>
             <td>  <button onClick={()=>{tan()}}>tan</button></td>


           </tr>
           <tr>
            <td> <button onClick={()=>{sqrt()}}>sqrt</button></td>
            <td> <button onClick={()=>{ log()}}>log</button></td>

            <td>   <button onClick={()=>{pow()}}>pow</button></td>
            <td> <button onClick={()=>{e()}}>e</button></td>



           </tr>
           <tr>
            <td> <button onClick={()=>{fact()}}>fact</button></td>
            <td> <button onClick={()=>{ backspc()}}>Backspc</button></td>
            <td><button onClick={()=>{display('(')}}>(</button></td>
            <td><button onClick={()=>{display(')')}}>)</button></td>


           </tr>
           </table>

           </div>

        </div>
    )
}

export default Main
