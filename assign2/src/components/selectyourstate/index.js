


import React, { Component } from 'react'

class  Selectyourstate extends Component {

  constructor(props) {
    super(props)
    this.state = {
      yourstate:" ",
      message :" "
    }
    
  }

handlechange=(event)=>
{
  this.setState({
    yourstate: event.target.value


  })
  console.log(this.state.yourstate)

}
option=(props)=>
{
  var i
  var array =[]
  for(i=0;i<this.props.yourstate.length;i++)
  {var k =
    <option value={this.props.yourstate[i]} >{this.props.yourstate[i]}</option>
    

array.push( k)

  }
  console.log(array)
  return (array)
  

}


 displaydropdown=()=>
 {
 const m= <div>  <select onChange={ this.handlechange}>{this.option()}</select></div>
     
   return m;


  
  }
  
  

   
 
 submit=()=>
 {
   this.setState({
     message :" your state  is"  +" " + this.state.yourstate
   }

   )
   
 }



  render() 
  {
    return (
      <div>
        {this.displaydropdown()}
        <button onClick={this.submit}> submit</button>
        <h1>{this.state.message }</h1>
        
        
      </div>
    )
  }
}
export default Selectyourstate



