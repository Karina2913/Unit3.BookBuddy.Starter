import { useState, useEffect } from 'react'
import bookLogo from './assets/books.png'
import { Routes, Route, Link } from 'react-router-dom'
import Books from './components/Books'
import SingleBook from './components/SingleBook'
import Navigations from './components/Navigations'
import Register from './components/Register'

export default function App() {
  const [token, setToken] = useState(null);

  return (
    <div>
      <Navigations token={token} setToken={setToken} />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/books/:id" element={<SingleBook />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}
