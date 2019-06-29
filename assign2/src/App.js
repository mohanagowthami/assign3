import React from 'react'
import Compo2 from './components/compo2'
import Compo3 from './components/rectangularimg'
import Roundcornerimg from './components/roundcornerimg'
import Circularimg from './components/circularimg'
import Combinedimg from './components/combinedimg'
import Diffimg from './components/Diffimg'
import Greetingtext from './components/greetingtext'
//import Selectyourstate from './components/selectyourstate'
import Radioform from './components/radioform'
import Checkbox from './components/checkbox'
import Selectyourstate from './components/selectyourstate'
import Disable from './components/disable'
import Stopwatch from './components/stopwatch'
import Comment from './components/comments'
function App() {
  return (
    <div>
      <div>
          <Compo2 />
      </div>
      <div>
        <h1> rectangular</h1>
         <Compo3/>
      </div>
      <div>
        <h1> roundimg</h1>
        <Roundcornerimg/>
      </div>
      <div>
        <h1> circular image</h1>
        <Circularimg/>
      </div>
      <div>
        <h1> all images within single component</h1>
        <Combinedimg/>
      </div>
        <div>
          <Diffimg/>
        </div>
        <div>
          <Greetingtext/>
        </div>
        
        <div>
          <Radioform desserts= { ["vanilla","butterscotch","strawberry"]} />
        </div>
        <div>
          <Checkbox cities={ ["hydertabad","banglore","delhi","chennai","kasi"]}/>
        </div>
        <div>
          <Selectyourstate yourstate={["andhra paradesh","kerala","madhya pradesh"]}/>
        </div>
        <div>
          <Disable/>
        </div>
        <div>
          <Stopwatch/>
        </div>
        <div>
          <Comment/>
        </div>
        
      
    </div>
  )
}

export default App










