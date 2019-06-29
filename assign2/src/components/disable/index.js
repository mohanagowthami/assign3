import React, { Component } from 'react'
class Disable extends Component{
    


    constructor(props) 
       { super(props)
        this.state = {
          variable:false
        }
        
      }
      handlechange=()=>
      {
        this.setState({
           variable:true
          }
       
          )
          
      }
      display=()=>
      {
          alert(" this is working")
      }




    render()
    {
        return(
            <div>
             < input type="checkbox" onChange={this.handlechange}/>disable
             
             <button disabled={ this.state.variable} onClick={ this.display}>click me </button>
             
            </div>
        )
    }
}
export default Disable