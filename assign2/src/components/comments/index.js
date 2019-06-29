import React, { Component } from 'react'
//import Commentlist from './commentlist.js'

class  Comment extends Component {


    constructor(props) {
        super(props)
        this.state = {
          array:[], 
          message :" "
          
        }
        
      }

handlechange=(event)=>
{
    this.setState({
        message: event.target.value,
        
    })
    //document.getElementById("input").value=" "

    
    
}
submit=(event)=>
{
  
    

    this.setState(
        {
            array:this.state.array.concat(this.state.message),
            message: ""
        }
    )
    
}

commentdisplay=()=>
{
  console.log(this.state.array)
var i;
var array2 =[]
for (i=this.state.array.length;i>=0;i--)
{
    var k =
    <div className=" commentstyles">
        <p> {this.state.array[i]}</p>
     </div>
   array2.push(k)

}
return (array2)
   
}

    



render()
{
    return(
    <div>
     <input name="input" type=" text" placeholder=" enter the comment " value={ this.state.message}  onChange={ this.handlechange}/>
     <button onClick={this.submit} > comment</button>
      {this.commentdisplay()}
     
        
     



    </div>



    )
}


}

export default Comment
