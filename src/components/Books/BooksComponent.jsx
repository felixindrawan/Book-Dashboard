import React, { useState, useEffect } from "react";
import BookCard from "../BookCard/BookCardComponent";
import AddBookModal from "../AddBookModal/AddBookModalComponent";

import "../../styles/BookComponent.css";

function BookData(props) {
  const [modalVisible, setModalVisible] = useState(false);
  var bookIdCounter = 0;

  function openModal() {
    setModalVisible(true);
  }

  // -------------------------*****-------------------------
  // Fetching Books
  const [booksList, setBooksList] = useState([]);
  useEffect(() => {
    if (props.data.length !== 0) {
      setBooksList(props.data[1].data);
    }
  });

  // -------------------------*****-------------------------
  // Get book
  function getEachBook(book) {
    bookIdCounter += 1;
    return (
      <BookCard
        key={bookIdCounter}
        title={book.title}
        author={book.author}
        isbn={book.isbn}
        pageNum={book.numberOfPages}
        pubDate={book.publishedOn}
        pubCountry={book.country}
        imgSrc="https://lorempixel.com/400/400/" //{book.imageUrl}
      />
    );
  }

  // -------------------------*****-------------------------
  //POST
  function getCurrentTime() {
    var date = new Date().getDate(); //To get the Current Date
    var month = new Date().getMonth() + 1; //To get the Current Month
    var year = new Date().getFullYear(); //To get the Current Year
    var hours = new Date().getHours(); //To get the Current Hours
    var min = new Date().getMinutes(); //To get the Current Minutes
    var sec = new Date().getSeconds(); //To get the Current Seconds

    return (
      date + "/" + month + "/" + year + " " + hours + ":" + min + ":" + sec
    );
  }

  function addBook(newBook) {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: newBook.key, // number
        createdAt: getCurrentTime(), // date in string NEEEEEEEEEEEEEEEED TO BE CHNAGED
        title: newBook.title, // string
        author: newBook.author, // string
        isbn: newBook.isbn, // string
        publishedOn: newBook.pubDate, // number
        numberOfPages: newBook.pageNum, // number
        country: newBook.pubCountry, // string
        imageUrl: "https://lorempixel.com/400/400/", // string
      }),
    };

    fetch(
      `https://5de759a9b1ad690014a4e21e.mockapi.io/api/v1/books`,
      requestOptions
    ).then((response) => response.json());

    setBooksList((prevBooks) => {
      return [...prevBooks, newBook];
    });
  }

  // -------------------------*****-------------------------
  return (
    <div>
      <AddBookModal
        onAdd={addBook}
        visibleOrNot={modalVisible}
        onClose={() => setModalVisible(false)}
        countryData={props.data}
      />

      <div className="BooksTotalAndButton">
        <h5 className="totalBooks">Books ({booksList.length})</h5>

        <div className="addButton">
          <button className="button-red" onClick={openModal}>
            Add +
          </button>
        </div>
      </div>
      {booksList.map(getEachBook)}
    </div>
  );
}

export default BookData;
