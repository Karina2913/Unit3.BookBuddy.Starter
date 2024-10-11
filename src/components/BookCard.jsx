import './BookCard.css';

export default function BookCard({ book, setBooks }) {
    return (
        <div>
            <div>
                <h3 className="book-title">{book.title}</h3>
                <img src={book.coverimage} alt={book.title} />
            </div>
        </div>
    )
}