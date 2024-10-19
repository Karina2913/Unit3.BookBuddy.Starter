/* TODO - add your code to create a functional React component that renders a registration form */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../API";
import "./Register.css";

export default function Register({ setToken }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function infoSubmit(event) {
    event.preventDefault();
    console.log("set token:", setToken);

    // The properties from the register form will be used to create the new user
    const newUser = await registerUser(firstName, lastName, email, password);

    // This will set the token for this particular user
    setToken(newUser.token);

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");

    // When the user successfully registers, they will navigate back to the home page
    navigate("/books");
  }

  return (
    <form className="register-form" onSubmit={infoSubmit}>
      <div>
        <h2 className="register-welcome-message">Hello, fellow book buddy!</h2>
        <p className="register-info-prompt">
          Please enter the following information to register!
        </p>
      </div>
      <div className="register-first-name-field">
        <label htmlFor="firstName">First Name:</label>
        <input
          className="register-first-input"
          type="text"
          required
          name="firstName"
          id="firstName"
          value={firstName}
          placeholder="First Name"
          onChange={(event) => setFirstName(event.target.value)}
        />
      </div>
      <div className="register-last-name-field">
        <label htmlFor="lastName">Last Name:</label>
        <input
          className="register-last-input"
          type="text"
          required
          name="lastName"
          id="lastName"
          value={lastName}
          placeholder="Last Name"
          onChange={(event) => setLastName(event.target.value)}
        />
      </div>
      <div className="register-email-field">
        <label htmlFor="email">Email:</label>
        <input
          className="register-email-input"
          type="text"
          required
          name="email"
          id="email"
          value={email}
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="register-password-field">
        <label htmlFor="password">Password:</label>
        <input
          className="register-password-input"
          type="password"
          required
          name="password"
          id="password"
          value={password}
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button className="register-submit-button" type="submit">
        Register!
      </button>
    </form>
  );
}
