import React from 'react';
import PropTypes from 'prop-types';
import list from './BookList.module.scss';

const BookList = (props) => {
  const { booksItem } = props;
  return (
    <div className={list.wrapper}>
      {booksItem.map((book) => (
        <div className={list.item} key={book.id}>
          <div>
            <h3>{book.categories}</h3>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <ul>
              <li>Comments</li>
              <li>Remove</li>
              <li>Edit</li>
            </ul>
          </div>
          <div>
            <i className="fa fa-address-card" aria-hidden="true" />
            <span>64%</span>
          </div>
          <div>
            <span>CURRENT CHAPTER</span>
            <p>Introduction</p>
            <button type="button">UPDATE PROCESS</button>
          </div>
        </div>
      ))}
    </div>
  );
};

BookList.propTypes = { booksItem: PropTypes.arrayOf(PropTypes.object).isRequired };
export default BookList;
