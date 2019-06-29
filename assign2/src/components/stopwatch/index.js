import React, { Component } from 'react'
//import './styles.css'

class  Stopwatch extends Component {

  constructor(props) {
    super(props)
    this.state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 0,
        array:[],
        finalres:0,
        laparray:[]
    }
    
  }
  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime

    })
    console.log(this.state.timerTime)
    console.log(this.state.timerStart)
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart
      })
    }, 10)
  }





  stopTimer = () => {
    this.setState({ timerOn: false })
    clearInterval(this.timer)
  }

  resetTimer = () => {
    this.setState({
      timerStart: 0,
      timerTime: 0
    })

  }
  lapfun=()=>
  { 
    this.setState(
      {
        array:this.state.array.concat( this.state.timerTime)
      }
    )
      
        if(this.state.array.length===0)
    {
      var lapt=this.state.timerTime
      let finallapt=("0" + (Math.floor(lapt/ 1000) % 60)).slice(-2);
      this.setState({
      laparray: this.state.laparray.concat(finallapt)})
                                        
    }
    else 
    {
      var len=this.state.array.length
      var res=this.state.array[len-1]
      var lapt =this.state.timerTime-res
      let finallapt=("0" + (Math.floor(lapt/ 1000) % 60)).slice(-2);
      this.setState({
      laparray: this.state.laparray.concat(finallapt)})
      
    }
  }
    


/*
   // console .log(lapt)
    let finallapt=("0" + (Math.floor(lapt/ 1000) % 60)).slice(-2);
    console.log(finallapt)
      this.setState(
        {
          finalres: finallapt
        }
      )
      console .log(" this is lap value")
       console.log( this.state.finalres)
      }


     finalres=()=>
     {

    var p=<div><p> {this.state.finalres} </p> 
             <p> this is lap result</p>
      </div>
    return p
    
  
  }
  */
finalres=()=>
{
  return (this.state.laparray)
}
  
 
  










  render()
  { const { timerTime } = this.state;
     //console.log(" in render timertime")
      //console.log(timerTime)
      //console.log(" this sate" )
     // console.log(this.state)

      let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
      let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);

      return (
          <div  className="styles">
                < div className="circlestyles"></div>
             
                <button onClick={this.startTimer}>Start</button>

                   <button onClick={this.stopTimer}>Stop</button>

                  
                  <button onClick={this.resetTimer}>Reset</button>
                 <button onClick={ this.lapfun}    disabled={!this.state.timerOn}> lap</button>  
                   
                  <div>  {minutes} : {seconds} </div>
                  <div> 
                   {this.finalres()}
                   </div>
                   
                   
                   

</div>
           )
  }
}
export default Stopwatch

          
      
