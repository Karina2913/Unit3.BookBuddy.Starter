import { useState, useEffect } from "react";
import bookLogo from "./assets/books.png";
import { Routes, Route, Link } from "react-router-dom";
import Books from "./components/Books";
import SingleBook from "./components/SingleBook";
import Login from "./components/Login";
import Register from "./components/Register";
import Account from "./components/Account";
import Navigations from "./components/Navigations";
import Reservations from "./components/Reservations";

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  return (
    <div>
      <Navigations token={token} setToken={setToken} />
      <Routes>
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<SingleBook />} />
        <Route path="/users/login" element={<Login setToken={setToken} />} />
        <Route path="/users/register" element={<Register setToken={setToken} />} />
        <Route path="/account" element={<Account />} />
        <Route path="/reservations" element={<Reservations token={token} />} />
        <Route path='/users/me' element={<Account token={token} />} />
      </Routes>
    </div>
  );
}
