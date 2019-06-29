


import React, { Component } from 'react'

class  Checkbox extends Component {



    constructor(props) {
        super(props)
        this.state = {
            resultlist:[],
             message :" "
          
    
        }
        
      }




handlechange=(event)=>
{
  this.setState({
   resultlist: this.state.resultlist.concat(event.target.value),
  //resultlist: this.state. resultlist.concat(" ")
  

  })
  
 console.log(event.target.value)
}



 displayradio=(props)=>
 {
var i;
var array=[]

for (i=0;i<this.props.cities.length;i++)
{
  
   var k =
   <div>
  
  <input type="checkbox" value={ this.props.cities[i]}   onChange={ this.handlechange}/> {this.props.cities[i]}
  </div>
   
   array.push( k)
   


  
  }
  return( array)
   
 }

 submit=()=>
 {
   this.setState({
     message :" you have visited these cities "  + " "+ this.state.resultlist
   }

   )
   
 }



  render() {
    return (
      <div>
        {this.displayradio()}
        <button onClick={this.submit}> submit</button>
        {this.state.message }
        
        
      </div>
    )
  }
}

export default Checkbox

