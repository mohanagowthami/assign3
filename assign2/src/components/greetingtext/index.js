import React, { Component } from 'react'
import './styles.css'
class Greetingtext extends Component

{
   displayMsg=()=>
   {
    document.getElementById("demo").innerHTML = "username should be in A-Za-z ";
   }
    handleClick=()=>
    {
        var x = document.getElementById("t1").value;
        document.getElementById("demo").innerHTML = "hello " + x + " Have a nice Day ";
    }





render() {
    return (
      <div className="container">
        
        <input type="text"  id='t1' size="10" onFocus={this.displayMsg} />
        <button onClick={this.handleClick}>Greet!</button>
        <p id ="demo"></p>
        </div>
       
    )
  }
}
export default Greetingtext