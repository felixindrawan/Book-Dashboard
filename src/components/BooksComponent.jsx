import React, { useState, useEffect } from "react";
import BookCard from "./BookCardComponent";
import AddBookModal from "./AddBookModalComponent";

import "../styles/BookComponent.css";

function BookData({ match }) {
  const [modalVisible, setModalVisible] = useState(false);

  function openModal() {
    setModalVisible(true);
  }

  useEffect(() => {
    fetchItem();
    console.log({ match });
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
    return (
      <div>
        <BookCard
          key={book.id}
          title={book.title}
          author={book.author}
          isbn={book.isbn}
          numPages={book.pageNum}
          pubDate={book.pubDate}
          pubCountry={book.pubCountry}
          imgSrc='https://lorempixel.com/400/400/' //{book.imageUrl}
        />
      </div>
    );
  }

  function addBook(newBook) {
    setBooks((prevBooks) => {
      return [...prevBooks, newBook];
    });
  }

  return (
    <div>
      <AddBookModal onAdd={addBook} visibleOrNot={modalVisible} onClose={() => setModalVisible(false)}/>

      <div className="BooksTotalAndButton">
        <h5 className="totalBooks">Books ({books.length})</h5>

        <container className="addButton">
          <button class="button-red" onClick={openModal}>
            Add +
          </button>
        </container>
      </div>
      {books.map(getEachBook)}
    </div>
  );
}

export default BookData;
