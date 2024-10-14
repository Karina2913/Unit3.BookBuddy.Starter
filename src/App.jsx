import { useState, useEffect } from 'react'
import bookLogo from './assets/books.png'
import { Routes, Route, Link } from 'react-router-dom'
import Books from './components/Books'
import SingleBook from './components/SingleBook'

export default function App() {
  const [token, setToken] = useState(null)

  return (
    <>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/books/:id" element={<SingleBook />} />
      </Routes>
    </>
  )
}
