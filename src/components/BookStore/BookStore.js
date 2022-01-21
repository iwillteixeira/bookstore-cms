import React from 'react';
import { useSelector } from 'react-redux';
import AddBooks from '../AddBooks/AddBooks';
import BookList from '../BookList/BookList';
import books from './BookStore.module.scss';

const BookStore = () => {
  const categories = [
    { id: 1, categories: 'Horror' },
    { id: 2, categories: 'Fiction' },
    { id: 3, categories: 'Thriller' },
    { id: 4, categories: 'Dark' },
    { id: 5, categories: 'Historical' },
    { id: 6, categories: 'Romance' },
    { id: 7, categories: 'Science Fiction' },
    { id: 8, categories: 'Fantasy' },
    { id: 9, categories: 'Dystopian' },
    { id: 10, categories: 'Realist' },
  ];

  const state = useSelector((state) => state);
  const booksItem = state.booksReducer;

  return (

    <div className={books.bookWrapper}>
      <BookList booksItem={booksItem} />
      <AddBooks categories={categories} />
    </div>
  );
};

export default BookStore;
