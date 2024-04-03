import { useState } from "react";
import "./styles/Register.css"

function Register() {
    const [formData, setFormData] = useState({
      username: '',
      password: '',
      confirmPassword: '',
    });
    
    const handleChange = (event) => {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      //btw there is no error handling so in the demonstration dont mess it up
      fetch("http://localhost:8080/v1/trivia/addUser/" + formData.username + "&" + formData.password + "&9")
      .then(data => console.log(data));
    };
  
    return (
        <div className="register-form">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="register-form-group">
            <label htmlFor="username" className="register-field-label">
              Username:
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleChange}
              className="register-user-input"
            />
          </div>
          <div className="form-group" >
            <label htmlFor="password" className="register-field-label" >
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="register-user-input"
            />
          </div>
          <div className="form-group" >
            <label htmlFor="confirmPassword" className="register-field-label">
              Confirm Password:
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="register-user-input"
            />
          </div>
          <button type="submit" className="register-submit-button">
            Register
          </button>
        </form>
      </div>
    );
  }
  
  export default Register;