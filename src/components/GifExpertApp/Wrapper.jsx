import React, { useState } from 'react';
import AddCategory from './AddCategory';
import GridList from './GridList';

const GifExpertAppWrapper = ({ defaultCategories = []}) => {
  // const [categories, setCategories] = useState(['One punch'])
  const [categories, setCategories] = useState(defaultCategories)

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
        Create by Yadu López 💛. Github <a href="https://github.com/yadurani/gifapp" target="_blank" rel="noreferrer">GIFAPP</a>.
      </small>
    </div>
  )
};

export default GifExpertAppWrapper
