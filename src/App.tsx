import * as React from 'react'
import IMAGE from './images/react-icon.png'
import SVG from './images/react.svg'
import './css/style.css'

const App = () => (

    <div>
        <h1>Hello world</h1>
        <img src={IMAGE} alt="react" />
        <p>Never give up on your dreams!</p>
        <p>the key is consistency</p>
        <img src={SVG} alt="react logo" />
    </div>
)
export default App
