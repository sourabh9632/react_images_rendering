import React, { useContext } from 'react'
import BookShow from './BookShow'

const BookList = ({books,onDelete , onEdit}) => {

  const renderBookList = books.map( (book) => {
    return <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book}/>;
  });      
  return (
    <div className='book-list'>
    
      {renderBookList}
      </div>
  ) 
}

export default BookList