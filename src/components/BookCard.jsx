import "./BookCard.css";
import { useNavigate } from "react-router-dom";
import SingleBook from "./SingleBook.jsx";
import BookAvailable from "./BookAvailable.jsx";
import { deleteReservation } from "../API/index.js";

export default function BookCard({ book, books, isSingle, token }) {
  const navigate = useNavigate();

  const detailsButton = () => {
    navigate(`/books/${book.id}`);
  };

  const backButton = () => {
    navigate("/books");
  };

//   const handleReturnButton = async () => {
//     const reservationId = book.reservationId;
//     // const result = await deleteReservation(book.reservationId, token);

//     // test whether book is checked out by user, name it bookCheckedOut
//     if (!book.available) {
//         let bookCheckedOut = false;
//         for (let i = 0; i < books.length; i++) {
//             if (books[i].bookId === book.id) {
//                 bookCheckedOut = true;
//                 return;
//             } 
//         }

//         if (bookCheckedOut) {
//             const result = await deleteReservation(reservationId, token);
//             if (result) {
//                 console.log("You returned the book!") 
//             }
//           }
//         }
//     }

  return (
    <div className="book-card">
      <h3 className="book-title">{book.title}</h3>
      <h3 className="book-author">{book.author}</h3>
      <img src={book.coverimage} alt={book.title} />
      {book.available ? (
        <div>
          <h3 className="available">This book is available for check out!</h3>
          {token ? (
            <button onClick={checkOutButton} className="check-out-button">
              Check Out
            </button>
          ) : null}
        </div>
      ) : (
        <h3 className="unavailable">This book is unavailable!</h3>
      )}
      {isSingle ? (
        <>
          <p className="book-description">{book.description}</p>
          {/* <h3>{book.available}</h3> */}
          <div className="button-container">
            <button onClick={backButton} className="book-card-button">
              Go Back
            </button>
            <BookAvailable book={book} />
          </div>
        </>
      ) : (
        <button onClick={detailsButton} className="book-card-button">
          Book Details
        </button>
      )}
    </div>
  );
}
