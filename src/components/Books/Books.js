import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../../redux/books/books';

const Books = (props) => {
  const { book } = props;
  const dispatch = useDispatch();

  const remBook = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div className="bg-white px-7 py-7 rounded mb-4" key={book.id}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 sm:gap-8 lg:gap-8">
        <div className="description col-span-1 lg:col-span-3 text-left">
          <p className="category text-title opacity-50 font-mont font-bold md:text-sm capitalize">{book.category}</p>
          <p className="title text-title font-robo font-bold text-xl md:text-2xl">{book.title}</p>
          <p className="text-link font-robo font-light md:text-sm mb-4">GENERIC AUTHOR</p>
          <button type="button" className="text-link font-robo font-light text-sm pr-2 lg:pr-4 hover:text-blue-900">Comments</button>
          <button type="button" className="text-link font-robo font-light text-sm pr-2 pl-2 lg:pr-4 lg:pl-4 border-r border-l border-gray-200 hover:text-blue-900" onClick={() => remBook(book.id)}>Remove</button>
          <button type="button" className="text-link font-robo font-light text-sm pl-2 lg:pl-4 hover:text-blue-900">Edit</button>

        </div>
        <div className="hidden lg:flex progress col-span-1 lg:col-span-2 lg:pr-6 xl:p-0 lg:border-r border-gray-200 justify-center items-center">
          <div className="wrapper">
            <div className="arc arc_start" />
            <div className="arc arc_end" />
          </div>
          <div>
            <p className="text-title md:text-3xl font-mont font-normal">15%</p>
            <p className="text-title md:text-sm opacity-50 font-mont font-normal">Completed</p>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-2 text-left">
          <p className="text-title opacity-50 font-robo font-light md:text-sm mb-2">CURRENT CHAPTER</p>
          <p className="text-title font-robo font-light md:text-base  mb-4 lg:mb-7">Chapter 1</p>
          <button type="button" className="bg-azure text-white py-2 px-8 font-robo font-light  text-xs md:text-sm rounded hover:bg-blue-600">UPDATE PROGRESS</button>
        </div>

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
