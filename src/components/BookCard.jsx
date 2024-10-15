import "./BookCard.css";
import { useNavigate } from "react-router-dom";
import SingleBook from "./SingleBook.jsx";

export default function BookCard({ book, isSingle }) {
  const navigate = useNavigate();

  const detailsButton = () => {
    navigate(`/books/${book.id}`);
  };

  const backButton = () => {
    navigate("/books");
  };

  return (
    <div className="book-card">
      <h3 className="book-title">{book.title}</h3>
      <h3>{book.author}</h3>
      <img src={book.coverimage} alt={book.title} />
      {isSingle ? (
        <>
          <h3>{book.description}</h3>
          <h3>{book.available}</h3>
          <button onClick={backButton} className="book-card-button">
            Go Back
          </button>
        </>
      ) : (
        <button onClick={detailsButton} className="book-card-button">
          Book Details
        </button>
      )}
    </div>
  );
}
