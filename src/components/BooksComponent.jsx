import React, { useState, useEffect } from "react";
import BookCard from "./BookCardComponent";
import AddBookModal from "./AddBookModalComponent";

import "../styles/BookComponent.css";

function BookData() {
  const [modalVisible, setModalVisible] = useState(false);
  var bookIdCounter = 0;

  function openModal() {
    setModalVisible(true);
  }

  useEffect(() => {
    fetchItem();
  }, []);

  const [books, setBooks] = useState([]);

  const fetchItem = async () => {
    console.log("test");
    const data = await fetch(
      `https://5de759a9b1ad690014a4e21e.mockapi.io/api/v1/books`
    );

    const booksData = await data.json();

    console.log(booksData);
    setBooks(booksData);
  };

  function getEachBook(book) {
    bookIdCounter += 1;
    return (
      <BookCard
        key={bookIdCounter}
        title={book.title}
        author={book.author}
        isbn={book.isbn}
        numPages={book.pageNum}
        pubDate={book.pubDate}
        pubCountry={book.pubCountry}
        imgSrc="https://lorempixel.com/400/400/" //{book.imageUrl}
      />
    );
  }

  function addBook(newBook) {
    setBooks((prevBooks) => {
      return [...prevBooks, newBook];
    });
  }

  return (
    <div>
      <AddBookModal
        onAdd={addBook}
        visibleOrNot={modalVisible}
        onClose={() => setModalVisible(false)}
      />

      <div className="BooksTotalAndButton">
        <h5 className="totalBooks">Books ({books.length})</h5>

        <div className="addButton">
          <button className="button-red" onClick={openModal}>
            Add +
          </button>
        </div>
      </div>
      {books.map(getEachBook)}
    </div>
  );
}

export default BookData;
