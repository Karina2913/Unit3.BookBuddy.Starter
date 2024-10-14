/* TODO - add your code to create a functional React component that renders a login form */
import { useState } from 'react';

export default function Login () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        // resets input
        setEmail("");
        setPassword("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
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
            <button type="submit">Login</button>
        </form>
    )
}