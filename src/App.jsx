import { useState, useEffect } from 'react'
import bookLogo from './assets/books.png'
import { fetchAllBooks, fetchSingleBook } from './API'
import { Routes, Route, Link } from 'react-router-dom'

export default function App() {
  const [token, setToken] = useState(null)
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getAllBooks = async () => {
      try {
        const books = await fetchAllBooks();
        setBooks(books);
      } catch (error) {
        console.error("Whoops! There was an error fetching all books.", error);
      }
    }
    getAllBooks();
  }, []);

  return (
    <>
      <h1><img id='logo-image' src={bookLogo}/>Library App</h1>

      <p>Complete the React components needed to allow users to browse a library catalog, check out books, review their account, and return books that they've finished reading.</p>

      <p>You may need to use the `token` in this top-level component in other components that need to know if a user has logged in or not.</p>

      <p>Don't forget to set up React Router to navigate between the different views of your single page application!</p>
    </>
  )
}
