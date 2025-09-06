import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import loginPhoto from '../assets/images/Login.png';
import '../assets/css/Login.css';
import Notification from '../components/Notification';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState({ message: '', type: '' });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.message) {
      setNotification({ message: location.state.message, type: 'success' });
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setNotification({ message: '', type: '' });
    
    setIsLoading(true);

    try {
     const response = await fetch(`${import.meta.env.VITE_API_URL}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('jwtToken', data.token);
        setNotification({ message: 'Login Successful! Redirecting...', type: 'success' });

        setTimeout(() => {
          if (location.state?.from) {
            navigate(location.state.from.pathname, { state: location.state.testData || {} });
          } else {
            navigate('/home');
          }
        }, 1500);
      } else {
        // +++ FIX: Read the error response as JSON +++
        const errorData = await response.json(); 
        // +++ FIX: Access the specific message from the JSON object +++
        setNotification({ message: errorData.message || 'Invalid credentials.', type: 'error' });
      }
    } catch (error) {
      console.error('Login Error:', error);
      setNotification({ message: 'Something went wrong. Please try again.', type: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      {isLoading && (
        <div className="loader-overlay">
          <div className="loader"></div>
        </div>
      )}

      <Notification
        message={notification.message}
        type={notification.type}
        onClose={() => setNotification({ message: '', type: '' })}
      />
      <div className="fixed-image">
        <img src={loginPhoto} alt="Login visual" />
      </div>
      <div className="login-form-wrapper">
        <div className="login-box">
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />

            <label htmlFor="password">Password:</label>
            <div className="password-wrapper">
              <input 
                type={isPasswordVisible ? "text" : "password"}
                id="password" 
                name="password" 
                value={formData.password}
                onChange={handleChange}
                autoComplete="current-password"
                required 
              />
              <span 
                className="password-toggle-icon"
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                {isPasswordVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </div>

            <div className="remember-forgot">
              <label className="remember-label">
                <input type="checkbox" name="remember" />
                <span>Remember me</span>
              </label>
              <Link to="/forgot-password" className="forgot-link">Forgot password?</Link>
            </div>

            <button type="submit" className="signin-btn" disabled={isLoading}>
              Sign In
            </button>

            <div className="or-divider">OR</div>

            <button type="button" className="code-btn">Use a sign-in code</button>

            <p className="signup-text">
              New to Knowall? <Link to="/register">Sign up now.</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
