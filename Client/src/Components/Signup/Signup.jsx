import React, { useState, useRef, useEffect } from 'react';
import './Signup.css';
import GoogleButton from 'react-google-button';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Signup = () => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const formRef = useRef(null);
    const [showPassword, setShowPassword] = useState(false);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
      });
    
      useEffect(() => {
        if (username) {
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
      }, [username, navigate]);

    const validateForm = () => {
        let isValid = true;
        let newErrors = {};

        if (!username.trim()) {
            newErrors.username = "*UserName is required";
            isValid = false;
        }

        if (!email.trim()) {
            newErrors.email = "*Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "*Email is invalid";
            isValid = false;
        }

        if (!password) {
            newErrors.password = "*Password is required";
            isValid = false;
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters long";
            isValid = false;
        }

        if (!termsAccepted) {
            newErrors.terms = "You must accept the terms and conditions";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (validateForm()) { // Assuming validateForm() is a function that validates the form
            try {
                setIsLoading(true);
    
                const response = await axios.post('http://localhost:3004/', {
                    username,
                    email,
                    password
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
    
                // If signup is successful, navigate to sign-in page and reset form
                if (response.data) {
                    navigate('/signin');
                    formRef.current.reset();
                    setUserName('');
                    setEmail('');
                    setPassword('');
                    setTermsAccepted(false);
                }
    
            } catch (error) {
                console.error('Signup error:', error.response); // Log the entire response for debugging
    
                // Check if the error is a 409 status, indicating a conflict (e.g., email already exists)
                if (error.response && error.response.status === 409) {
                    const { field, message } = error.response.data;
    
                    // Check if the conflict is due to the email or username field, then set the error
                    setErrors(prev => ({
                        ...prev,
                        [field]: message  // This will set either errors.email or errors.username
                    }));
                } else {
                    // For other errors, display a general error message
                    setErrors(prev => ({
                        ...prev,
                        submit: 'Error signing up. Please try again.'
                    }));
                }
            } finally {
                setIsLoading(false);
            }
        }
    };
    
    

    return (
        <section className="section">
            <div className="container1">
                <div className="contact-container">
                    <div className="contact-left">
                        <h1>Create Account</h1>
                        <div id="btn1" onClick={() => login()}>
                            <GoogleButton style={{ background: "white", color: "grey", width: 400 }} />
                        </div>
                        <span className="span">or use your Email for Registration</span>
                        {errors.submit && (
                            <div className="error-message submit-error">
                                {errors.submit}
                            </div>
                        )}
                        
                        <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
                            <div className="input-wrapper">
                                <input 
                                    type="text" 
                                    name="username" 
                                    placeholder='User Name' 
                                    value={username}
                                    onChange={(e) => setUserName(e.target.value)}
                                    className={errors.username ? 'error' : ''}
                                    disabled={isLoading}
                                />
                                {errors.username && (
                                    <div className="error-message">{errors.username}</div>
                                )}
                            </div>

                            <div className="input-wrapper">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={errors.email ? 'error' : ''}
                                    disabled={isLoading}
                                />
                                {errors.email && (
                                    <div className="error-message">{errors.email}</div>
                                )}
                            </div>

                            <div className="input-wrapper">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={errors.password ? 'error' : ''}
                                    disabled={isLoading}
                                />
                                {errors.password && (
                                    <div className="error-message">{errors.password}</div>
                                )}
                                <button
                                    type="button"
                                    className="toggle-password"
                                    onClick={() => setShowPassword(!showPassword)}
                                    >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>

                            <div className="terms-container">
                                <label className="terms-label">
                                    <input 
                                        type="checkbox"
                                        name="acceptTerms"
                                        checked={termsAccepted}
                                        onChange={(e) => setTermsAccepted(e.target.checked)}
                                        disabled={isLoading}
                                    />
                                    <span>Accept the <a href="#">Terms and Conditions</a></span>
                                </label>
                                {errors.terms && (
                                    <div className="terms-error">{errors.terms}</div>
                                )}
                            </div>

                            <button 
                                type="submit" 
                                className="signin-button"
                                disabled={isLoading}
                            >
                                {isLoading ? 'SIGNING UP...' : 'SIGN UP'}
                            </button>

                            <p className="signin-link">
                                Already have an account? <a href="/signin">Sign in</a>
                            </p>
                        </form>
                    </div>
                    <div className="contact-right">
                        {/* Any other content */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Signup;
