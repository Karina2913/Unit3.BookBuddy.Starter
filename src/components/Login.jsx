/* TODO - add your code to create a functional React component that renders a login form */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../API";

export default function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function infoSubmit(event) {
    event.preventDefault();

    // The properties from the login form will be used to log in the registered user
    const registeredUser = await loginUser(email, password);

    // When the user is logged in we want to update state with our token
    setToken(registeredUser.token);

    setEmail("");
    setPassword("");

    // When the user successfully logs in, they will navigate back to the home page
    navigate("/books");
  }

  return (
    <form onSubmit={infoSubmit}>
      <h2>Welcome Back! Please enter the following information to log in!</h2>
      <div className="login-form">
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
      <div className="login-form">
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
      <button type="submit">Log In!</button>
    </form>
  );
}
