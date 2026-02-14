import { useState } from "react";

type Book = {
  id: number;
  title: string;
  author: string;
};

function LibraryApp() {
  const [books, setBooks] = useState<Book[]>([
    { id: 1, title: "Atomic Habits", author: "James Clear" },
    { id: 2, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki" },
  ]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [search, setSearch] = useState("");

  const addBook = () => {
    if (!title || !author) return;

    const newBook: Book = {
      id: Date.now(),
      title,
      author,
    };

    setBooks([...books, newBook]);
    setTitle("");
    setAuthor("");
  };

  const removeBook = (id: number) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: "#16213e", padding: "30px", minHeight: "70vh" }}>
      <h2 style={{ color: "#7dd3fc" }}>Library Management</h2>

      <input
        type="text"
        placeholder="Search Book"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={inputStyle}
      />

      <h3 style={{ color: "#93c5fd" }}>Add New Book</h3>

      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={inputStyle}
      />

      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        style={inputStyle}
      />

      <button onClick={addBook} style={buttonStyle}>
        Add Book
      </button>

      <ul style={{ marginTop: "20px", color: "#cbd5e1" }}>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            <span style={{ color: "#a5b4fc" }}>{book.title}</span> —{" "}
            <span style={{ color: "#94a3b8" }}>{book.author}</span>
            <button
              onClick={() => removeBook(book.id)}
              style={{ marginLeft: "10px", backgroundColor: "#2e3b55", color: "#cbd5e1", border: "none" }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const inputStyle = {
  display: "block",
  marginBottom: "10px",
  padding: "8px",
  backgroundColor: "#1e293b",
  color: "#cbd5e1",
  border: "1px solid #334155",
};

const buttonStyle = {
  padding: "8px 15px",
  backgroundColor: "#1f2a40",
  color: "#cbd5e1",
  border: "1px solid #334155",
  cursor: "pointer",
};

export default LibraryApp;
