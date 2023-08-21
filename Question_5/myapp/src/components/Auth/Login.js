import React from 'react';
import './Login.css'; // Import your custom CSS file

function Login() {
  return (
    <div className="login-container">
      <header className="login-header">Welcome Back</header>
      <div className="login-form">
        <input type="text" placeholder="Username/Email" className="login-input" />
        <input type="password" placeholder="Password" className="login-input" />
        <div className="remember-forgot">
          <label className="remember-label">
            <input type="checkbox" className="remember-checkbox" /> Remember me
          </label>
          <a href="#" className="forgot-link">Forgot Password?</a>
        </div>
        <button className="login-button">Login</button>
        <div className="create-account">
          Don't have an account? <a href="#" className="create-link">Create an Account</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
