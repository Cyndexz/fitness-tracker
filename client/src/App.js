import React from 'react';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space, Menu } from 'antd';

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
                            <Route exact path='/' element={<Home />} />
                            <Route exact path='/Auth' element={<Auth />} />
                        </Routes>
                    </div>
                </Layout>
            </div>
            <h1>Hello Gamers!!!!</h1>
        </div>
    );
}

export default App;