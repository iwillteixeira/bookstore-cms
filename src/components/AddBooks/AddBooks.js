import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import { addBook } from '../../redux/books/books';

const AddBooks = (props) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [categoriesState, setCategories] = useState('');

  const dispatch = useDispatch();
  const { categories } = props;

  const inputTitle = (e) => {
    setTitle(e.target.value);
  };
  const inputAuthor = (e) => {
    setAuthor(e.target.value);
  };
  const selectCategories = (e) => {
    setCategories(e.target.value);
  };

  const submitStore = (e) => {
    e.preventDefault();
    if (title !== '' && author !== '' && categoriesState !== '') {
      const newBook = {
        id: v4(),
        title,
        author,
        categories: categoriesState,
      };
      dispatch(addBook(newBook));
      const a = document.querySelector('form');
      a.querySelector('input[name="title"]').value = '';
      a.querySelector('input[name="author"]').value = '';
    }
  };

  return (
    <form className="additems" onSubmit={submitStore}>
      <input type="text" name="title" placeholder="title" onChange={inputTitle} />
      <input type="text" name="author" placeholder="author" onChange={inputAuthor} />
      <select name="select" defaultValue="" onChange={selectCategories}>
        <option value="" disabled>Category</option>
        {categories.map((option) => (
          <option key={option.id} value={option.categories}>{option.categories}</option>
        ))}
      </select>
      <button type="submit">ADD BOOK</button>
    </form>
  );
};

AddBooks.propTypes = { categories: PropTypes.arrayOf(PropTypes.object).isRequired };

export default AddBooks;
