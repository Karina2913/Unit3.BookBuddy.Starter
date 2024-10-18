import { bookAvailability } from "../API";
import { useState } from 'react';

export default function BookAvailable ({ book }) {
    const [isAvailable, setIsAvailable] = useState(book.available);
    const token = localStorage.getItem("token");

    const handleAvailabilityUpdate = async () => {
        const updatedBook = await bookAvailability(book.id, token);

    }

    return (
        <div>
            <h3>This book is: {isAvailable ? 'Available': 'Checked Out'}</h3>
            <button onClick={handleAvailabilityUpdate}>
                {isAvailable ? 'Check Out' : 'Return'} Book
            </button>
        </div>
    )
}
