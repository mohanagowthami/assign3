
import React, { Component } from 'react'
class Dummy extends Component{
  
    constructor(props) {
        super(props)
        this.state = {
          timeron:false,
          timemin:0,
          timesec:0
        }
        
      }
      incre=()=>
      { this.setState({
        if(this.state.timesec===60)
        {
            timemin: this.state.timemin+1,
            timesec: 0

        }
        else
        {
            timesec: this.state.timesec+1
        }
    
      })

      }

resetTimer = () => {
    this.setState({
      timemin: 0,
      timesec: 0
    })

  }













      startTimer=()=>
      {
        setInterval(incre,1000)}

        
        
        
        stopTimer = () => {
            this.setState({ timerOn: false })
            clearInterval(this.timer)
          }


        
          
      
    



















    render()
    {
        return(
        <div>

                 <button onClick={this.startTimer}>Start</button>

                  <button onClick={this.stopTimer}>Stop</button>


                   <button onClick={this.resetTimer}>Reset</button>
                  <button onClick={ this.lapfun}    disabled={!this.state.timeron}> lap</button>  






        </div>





        )
    }
}