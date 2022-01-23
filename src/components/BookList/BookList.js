import React from 'react';
import PropTypes from 'prop-types';
import Books from '../Books/Books';

const BookList = (props) => {
  const { booksItem } = props;

  return (
    <div className="booklist__container container mx-auto lg:overflow-y-auto">
      {booksItem.map((book) => (
        <Books key={book.id} book={book} />
      ))}
    </div>
  );
};

BookList.propTypes = { booksItem: PropTypes.arrayOf(PropTypes.object).isRequired };
export default BookList;
