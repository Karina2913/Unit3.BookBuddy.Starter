const API_URL = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api`

// fetching allBooks GET 
export async function fetchAllBooks() {
    try {
        const response = await fetch(`${API_URL}/books`);
        const result = await response.json();
        return result.data;
    } catch (error) {
        console.error("Whoops! Error fetching all books", error);
    }
}

// fetching singleBook GET
export async function fetchSingleBook(bookId) {
    try {
        const response = await fetch(`${API_URL}/books/:${bookId}`);
        const result = response.json();
        return result.data;
    } catch (error) {
        console.error("Oops, there was an error getting your book!", error);
    }
}

//TODO Login POST

//TODO Register POST