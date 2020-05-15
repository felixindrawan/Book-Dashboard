import React, { useState } from "react";
import Header from "./HeaderComponent";

import "../styles/AddBookModalComponent.css";

function AddBookModal(props) {

  const [books, setBooks] = useState({
    title: "",
    author: "",
    isbn: "",
    pubDate: "",
    pageNum: "",
    pubCountry: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    console.log(books.title);

    setBooks((prevBooks) => {
      console.log(prevBooks);
      return {
        ...prevBooks,
        [name]: value,
      };
    });
  }

  function submitBook(event) {
    setErrorMsg("");

    //ERROR HANDLING
    if (
      books.title === "" ||
      books.author === "" ||
      books.pubDate === "" ||
      books.pageNum === "" ||
      books.pubCountry === ""
    ) {
      setErrorMsg("Fields can't be empty");

      event.preventDefault();
    } else {
      props.onAdd(books);
      setBooks({
        title: "",
        author: "",
        isbn: "",
        pubDate: "",
        pageNum: "",
        pubCountry: "",
      });
      event.preventDefault();
      props.onClose();
    }
  }

  function closeModal(event) {
    setErrorMsg("");
    event.preventDefault();
    props.onClose();
  }

  if (props.visibleOrNot) {
    return (
      <div className="modal">
        <div className="modalContent">
          <form>
            <div className="addBookHeader">
              <Header text="Add Book" />
              <button className="close-button" onClick={closeModal}>
                X
              </button>
            </div>

            <hr></hr>

            <div>
              <h5 className="fieldTitle">Title</h5>
              <input
                name="title"
                onChange={handleChange}
                value={books.title}
                type="text"
                placeholder="eg. Fleishman is in Trouble: A Novel"
              />

              <h5 className="fieldTitle">Author</h5>
              <input
                name="author"
                onChange={handleChange}
                value={books.author}
                type="text"
                placeholder="eg. Fleishman is in Trouble: A Novel"
              />

              <h5 className="fieldTitle">ISBN</h5>
              <input
                name="isbn"
                onChange={handleChange}
                value={books.isbn}
                type="text"
                placeholder="eg. Fleishman is in Trouble: A Novel"
              />

              <h5 className="fieldTitle">Published on</h5>
              <input
                name="pubDate"
                onChange={handleChange}
                value={books.pubDate}
                type="text"
                placeholder="eg. Fleishman is in Trouble: A Novel"
              />

              <h5 className="fieldTitle">Number of Page</h5>
              <input
                name="pageNum"
                onChange={handleChange}
                value={books.pageNum}
                type="text"
                placeholder="eg. Fleishman is in Trouble: A Novel"
              />

              <h5 className="fieldTitle">Country Publisher</h5>
              <select
                required
                name="pubCountry"
                onChange={handleChange}
                value={books.pubCountry}
              >
                <option value="" className="example" disabled defaultValue hidden>
                  eg. Fleishman is in Trouble: A Novel
                </option>
                <option value="U.S.">U.S.</option>
              </select>

              <div className="error-msg-div">
                <h6 className="error-msg">{errorMsg}</h6>
              </div>

              <div className="buttonContainer">
                <button className="button-red" onClick={submitBook}>
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return <div></div>;
}

export default AddBookModal;
