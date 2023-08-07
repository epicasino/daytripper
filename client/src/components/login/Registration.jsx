import React, { useState } from "react";

function RegistrationForm() {

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === "userName") {
      setUserName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = () => {
    console.log(userName, email, password, confirmPassword);
  };

  return (
    <div className="form">
      <div className="form-body">
        <div className="username">
          <label className="form__label" htmlFor="userName">Username</label>
          <input className="form__input" type="text" value={userName}
            onChange={(e) => handleInputChange(e)} id="userName" placeholder="userName"/>
        </div>

        <div className="email">
          <label className="form__label" htmlFor="email">Email</label>
          <input type="email" id="email" className="form__input" value={email}
            onChange={(e) => handleInputChange(e)} placeholder="Email"/>
        </div>

        <div className="password">
          <label className="form__label" htmlFor="password">Password</label>
          <input className="form__input" type="password" id="password" value={password}
            onChange={(e) => handleInputChange(e)} placeholder="Password"/>
        </div>

        <div className="confirm-password">
          <label className="form__label" htmlFor="confirmPassword">Confirm Password</label>
          <input className="form__input" type="password" id="confirmPassword" value={confirmPassword}
            onChange={(e) => handleInputChange(e)} placeholder="Confirm Password"/>
        </div>
      </div>

      <div className="footer">
        <button onClick={() => handleSubmit()} type="submit" className="btn">Register</button>
      </div>
    </div>
  );
}

export default RegistrationForm;