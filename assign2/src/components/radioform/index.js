


import React, { Component } from 'react'

class  Radioform extends Component {

  constructor(props) {
    super(props)
    this.state = {
      select:" ",
      message :" "
    }
    
  }

handlechange=(event)=>
{
  this.setState({
    select: event.target.value


  })
  console.log(this.state.select)

}


 displayradio=(props)=>
 {
var i;
var array=[]

for (i=0;i<this.props.desserts.length;i++)
{
  
   var k =
   <div>
  
  <input type="radio" value={ this.props.desserts[i]}  name=" desserts" onChange={ this.handlechange}/> {this.props.desserts[i]}
  </div>
   
   array.push( k)
   


  
  }
  return( array)
   
 }
 submit=()=>
 {
   this.setState({
     message :" your favorite dessert is"  +" " + this.state.select.toUpperCase()
   }

   )
   
 }



  render() {
    return (
      <div>
        {this.displayradio()}
        <button onClick={this.submit}> submit</button>
        <h1>{this.state.message }</h1>
        
        
      </div>
    )
  }
}

export default Radioform

