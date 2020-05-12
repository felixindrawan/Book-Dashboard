import React from "react";

import BookDetails from "./BookDetailsComponent";

import "../styles/BookCardComponent.css";

function BookCard(props) {
  return (
    <div className="card-div">
      <div className="headers">
      <img className="book-cover" src={props.imgSrc} alt='book-cover' />

      <div>
      <h3 className="title">{props.title}</h3>
      <h5 className="author">{props.author}</h5>
      </div>
      </div>
      <div className="book-details">
        <BookDetails
          isbn={props.isbn}
          pageNum={props.numPages}
          pubDate={props.pubDate}
          pubCountry={props.pubCountry}
        />
      </div>
    </div>
  );
}

export default BookCard;
