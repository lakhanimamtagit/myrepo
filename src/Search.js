import React, { useState } from 'react';

function SearchForm({textSearch}) {
    const[text, setText] = useState('');
    const handleSubmit =(e) => {
    e.preventDefault();
    textSearch(text);
    }
  return (
    <div>
      <h1>Search</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='science' onChange={(e)=>(setText(e.target.value))}/>
        <button type="submit">Search</button>
      </form>

    </div>
  );
}

export default SearchForm;
