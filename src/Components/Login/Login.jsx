import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-page">
      {/* Left section with background image */}
      <div className="login-page__left">
        <div className="login-page__overlay">
          <h1>Travelista Tours</h1>
          <p>
            Travel is the only purchase that enriches you in ways beyond material wealth.
          </p>
        </div>
      </div>
      
      {/* Right section with login form */}
      <div className="login-page__right">
        <div className="login-form">
          <h2>Welcome</h2>
          <p>Login with Email</p>
          <form>
            <div className="input-group">
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-group">
              <input type="password" placeholder="Password" />
            </div>
            <button type="submit" className="login-button">LOGIN</button>
          </form>
          <p className="forgot-password">Forgot your password?</p>
          <div className="social-login">
            <button className="social-button google">Google</button>
            <button className="social-button facebook">Facebook</button>
            <button className="social-button apple">Apple</button>
          </div>
          <p className="register-now">Don’t have an account? <a href="/register">Register Now</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
