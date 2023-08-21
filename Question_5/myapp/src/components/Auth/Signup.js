// src/components/Auth/Signup.js
import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div class="signup-container">
  <header class="signup-header">Create an Account</header>
  <div class="signup-form">
    <input type="text" placeholder="Full Name" class="signup-input" />
    <input type="email" placeholder="Email" class="signup-input" />
    <input type="password" placeholder="Password" class="signup-input" />
    <input type="password" placeholder="Confirm Password" class="signup-input" />
    <button class="signup-button">Sign Up</button>
    <div class="login-link">
    Already have an account? <Link to="/login" className="login-link">Log In</Link>
    </div>
  </div>
</div>

  );
}

export default Signup;
