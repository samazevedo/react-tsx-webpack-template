import * as React from 'react';
import IMAGE from './images/react-icon.png'
import SVG from './images/react.svg'
import './css/style.css'
const App = () => {
    return (
        <>
            <h1>App is running now</h1>
            <img src={IMAGE} alt="react-logo" width="300px" />
            <img src={SVG} alt="react-logo" width="300px" />
        </>
    );
}

export default App;