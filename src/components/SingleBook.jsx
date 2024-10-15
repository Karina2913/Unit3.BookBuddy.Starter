/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleBook } from "../API";
import BookCard from "./BookCard.jsx";

export default function SingleBook() {
  const [book, setBook] = useState(null);
  const { id } = useParams();

  console.log("book", book);
  console.log("id", id);

  useEffect(() => {
    const getSingleBook = async (id) => {
      const singleBook = await fetchSingleBook(id);

      console.log(singleBook);

      setBook(singleBook);
    };
    getSingleBook(id);
  }, [id]);

  if (!book) {
    return <h1> Loading....</h1>;
  }

  return <BookCard book={book} isSingle />;
}
