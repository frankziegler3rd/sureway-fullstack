/*
Shyaam Darji
SE Team 4
This file is the registration page the user will be guided to when they click sign up, they will be prompted to enter 
their desired username and password which must be saved in the database when connected
*/

/*
The form contains input fields for username, password, and confirm password.
Each input field is associated with the corresponding property in the formData state.
The handleInputChange function updates the state when input fields change.
The handleSubmit function prevents the default form submission behavior and can be 
used to send the form data to an API endpoint for registration.
*/


import React, { useState } from 'react';
import axios from 'axios';

const Registration = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Event handler for input field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Event handler for form submission THIS IS THE AXIOS SHIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/register", formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
      // Handle registration logic (e.g., API call) here
  };

  // Styles for input fields and submit button
  const inputStyle = {
    margin: '10px 0',
    padding: '10px',
    width: '100%',
    fontSize: '18px', // Increased font size
    fontWeight: 'bold', // Bold text
  };

  const labelStyle = {
    color: '#000', // black color for labels
    fontSize: '20px', // Larger font size for labels
    marginBottom: '5px', // Added margin at the bottom
  };

  const registerTitleStyle = {
    color: '#000', // black color for the "Register" text
    fontSize: '40px', // Larger font size for the "Register" text
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

  return (
     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '300px', margin: 'auto' }}>
      <div style={registerTitleStyle}>Register</div>
      <div style={{ marginBottom: '10px', width: '100%' }}>
        <label htmlFor='username' style={labelStyle}>Username:</label>
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
        <label htmlFor='email' style={labelStyle}>E-mail:</label>
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
        <label htmlFor='password' style={labelStyle}>Password:</label>
        <input
          type='password'
          id='password'
          name='password'
          style={inputStyle}
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>
      <div style={{ marginBottom: '20px', width: '100%' }}>
        <label htmlFor='confirmPassword' style={labelStyle}>Confirm Password:</label>
        <input
          type='password'
          id='confirmPassword'
          name='confirmPassword'
          style={inputStyle}
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
      </div>
      <button type='submit' style={buttonStyle} onClick={handleSubmit}>
        Register
      </button>
    </div>
  );
};

export default Registration;
