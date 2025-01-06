import { useState } from "react";
import Form from "./Form";

function App() {
  const [books, setBooks] = useState([
    {
      id: crypto.randomUUID(),
      text: "The Great Gatsby",
    },
    {
      id: crypto.randomUUID(),
      text: 1984,
    },
  ]);

  const updateBooks = (book) => {
    const newBook = {
      id: crypto.randomUUID(),
      text: book,
    };
    setBooks([newBook, ...books]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((b) => b.id !== id));
  };

  return (
    <>
      <header>
        <h1>Booker</h1>
      </header>

      <Form onSubmit={updateBooks} />

      {books.map((book) => (
        <pre key={book.id}>
          {book.text}{" "}
          <div >
          <button onClick={() => deleteBook(book.id)}>Delete</button>
          <button onClick={() => deleteBook(book.id)}>Delete</button>
          <button onClick={() => deleteBook(book.id)}>Delete</button>
          </div>
        </pre>
      ))}
    </>
  );
}

export default App;