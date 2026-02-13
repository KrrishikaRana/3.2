import React, { useState } from "react";
import "./App.css";

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "The Curse of the Cheese Pyramid", author: "Elisabetta Dami" },
    { id: 2, title: "The Midnight Library", author: "Matt Haig" },
    { id: 3, title: "Matilda", author: "Roald Dahl" },
    { id: 4, title: "The Kingdom of Fantasy", author: "Elisabetta Dami" }
                    
  ]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [search, setSearch] = useState("");

  const addBook = () => {
    if (!title || !author) return;

    setBooks([
      ...books,
      { id: Date.now(), title, author }
    ]);

    setTitle("");
    setAuthor("");
  };

  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const filteredBooks = books.filter(
    book =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <div className="app">

  <h1 className="title">📚 Library Management</h1>
  <p className="subtitle">Manage your books easily</p>

      <div className="card top-card">
        <input
          className="search"
          placeholder="Search books..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <div className="form">
          <input
            placeholder="Book Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <input
            placeholder="Author"
            value={author}
            onChange={e => setAuthor(e.target.value)}
          />
          <button onClick={addBook}>Add Book</button>
        </div>
      </div>

      {filteredBooks.map(book => (
        <div className="card book-card" key={book.id}>
          <div>
            <h2>{book.title}</h2>
            <p>by {book.author}</p>
          </div>
          <button className="remove" onClick={() => removeBook(book.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
    </div>
  );
}

export default App;


