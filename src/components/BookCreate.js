import React, { useState } from 'react'

const BookCreate = ({ onCreate }) => {

  const [tittle, setTittle] = useState("");

  const handleChange = (event) => {
    setTittle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    onCreate(tittle);
    setTittle("")
  }
  return (
    <div className='book-create'>
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Tittle</label>
        <input value={tittle} onChange={handleChange} />
        <button className='button'>Submit</button>
      </form>
    </div>
  )
}

export default BookCreate