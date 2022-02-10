import React from 'react';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'
import Workouts from './components/Workouts/Workouts';

function App() {
    return(
        <div>
            <Navbar/>
            <Workouts/>
            {/* <Home/>
            <Auth/> */}
        </div>
    );
}

export default App;