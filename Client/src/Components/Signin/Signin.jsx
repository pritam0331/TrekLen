import React, { useState, useEffect } from 'react';
import GoogleButton from 'react-google-button';
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import './Signin.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Signin({ onSigninSuccess }) {
  const handleSignin = () => {
    // Simulate signup logic
    console.log("Signup successful");
    onSigninSuccess(); // Notify parent component
  };

  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  });

  useEffect(() => {
    if (user) {
      axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
        headers: {
          Authorization: `Bearer ${user.access_token}`,
          Accept: 'application/json'
        }
      })
        .then((res) => {
          const profileData = {
            googleId: res.data.id,
            email: res.data.email,
            name: res.data.name,
            profilePic: res.data.picture
          };
          setProfile(profileData);
          // Send profile data to backend
          axios.post('http://localhost:3004/api/google-login', profileData)
            .then(() => {
              localStorage.setItem('user', JSON.stringify(profileData));
              navigate('/');
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    }
  }, [user, navigate]);

  const validateForm = () => {
    let isValid = true;
    let errors = {};

    if (!email.trim()) {
      errors.email = "*Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "*Email is invalid";
      isValid = false;
    }

    if (!password) {
      errors.password = "*Password is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      axios.post('http://localhost:3004/login', { email, password })
        .then((res) => {
          console.log(res);
          if (res.data === 'success') {
            localStorage.setItem('user', JSON.stringify({ email }));
            navigate('/');
          } else {
            setErrors({ general: 'Invalid email or password' });
          }
        })
        .catch((err) => {
          console.log(err);
          setErrors({ general: 'An error occurred. Please try again.' });
        });
    }
  };

  // useEffect(() => {
  //   AOS.init({
  //     duration: 600,
  //     easing: 'ease-in-sine',
  //     offset: 200,
  //   });
  // }, []);

  return (
    <section className="section">
      <div className="container1">
        <div className="contact-container">
          <div className="contact-right1">
            {/* Any other content */}
          </div>
          <div className="contact-left1">
            <h1>Sign In</h1>
            <div id="btn1" onClick={() => login()}>
              <GoogleButton style={{ background: "white", color: "grey", width: 400 }} />
            </div>
            <span className="span">or use your account</span>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="input-wrapper">
                <input
                  type="email"
                  className={`input-field ${errors.email ? 'error' : ''}`}
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <div className="error-message1">{errors.email}</div>}
              </div>
              <div className="input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  className={`input-field ${errors.password ? 'error' : ''}`}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
                {errors.password && <div className="error-message1">{errors.password}</div>}
              </div>
              <button type="submit" className="signin-button" onClick={handleSignin}>SIGN IN</button>
              {errors.general && <div className="error-message1">{errors.general}</div>}
              <div className="signin-link">
                Don't have an account? <a href="/signup">Sign up</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signin;
