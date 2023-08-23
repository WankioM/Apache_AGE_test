import React, { useState } from 'react';
import './Login.css'; 
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      // User successfully logged in
    } catch (error) {
      // Handle login error
      console.error('Login error:', error);
    }
  };

  return (
    <div className="login-container">
      <header className="login-header">Welcome Back</header>
      <div className="login-form">
        <input
          type="text"
          placeholder="Username/Email"
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="remember-forgot">
          <label className="remember-label">
            <input type="checkbox" className="remember-checkbox" /> Remember me
          </label>
          <a href="#" className="forgot-link">
            Forgot Password?
          </a>
        </div>
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
        <div className="create-account">
          Don't have an account?{' '}
          <a href="#" className="create-link">
            Create an Account
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;


