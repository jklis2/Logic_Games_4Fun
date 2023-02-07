import './App.css';
import './Component/CSS/Global.css'
import React, { useEffect, useState, Navigate } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from './Routers/Home'
import { Dashboard } from './Routers/Dashboard';
import { LoginAndRegister } from './Routers/LoginAndRegister';
import { Contact } from './Routers/Contact'
import { AboutUs } from './Routers/AboutUs'
import { MyProfile } from './Routers/Profile'
import { PrivacyPolicy } from './Routers/PrivacyPolicy';


function App() {

  //Temporary to test backend

  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setData(data.message))
  })

  return (
    // <>
    //   <div>{!data ? 'Loading...' : data}</div>
    // </>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navigate replace to="/home" />}/> */}
        <Route path='/home' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/login' element={<LoginAndRegister/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/profile' element={<MyProfile/>}/>
        <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
