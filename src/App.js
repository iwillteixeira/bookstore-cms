import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import BookStore from './components/BookStore/BookStore';
import Categories from './components/Categories/Categories';
import './App.css';

function App() {
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
