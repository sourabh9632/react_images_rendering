import React, { useState } from 'react'
import BookEdit from "../components/BookEdit"

const BookShow = ({ book, onDelete, onEdit }) => {

  const [edit, setEdit] = useState(false);

  const handleClick = () => {
    onDelete(book.id);
  }

  const handleEdit = ((id,newTittle) => {
    setEdit(!edit);
    onEdit(id,newTittle)
  })


  const handleSubmit = () =>{
    setEdit(false);
  }

  let content = <h3>{book.tittle}</h3>
  if (edit) {
    content = <BookEdit onSubmit={handleSubmit} onEdit={onEdit} book={book} />
  }


  return (
    <div className='book-show'>
      <img alt='books'
      src={`https://picsum.photos/seed/${book.id}/300/200`}
      
      
      />
      <div>{content}</div>
      <div className='actions'>
        <button className='edit' onClick={handleEdit}>
          edit
        </button>
        <button className='delete' onClick={handleClick}>
          delete
        </button>
      </div>

    </div>
  )
}

export default BookShow