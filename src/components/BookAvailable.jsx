import { bookAvailability } from "../API";
import { useState } from 'react';

export default function BookAvailable ({ book }) {
    const [isAvailable, setIsAvailable] = useState(book.available);
    const token = localStorage.getItem("token");

    const handleAvailabilityUpdate = async () => {
        const updatedAvailability = !isAvailable;
        const updatedBook = await bookAvailability(book.id, updatedAvailability, token);

        if (updatedBook) {
            setIsAvailable(updatedBook.available);
        }
    }

    console.log("available books", book);
    return (
        <div>
            <h3>This book is: {isAvailable ? 'Available': 'Checked Out'}</h3>
            {/* <button onClick={handleAvailabilityUpdate}>
                {isAvailable ? 'Check Out' : 'Return'} Book
            </button> */}
            {!book.available && bookCheckedOut && (
            <button onClick={handleReturnButton} className="book-card-button">Return Book</button>
          )}
        </div>
    )
}
``