import React from 'react'
import * as BooksAPI from './BooksAPI';
import './App.css'
import MyRead from "./components/MyRead/MyRead.js";
const BooksApp =()=> {
    return (
        <div className="app">
            <MyRead
                bookApi={BooksAPI}
            />
        </div>
    );
};

export default BooksApp
