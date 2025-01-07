import { useState } from "react";

function Form({ onSubmit, onSort }) {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input) return;

    onSubmit(input);

    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset style={{ display: "flex", gap: "5px" }}>
        <legend>Add a book</legend>
        <input
          type="text"
          name="book"
          placeholder="Add a book"
          autoComplete="off"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="button" onClick={onSort}>
          Sort
        </button>
        <button type="button" onClick={onSort}>
          Sort
        </button>
        <button type="submit">Add book</button>
      </fieldset>
    </form>
  );
}

export default Form;