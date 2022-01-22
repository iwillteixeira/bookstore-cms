import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../../redux/books/books';
import bookItem from './Books.module.scss';

const Books = (props) => {
  const { book } = props;
  const dispatch = useDispatch();

  const remBook = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div className={bookItem.item} key={book.id}>
      <div>
        <h3>{book.category}</h3>
        <h2>{book.title}</h2>
        <p>GENERIC AUTHOR</p>
        <ul>
          <li>Comments</li>
          <li><button type="button" className={bookItem.remove} onClick={() => remBook(book.id)}>Remove</button></li>
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
    id: PropTypes.string,
    category: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default Books;
