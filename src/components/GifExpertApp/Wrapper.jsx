import React, { useState } from 'react';
import AddCategory from './AddCategory';
import GridList from './GridList';

const GifExpertAppWrapper = () => {
  const [categories, setCategories] = useState(['One punch'])

  const handleAdd = (value) => setCategories(prevState => ([ value , ...prevState ]))
  
  return (
    <div className="container">
      <h2 className="title">
        .GIFAPP.
      </h2>
      <AddCategory handleAdd={handleAdd}/>
      <ol>
        {categories?.map((category) => (
          <GridList key={category} category={category}/>
        ))}
      </ol>
      <small>
        Create by Yadu López 💛. Github <a href="https://yadurani.github.io/gifapp/" target="_blank" rel="noreferrer">GIFAPP</a>.
      </small>
    </div>
  )
};

export default GifExpertAppWrapper
