import React from 'react';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'
function App() {
    return(
        <div>
            <Navbar/>
            <Home/>
            <Auth/>
            <h1>Hello Gamers!!!!</h1>
        </div>
    );
}

export default App;