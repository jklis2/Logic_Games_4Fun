import './App.css';
import React, { useEffect, useState } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Home } from './Routers/Home';
import { Dashboard } from './Routers/Dashboard';
import { LoginAndRegister } from './Routers/LoginAndRegister';


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
        <Route path='/home' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/login' element={<LoginAndRegister/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
