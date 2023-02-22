import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from './UiComponents/registrationPage/form';
// import Login from './UiComponents/loginPage/form';
import Test from './UiComponents/registrationPage/test';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
