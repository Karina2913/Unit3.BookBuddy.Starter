import { useState, useEffect } from "react";
import bookLogo from "./assets/books.png";
import { Routes, Route, Link } from "react-router-dom";
import Books from "./components/Books";
import SingleBook from "./components/SingleBook";
import Login from "./components/Login";
import Register from "./components/Register";
import Account from "./components/Account";

export default function App() {
  const [token, setToken] = useState(null);

  // TODO sign out using local storage and user's assigned token

  return (
    <div>
      <Navigations token={token} setToken={setToken} />
      <Routes>
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<SingleBook />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
}
