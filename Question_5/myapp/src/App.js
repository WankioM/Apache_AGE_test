import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components from react-router-dom
import Home from './components/Home/Home';
import Signup from './components/Auth/Signup'; // Import the Signin component
import Login from './components/Auth/Login'; // Import the Login component
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<Signup />} /> {/* Route for Signup component */}
          <Route path="/login" element={<Login />} /> {/* Route for Login component */}
          <Route path="/home" element={<Home />} exact/> {/* Route for Home component */}
          <Route path="*" element={<ErrorPage />} /> {/* Fallback for unknown routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
