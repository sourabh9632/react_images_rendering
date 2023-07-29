import React from 'react'
import  { useState } from 'react'
const BookEdit = ({book , onSubmit}) => {
  const [tittle , setTittle] = useState(book.tittle);
 
  const handleChange =(event) =>{
    setTittle(event.target.value)
  } 


  const handleSubmit = (event) =>{
    event.preventDefault();

    
    onSubmit(book.id,tittle); 
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className='book-edit'>
        <label>Tittle</label>
        <input className='input' value={tittle}  onChange={handleChange}/>
        <button className='button is-primary' >
          save
        </button>
      </form>




    </div>
  )
}

export default BookEdit