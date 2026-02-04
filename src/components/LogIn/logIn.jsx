import React from 'react';
import './logIn.css';

const LoginForm = ({ onClose }) => {
  const handleLogin = (event) => {
    event.preventDefault();
    // Implement login logic here
    onClose(); // Close the modal after login
  };

  return (
    <div className="login__form-container">
      <form className="login__form" onSubmit={handleLogin}>
        <h1 className="login__title">Login</h1>
        <div className="login__inputGroup">
          <label className="login__label" htmlFor="email">Email</label>
          <input className="login__input" type="email" id="email" required />
        </div>
        <div className="login__inputGroup">
          <label className="login__label" htmlFor="password">Password</label>
          <input className="login__input" type="password" id="password" required />
        </div>
        <button className="login__button" type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginForm;
