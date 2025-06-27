import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import Login from './Components/login';
import Signup from './Components/signup';
// import landingPage from './Components/landingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path='/landing' element={<landingPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
