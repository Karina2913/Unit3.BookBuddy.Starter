const API_URL = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api`;

// fetching allBooks GET
export async function fetchAllBooks() {
  try {
    const response = await fetch(`${API_URL}/books`);
    const result = await response.json();
    return result.books;
  } catch (error) {
    console.error("Whoops! Error fetching all books", error);
  }
}

// fetching singleBook GET
export async function fetchSingleBook(bookId) {

  try {
    const response = await fetch(`${API_URL}/books/${bookId}`);
    const result = await response.json();
    return result.book;
  } catch (error) {
    console.error("Oops, there was an error getting your book!", error);
  }
}

//TODO Login POST
export async function loginUser(email, password) {
  try {
    const response = await fetch(`${API_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const result = response.json();
    return result;
  } catch (error) {
    console.log("Whoooa, there was an error logging in!", error);
  }
}

//TODO Register POST
export async function registerUser(firstName, lastName, email, password) {
  try {
    const response = await fetch(`${API_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("Uh oh, there was an error registering user!", error);
  }
}

// reservations GET
export async function fetchReservations(token) {
    try {
      const response = await fetch(`${API_URL}/reservations`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
      });
      const result = await response.json();
      return result.reservation;
    } catch (error) {
      console.error("Whoops! Error fetching all books", error);
    }
}

export async function fetchAccountInfo(token) {
    try {
        const response = await fetch(`${API_URL}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Oops, There was an error!", error);
    }
}