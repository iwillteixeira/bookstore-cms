import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import { addBook } from '../../redux/books/books';

const AddBooks = (props) => {
  const dispatch = useDispatch();
  const { categories } = props;

  const submitStore = (e) => {
    e.preventDefault();
    const { title, author, select } = e.target;
    if (title.value !== '' && author.value !== '' && select.value !== '') {
      const newBook = {
        id: v4(),
        title: title.value,
        author: author.value,
        categories: select.value,
      };
      title.value = '';
      author.value = '';
      dispatch(addBook(newBook));
    }
  };

  return (
    <form className="additems" onSubmit={submitStore}>
      <input type="text" name="title" placeholder="title" />
      <input type="text" name="author" placeholder="author" />
      <select name="select" defaultValue="">
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
