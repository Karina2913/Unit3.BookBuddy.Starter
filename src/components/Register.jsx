/* TODO - add your code to create a functional React component that renders a registration form */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register () {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        // resets input 
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <div>
                <label htmlFor="firstname">First Name: </label>
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
            <div>
                <label htmlFor="lastname">Last Name: </label>
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
            <div>
                <label htmlFor="email">Email: </label>
                <input 
                    type="text"
                    required
                    name="email"
                    id="email"
                    value={email}
                    placeholder="Email"
                    onChange={(event) => setEmail(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="passowrd">Password: </label>
                <input 
                    type="password"
                    required
                    name="password"
                    id="password"
                    value={password}
                    placeholder="Password"
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <button type="submit">Register</button>
        </form>
    )
}