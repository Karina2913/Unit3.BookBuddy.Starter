import "./BookCard.css";
import { useNavigate } from "react-router-dom";
import SingleBook from "./SingleBook.jsx";
import BookAvailable from "./BookAvailable.jsx";

export default function BookCard({ book, isSingle, token }) {
  const navigate = useNavigate();

  const detailsButton = () => {
    navigate(`/books/${book.id}`);
  };

  const backButton = () => {
    navigate("/books");
  };

  const checkOutButton = () => {
    navigate("/reservations");
  };

  return (
    <div className="book-card">
      <h3 className="book-title">{book.title}</h3>
      <h3>{book.author}</h3>
      <img src={book.coverimage} alt={book.title} />
      {book.available ? (
        <div>
            <h3>This book is available for check out!</h3>
                {token ? (
                <button onClick={checkOutButton} className="check-out-button">Check Out</button>
                ) : (null)}
        </div>
      ) : (
        <h3>This book is unavailable!</h3>
      )}
      {isSingle ? (
        <>
          <h3>{book.description}</h3>
          <h3>{book.available}</h3>
          <button onClick={backButton} className="book-card-button">
            Go Back
          </button>
          <BookAvailable book = {book} />
        </>
      ) : (
        <button onClick={detailsButton} className="book-card-button">
          Book Details
        </button>
      )}
    </div>
  );
}
