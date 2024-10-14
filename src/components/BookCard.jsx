import { useNavigate } from 'react-router-dom';
import './BookCard.css';

export default function BookCard({ book, setBooks, isSingle }) {
    const navigate = useNavigate();

    const backButton = () => {
        navigate("/");
    }

    const seeDetails = () => {
        navigate(`/books/${book.id}`);
    }

    return (
        <div className="book-card">
            <div className="book-image">
                <img src={book.coverimage} alt={book.title} />
            </div>
            <div className="book-info">
                <h3 className="book-title">{book.title}</h3>
                <p className="book-description">{book.description}</p>
            </div>
            {isSingle ? (
                <button onClick={backButton}>Back</button>
            ) : (
                <button onClick={seeDetails}>See Details</button>
            )}
        </div>
    )
}