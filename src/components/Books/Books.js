import React from 'react';
import PropTypes from 'prop-types';
import bookItem from './Books.module.scss';

const Books = (props) => {
  const { book } = props;
  return (
    <div className={bookItem.item} key={book.id}>
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
  );
};

Books.propTypes = {
  book: PropTypes.exact({
    id: PropTypes.number,
    categories: PropTypes.string,
    author: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default Books;
