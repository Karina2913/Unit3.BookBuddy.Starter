/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import { useState, useEffect } from 'react';
import BookCard from './BookCard';
import { fetchSingleBook } from '../API';
import { useParams } from 'react-router-dom';

export default function SingleBook() {
    const [book, setBook] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchBook = async (id) => {
            try {
                const getSingleBook = await fetchSingleBook(id);
                setBook(getSingleBook);
                console.log(getSingleBook);
            } catch (error) {
                console.error("Oops, there was an error fetching the book!", error);
            }
        }
        fetchBook(id);
    }, [id]);

    if (!book) {
        return <h1>Loading...</h1>
    }

    return <BookCard book={book} isSingle />
}