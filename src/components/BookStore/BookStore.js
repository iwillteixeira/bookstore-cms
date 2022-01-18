import React from 'react';
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

  const booksItem = [
    {
      id: 1, categories: 'Horror', title: 'David', author: 'John Doe',
    },
    {
      id: 2, categories: 'Fiction', title: 'Tristan', author: 'Maria M',
    },
    {
      id: 3, categories: 'Dark', title: 'Viper', author: 'Anastaisia',
    },
    {
      id: 4, categories: 'Romance', title: 'Daut', author: 'Lennon',
    },
    {
      id: 5, categories: 'Realisti', title: 'Tatoh', author: 'John doe',
    },
  ];

  return (

    <div className={books.bookWrapper}>
      <BookList booksItem={booksItem} />
      <AddBooks categories={categories} />
    </div>
  );
};

export default BookStore;
