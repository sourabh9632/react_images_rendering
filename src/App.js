

import './App.css';

import { useEffect, useState } from "react";
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';
function App() {

  const [books, setBooks] = useState([]);

  const deleteBook = (id) => {
    const updatedBook = books.filter((book) => {
      return book.id !== id;
    })

    setBooks(updatedBook)
  }


    // const fetchBooks = async () => {
    //   const response = await axios.get("http://localhost:3001/profile");
    //   setBooks(response.data);
    // };

    // useEffect(() => {
    //   fetchBooks();
    // },[]);

  const editBook =  /*async*/ (id, newTittle) => {
      // const response = await axios.put(`http://localhost:3001/profile/${id}`,{
      //   tittle:newTittle
      // });

      

    const updatedBooks = books.map((book) => {
      if (book.id == id) {
        return { ...book, 
          tittle: newTittle 
          // ...response.data
        };
      }
      return book;
    })

    setBooks(updatedBooks)
  }

  const createBook = async (tittle) => {

/*calling api */
    // const response = /*await*/ axios.post("http://localhost:3001/profile", {
    //   tittle
    // });
    // console.log(response);
    const updateBooks = [...books,
        {
      id: Math.round(Math.random() * 9999)
      , tittle
    }
    // response.data

    ];
    setBooks(updateBooks)
  };
  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookCreate onCreate={createBook} />
      <BookList onEdit={editBook} books={books} onDelete={deleteBook} />
    </div>
  );
}

export default App;
