import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './index.css';

function SignInView() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorUserNameMessage, setErrorUserNameMessage] = useState('');
  const [errorPasswordMessage, setErrorPasswordMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setErrorUserNameMessage('');
    setErrorPasswordMessage('');
    // Perform login logic here
    if (username === 'admin@gmail.com' && password === 'password@123') {
      // Successful login
      console.log('Login successful');
      // Reset form fields
      setErrorUserNameMessage('');
      setErrorPasswordMessage('Login successful');
      navigate('/browse');
    } else if (username === '') {

      setErrorUserNameMessage('* Please enter a valid email address or phone number.');

    } else if (password === "") {

      setErrorPasswordMessage('* Your password must contain between 4 and 60 characters.');

    } else {

      setErrorPasswordMessage('Invalid username or password');
    }
  };

  return (
    <div className='image-container'>
      <div className='netflix-container'>
        <img src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' className='netflix-logo' alt='netflix' />
      </div>
      <img src="https://pbs.twimg.com/media/FUMncpNUsAA5kS5.jpg:large" className="login-background" alt="Background" />
      <div className='login-card'>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label><br />
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              placeholder='Email or phone number'
              size={30}
              className='input-field'
            />
            {errorUserNameMessage && <p className='error-msg'>{errorUserNameMessage}</p>}
          </div>
          <div>
            <label htmlFor="password">Password</label><br />
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder='Password'
              size={30}
              className='input-field'
            />
            <button
              type="button"
              className="toggle-password-btn"
              onClick={handleTogglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errorPasswordMessage && <p className='error-msg'>{errorPasswordMessage}</p>}
          </div>
          <button type="submit" className='submit-btn w-100' >Sign In</button>
          <div className='bottom'>
              <label>
                <input type="checkbox" id="checkBox" name="rememberMe" defaultValue="true" defaultChecked />Remember me
              </label>
              <a className="login-help-link" target="_self" href="https://help.netflix.com/en/">Need help?</a>
          </div>
        </form>

      </div>
    </div>
  );
}

export default SignInView;

