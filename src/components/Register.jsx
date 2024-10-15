/* TODO - add your code to create a functional React component that renders a registration form */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../API";

export default function Register({ setToken }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function infoSubmit(event) {
    event.preventDefault();

    // The properties from the register form will be used to create the new user
    const newUser = await registerUser(firstName, lastName, email, password);

    // This will set the token for this particular user
    setToken(newUser.token);

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");

    // When the user successfully registers, they will navigate back to the home page
    useNavigate("/books");
  }

  return (
    <form onSubmit={infoSubmit}>
      <h2>
        Hello, fellow book buddy! Please enter the following information to
        register!
      </h2>
      <div className="register-form">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          required
          name="firstName"
          id="firstName"
          value={firstName}
          placeholder="First Name"
          onChange={(event) => setFirstName(event.targetValue)}
        />
      </div>
      <div className="register-form">
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          required
          name="lastName"
          id="lastName"
          value={lastName}
          placeholder="Last Name"
          onChange={(event) => setLastName(event.targetValue)}
        />
      </div>
      <div className="register-form">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          required
          name="email"
          id="email"
          value={email}
          placeholder="Email"
          onChange={(event) => setEmail(event.targetValue)}
        />
      </div>
      <div className="register-form">
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          required
          name="password"
          id="password"
          value={password}
          placeholder="Password"
          onChange={(event) => setPassword(event.targetValue)}
        />
      </div>
      <button type="submit">Register!</button>
    </form>
  );
}
