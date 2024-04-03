import React, { useState } from 'react';
import './styles/Login.css'; // Import the CSS file

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:8080/v1/trivia/getUser/" + formData.username + "&" + formData.password + "&9")
    .then(data => console.log(data));
  };

  return (
    <div className="login-form">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="login-form-group">
          <label htmlFor="username" className="login-field-label">
            Username:
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
            className="login-user-input"
          />
        </div>
        <div className="login-form-group">
          <label htmlFor="password" className="login-field-label">
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="login-user-input"
          />
        </div>
        <button type="submit" className="login-submit-button">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;