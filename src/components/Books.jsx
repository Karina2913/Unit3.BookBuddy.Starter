/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import { useState, useEffect } from 'react';
import { fetchAllBooks } from '../API';
import BookCard from './BookCard';

export default function Books() {
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
            <div>
                {books.map((book) => {
                    return (
                        <BookCard key={book.id} book={book} setBooks={setBooks} />
                    );
                })}
            </div>
        </>
    )
}