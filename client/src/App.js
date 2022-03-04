import React from 'react';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'
import Profile from './components/Profile/Profile'
import Workouts from './components/Workouts/Workouts';
import Meals from './components/Meals/Meals';
import { Routes, Route} from 'react-router-dom';
import { Layout } from 'antd';

function App() {
    return(
        <div className="app">
            <div className='navbar'>
                <Navbar />
            </div>
            <div className='main'>
                <Layout>
                    <div>
                        <Routes>
                            <Route exact path='/Auth' element={<Auth />} />
                            <Route exact path='/' element={<Home />} />
                            <Route exact path='/profile:id' element={<Profile />} />
                            <Route exact path='/workouts' element={<Workouts />} />
                            <Route exact path='/meals' element={<Meals/>} />
                        </Routes>
                    </div>
                </Layout>
            </div>
        </div>
    );
}

export default App;