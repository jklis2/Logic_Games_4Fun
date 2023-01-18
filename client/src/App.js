import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  //Temporary to test backend

  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setData(data.message))
  })

  return (
    <>
      <div>{!data ? 'Loading...' : data}</div>
    </>
  );
}

export default App;
