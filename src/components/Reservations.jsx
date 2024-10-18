import { useEffect, useState } from 'react';
import { fetchReservations } from '../API';
import BookCard from './BookCard';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Reservations() {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    
    useEffect(() => {
        const getReservedBooks = async () => {
            if (!token) {
                navigate('/users/login');
                return;
            }
            try {
                const reservedBooks = await fetchReservations(token);
                setBooks(reservedBooks);
            } catch (error) {
                console.error("There was an error getting reserved books!", error);
            }
        }
        getReservedBooks();
    }, [token]);
    console.log("books", books);

    const checkedOutBooks = books.filter(book => !book.isAvailable);
    console.log("checked out:", checkedOutBooks);

    return (
        <div>
            <h3>Checked Out Books</h3>
            {checkedOutBooks.length === 0 ? (
                <p>No books checked out!</p>
            ) : (
                <div>
                    {checkedOutBooks.map(book => (
                        <BookCard key={book.id} book={book} token={token} />
                    ))}
                </div>
            )}
        </div>
    )
}