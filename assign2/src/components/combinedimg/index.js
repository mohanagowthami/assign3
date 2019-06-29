import React, { Component } from 'react'
import Rectangle from '../rectangularimg'
import Roundcornerimg from '../roundcornerimg'
import Circularimg from '../circularimg'

class Combinedimg extends Component
{
    render()
    {
        return(
            <div>
            <Rectangle/>
            <Roundcornerimg/>
            <Circularimg/>
            </div>

        )

    }
}
export default Combinedimg