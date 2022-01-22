import React from 'react';
import PropTypes from 'prop-types';
import Books from '../Books/Books';
import list from './BookList.module.scss';

const BookList = (props) => {
  const { booksItem } = props;

  return (
    <div className={list.wrapper}>
      {booksItem.map((book) => (
        <Books key={book.id} book={book} />
      ))}
    </div>
  );
};

BookList.propTypes = { booksItem: PropTypes.arrayOf(PropTypes.object).isRequired };
export default BookList;
