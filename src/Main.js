import React from 'react';
import { Routes, Route } from 'react-router-dom';

import App from './App';
import Sandbox from './pages/Sandbox';

const Main = () => {
  return (
    <Routes>
      <Route path='/' element={<App />}></Route>
      {/* <Route path='/test' element={<Sandbox />}></Route> */}
    </Routes>
    
  );
}

export default Main;