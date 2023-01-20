import './App.css';
import React, { useEffect, useState } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Home } from './Routers/Home';
import { Dashboard } from './Routers/Dashboard';
import { Login } from './Routers/Login';
import { Register } from './Routers/Register';


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
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
