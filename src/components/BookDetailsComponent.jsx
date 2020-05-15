import React from 'react';
import '../styles/BookDetailsComponent.css'

function BookDetails(props){
  function createSection(secTitle, secInfo){
    return(
      <table border="0" cellPadding="0" cellSpacing="0" className="section">
        <tbody>
        <tr>
          <td><h5 className="section-title">{secTitle}</h5></td>
        </tr>
        <tr className="info">
          <td><h5 className="overflow-ellipsis">{secInfo}</h5></td>
        </tr>
        </tbody>
      </table>
    );
  }

  function formatDate(string){
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([],options);
}

  const isbn = props.isbn;
  const pageNum = props.pageNum + " pages";
  const pubDate = formatDate(props.pubDate);
  const pubCountry = props.pubCountry;

  return(
    <table border="0" cellPadding="0" cellSpacing="0">
      <tbody>
      <tr>
        <td className="tableData">
          {/* ISBN */}
          {createSection("ISBN", isbn)}
        </td>
        <td className="tableData">
          {/* Num of pages */}
          {createSection("Number of Page", pageNum)}
        </td>
      </tr>
      <tr >
        <td className="tableData">
          {/* Published on */}
          {createSection("Published on", pubDate)}
        </td>
        <td className="tableData">
          {/* Country publisher */}
          {createSection("Country Publisher", pubCountry )}
        </td>
      </tr>
      </tbody>
    </table>
  );
}

export default BookDetails;