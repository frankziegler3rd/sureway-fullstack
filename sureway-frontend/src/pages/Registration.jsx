/*
* Shyaam Darji, Frank Ziegler
*
* This file is the registration page the user will be guided to when they click sign up, they will be prompted to enter 
* their desired username and password which must be saved in the database when connected
*
* The form contains input fields for username, password, and confirm password.
* Each input field is associated with the corresponding property in the formData state.
* The handleInputChange function updates the state when input fields change.
* The handleSubmit function prevents the default form submission behavior and can be 
* used to send the form data to an API endpoint for registration.
*/


import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import jsCookie from 'js-cookie';

const Registration = () => {
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Keep track of whether or not passwords match
  // Keep track of whether or not username is available
  // Keep track of whether or not email is available
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [error, setError] = useState(null);
  const [isUsernameAvailable, setIsUsernameAvailable] = useState(true);
  const [isEmailAvailable, setIsEmailAvailable] = useState(true);
  const navigate = useNavigate();
  const [isRegisterDisabled, setIsRegisterDisabled] = useState(true); // Disable Register button

  // Event handler for input field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (name === 'username') {
      checkUsernameAvailability(value);
    }
    if (name === 'email') {
      checkEmailAvailability(value);
    }
  };

  /*
    Make a request to API using Axios to see if username exists.
  */
  const checkUsernameAvailability = async (username) => {
    try {
      const response = await axios.get(`http://localhost:8080/check-username?username=${username}`);
      setIsUsernameAvailable(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  /*
    Make a request to API using Axios to see if email exists.
  */
    const checkEmailAvailability = async (email) => {
      try {
        const response = await axios.get(`http://localhost:8080/check-email?email=${email}`);
        setIsEmailAvailable(response.data);
      } catch (error) {
        console.error(error);
      }
    };

  // Event handler for password field being touched
  const handlePasswordTouched = () => {
    setPasswordTouched(true);
  };

  useEffect(() => {
    // Check if passwords match whenever 'password' or 'confirmPassword' change.
    setPasswordsMatch(formData.password === formData.confirmPassword);
  }, [formData.password, formData.confirmPassword]);

// Second useEffect for isRegisterDisabled
useEffect(() => {
  const isDisabled =
    formData.username === '' ||
    formData.email === '' ||
    formData.password === '' ||
    formData.confirmPassword === '' ||
    !isPasswordValid(formData.password) ||
    !passwordsMatch ||
    !isUsernameAvailable ||
    !isEmailAvailable;
  setIsRegisterDisabled(isDisabled);
}, [formData.username, formData.email, formData.password, formData.confirmPassword, isUsernameAvailable, isEmailAvailable, passwordsMatch]);


  // Event handler for form submission THIS IS THE AXIOS SHIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password } = formData; // local variable password
    if (!isPasswordValid(password)) {
      setError("Password must be at least 8 characters long.");
      return;
    }
    if(!passwordsMatch) {
      setError("Passwords don't match");
      return;
    }
    try {
      const response = await axios.post("http://localhost:8080/register", formData);
      if (response.status === 200) {
        // Registration was successful, so proceed to auto-login
        const loginResponse = await axios.post("http://localhost:8080/login", {
          username: formData.username,
          password: formData.password,
        });
  
        if (loginResponse.status === 200) {
          // Auto-login was successful, store the token and handle successful login
          const receivedToken = loginResponse.data.authToken;
          jsCookie.set('authToken', receivedToken, { expires: 1 });
          navigate('/dashboard');
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const isPasswordValid = (password) => {
    return password.length >= 8;
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '1200px',
    justifyContent: 'center', // Vertically center the content
    height: '100vh', // Use the full height of the viewport
    backgroundColor: '#f5f5f5', // Light gray background color
  };

  // Styles for input fields and submit button
  const inputStyle = {
    margin: '10px 0',
    padding: '10px',
    width: '250px',
    fontSize: '18px', // Increased font size
    fontWeight: 'bold', // Bold text
    border: '1px solid #ccc', // Add a border
    backgroundColor: '#fff', // White background
  };

  const labelStyle = {
    color: '#000000', // White color for labels
    fontSize: '16px', // Larger font size for labels
    marginBottom: '5px', // Added margin at the bottom
  };

  const registerTitleStyle = {
    color: '#000', // Black color for the "Register" text
    fontSize: '30px', // Larger font size for the "Register" text
    fontWeight: '700', // Bold text
    marginBottom: '20px', // Added margin at the bottom
  };

  const buttonStyle = {
    backgroundColor: '#6a037d', // Darker purple color for the button background
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    fontSize: '18px',
    cursor: 'pointer',
  };

  const disabledButtonStyle = {
    cursor: 'not-allowed',
    backgroundColor: '#ccc',
    color: '#888',
  };

  const errorMessageStyle = {
    color: 'red',
    fontSize: '14px',
    marginBottom: '10px',
  };

  return (
    <div style={containerStyle}>
      <div style={inputStyle}>
     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '300px', margin: 'auto' }}>
      <div style={registerTitleStyle}>Create an account</div>
      <div style={{ marginBottom: '10px', width: '100%' }}>
        <label htmlFor='username' style={labelStyle}>Username</label>
        <input
          type='text'
          id='username'
          name='username'
          style={inputStyle}
          value={formData.username}
          onChange={handleInputChange}
        />
      </div>
      <div style={{ marginBottom: '10px', width: '100%' }}>
        <label htmlFor='email' style={labelStyle}>Email</label>
        <input
          type='email' // Use type 'email' for e-mail input
          id='email'
          name='email'
          style={inputStyle}
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div style={{ marginBottom: '10px', width: '100%' }}>
        <label htmlFor='password' style={labelStyle}>Password</label>
        <input
          type='password'
          id='password'
          name='password'
          style={inputStyle}
          value={formData.password}
          onChange={handleInputChange}
          onBlur={handlePasswordTouched}
        />
      </div>
      <div style={{ marginBottom: '20px', width: '100%' }}>
        <label htmlFor='confirmPassword' style={labelStyle}>Confirm Password</label>
        <input
          type='password'
          id='confirmPassword'
          name='confirmPassword'
          style={inputStyle}
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
      </div>
      <button 
        type='submit' 
        style={{
          ...buttonStyle,
          ...(isRegisterDisabled ? disabledButtonStyle : {})
        }} 
        onClick={handleSubmit}
        disabled={isRegisterDisabled}>Register</button>
      {passwordsMatch ? null : <div style={errorMessageStyle}>Passwords don't match</div>}
      {passwordTouched && formData.password.length > 0 && !isPasswordValid(formData.password) ? <div style={errorMessageStyle}>Password must be at least 8 characters long.</div> : null}
      {!isUsernameAvailable && <div style={errorMessageStyle}>Username is already taken. Please choose another.</div>}
      {!isEmailAvailable && <div style={errorMessageStyle}>Email is already taken. Please choose another.</div>}
    </div>
    </div>
    </div>
  );
};

export default Registration;