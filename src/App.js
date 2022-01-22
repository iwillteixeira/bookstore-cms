import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getApiBooks } from './redux/books/books';
import Header from './components/Header/Header';
import BookStore from './components/BookStore/BookStore';
import Categories from './components/Categories/Categories';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApiBooks());
  }, []);
  return (

    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<BookStore />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </div>

  );
}

export default App;
