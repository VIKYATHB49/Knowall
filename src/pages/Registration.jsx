// Registration.jsx

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../assets/css/Registration.css';
import registerImage from '../assets/images/Sign up.png';
import Notification from '../components/Notification';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Registration = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    batch: '',
    organisation: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState({ message: '', type: '' });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();

  // Organisation list (sorted alphabetically)
  const organisations = [
    "Alliance University", "Amity University", "Anurag Group of institutions",
    "Anurag University", "Ashoka University", "Aurora's Engineering College",
    "BITS Pilani", "BVRIT Hyderabad College of Engineering for Women", "CBIT Hyderabad",
    "Chaitanya Bharathi Institute of Technology (CBIT)", "Chandigarh University",
    "Christ University", "CMR College of Engineering", "CMR Institute of Technology (CMRIT)",
    "Dayananda Sagar University", "Gokaraju Rangaraju Institute of Engineering & Technology (GRIET)",
    "ICFAI Foundation for Higher Education (IFHE)", "Institute of Aeronautical Engineering (IARE)",
    "Jain University", "JNTU", "Keshav Memorial Institute of Technology (KMIT)",
    "KLE Technological University", "Lovely Professional University (LPU)",
    "Mahindra University", "Mallareddy College of Engineering", "Mallareddy University",
    "Manipal Academy of Higher Education", "MLR Institute of Technology", "MVSR Engineering College",
    "Nalla Malla Reddy Engineering College", "Osmania University", "Presidency University",
    "REVA University", "Shiv Nadar University", "Sreenidhi institute of Science",
    "SRM Institute of Science and Technology", "Stanley College of Engineering and Technology for Women",
    "Symbiosis International University", "Vardhaman College of Engineering",
    "Vasavi College of Engineering", "VIT Vellore",
    "VNR Vignana Jyothi Institute of Engineering & Technology (VNR VJIET)", "Others"
  ].sort();

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validation function
  const validateForm = () => {
    if (formData.username.trim().length < 4) {
      setNotification({ message: 'Username must be at least 4 characters long.', type: 'error' });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setNotification({ message: 'Please enter a valid email address.', type: 'error' });
      return false;
    }

    // Password validation: >=4 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/;
    if (!passwordRegex.test(formData.password)) {
      setNotification({ 
        message: 'Password needs A-Z, a-z, 0-9, special, 4+ chars.', 
        type: 'error' 
      });
      return false;
    }

    return true;
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setNotification({ message: '', type: '' });

    // Run validation before API call
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setNotification({ message: 'Registration successful!', type: 'success' });
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        const errorData = await response.json();
        setNotification({ message: `Registration failed: ${errorData.message || 'Try again'}`, type: 'error' });
      }
    } catch (error) {
      console.error('Error:', error);
      setNotification({ message: 'Something went wrong. Please try again later.', type: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="registration-page">
      {/* Loader Overlay */}
      {isLoading && (
        <div className="loader-overlay">
          <div className="loader"></div>
        </div>
      )}

      {/* Notification */}
      <Notification
        message={notification.message}
        type={notification.type}
        onClose={() => setNotification({ message: '', type: '' })}
      />

      {/* Side Image */}
      <div className="fixed-image">
        <img src={registerImage} alt="Register" className="register-image" />
      </div>

      {/* Form */}
      <div className="registration-form-wrapper">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input 
            type="text" 
            id="username" 
            name="username" 
            value={formData.username}
            onChange={handleChange}
            autoComplete="username"
            required 
          />

          <label htmlFor="email">Email:</label>
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
              autoComplete="new-password"
              required 
            />
            <span 
              className="password-toggle-icon"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              {isPasswordVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>

          <label htmlFor="batch">Passout Batch:</label>
          <select 
            id="batch" 
            name="batch" 
            value={formData.batch}
            onChange={handleChange}
            autoComplete="off"
            required
          >
            <option value="" disabled>Select your batch</option>
            <option value="2029">2029</option>
            <option value="2028">2028</option>
            <option value="2027">2027</option>
            <option value="2026">2026</option>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="<2020">&lt; 2020</option>
          </select>

          <label htmlFor="organisation">Organisation:</label>
          <select 
            id="organisation" 
            name="organisation"
            value={formData.organisation}
            onChange={handleChange}
            autoComplete="organization"
            required
          >
            <option value="" disabled>Select your organisation</option>
            {organisations.map((org, idx) => (
              <option key={idx} value={org}>{org}</option>
            ))}
          </select>
          
          <button type="submit" className="button" disabled={isLoading}>
            Register
          </button>
          
          {/* Login link */}
          <p className="login-link">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;
