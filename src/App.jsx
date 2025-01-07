import { useReducer } from "react";
import Form from "./Form";

const booksReducer = (prevState, action) => {
  switch (action.type) {
    case "ADD":
      const newBook = {
        id: crypto.randomUUID(),
        text: action.payload,
        likes: 0,
      }
      return [newBook, ...prevState]
    case "DELETE":
      return prevState.filter((book) => book.id !== action.payload);

      case "ORDER":
        return [...prevState].sort((a, b) => b.name - a.likes);

    case "SORT":
      return [...prevState].sort((a, b) => b.likes - a.likes);
    case "LIKE":
      return prevState.map((book) => book.id === action.payload ? { ...book, likes: book.likes + 1 } : book);
    case "DISLIKE":
      return prevState.map((book) => book.id === action.payload ? { ...book, likes: book.likes - 1 } : book)
  }
}

function App() {
  const [books, dispatch] = useReducer(booksReducer, [
    {
      id: crypto.randomUUID(),
      text: "The Great Gatsby",
      likes: 0,
    },
    {
      id: crypto.randomUUID(),
      text: 1984,
      likes: 0,
    },
  ]);



  return (
    <>
      <header>
        <h1>Booker</h1>
      </header>

      <Form onSubmit={(name) => dispatch({ type: "ADD", payload: name })}
        onSort={() => dispatch({ type: "SORT" })} />

      {books.map((book) => (
        <pre key={book.id}>
          <h3>{book.text}</h3>
          <p id="like-count">{book.likes} ❤️</p>

          <div style={{ display: "flex", gap: "5px" }}>
            <button onClick={() => dispatch({ type: "LIKE", payload: book.id })}>Like</button>
            <button onClick={() => dispatch({ type: "DISLIKE", payload: book.id })}>Dislike</button>
            <button onClick={() => dispatch({ type: "DELETE", payload: book.id })}>Delete</button>
          </div>
        </pre>
      ))}
    </>
  );
}

export default App;