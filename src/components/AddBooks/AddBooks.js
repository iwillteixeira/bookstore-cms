import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import { addBook } from '../../redux/books/books';

const AddBooks = (props) => {
  const [title, setTitle] = useState('');
  const [categoriesState, setCategories] = useState('');

  const dispatch = useDispatch();
  const { categories } = props;

  const inputTitle = (e) => {
    setTitle(e.target.value);
  };
  const selectCategories = (e) => {
    setCategories(e.target.value);
  };

  const submitStore = (e) => {
    e.preventDefault();
    if (title !== '' && categoriesState !== '') {
      const newBook = {
        id: v4(),
        title,
        category: categoriesState,
      };
      dispatch(addBook(newBook));
      const a = document.querySelector('form');
      a.querySelector('input[name="title"]').value = '';
    }
  };

  return (
    <div className="flex w-full py-10">

      <div className="container mx-auto">
        <hr className="py-5" />
        <h2 className="text-add font-mont font-bold text-xl mb-4 text-left">ADD NEW BOOK</h2>
        <form className="pb-8 grid lg:grid-cols-8 xl:grid-cols-5 lg:gap-6 gap-4 xl:gap-8" onSubmit={submitStore}>
          <input className="px-4 py-3 rounded lg:col-span-4 xl:col-span-3 border border-gray-200 font-mont font-normal md:text-base" type="text" name="title" placeholder="title" onChange={inputTitle} />
          <select className="bg-white px-4 py-3 rounded border border-gray-200 font-mont font-normal md:text-base lg:col-span-2 xl:col-span-1" name="select" defaultValue="" onChange={selectCategories}>
            <option value="" disabled>Category</option>
            {categories.map((option) => (
              <option key={option.id} value={option.categories}>{option.categories}</option>
            ))}
          </select>
          <button className="bg-azure text-white py-3 px-11 rounded font-robo font-bold md:text-sm hover:bg-blue-600 lg:col-span-2 xl:col-span-1" type="submit">ADD BOOK</button>
        </form>
      </div>
    </div>
  );
};

AddBooks.propTypes = { categories: PropTypes.arrayOf(PropTypes.object).isRequired };

export default AddBooks;
