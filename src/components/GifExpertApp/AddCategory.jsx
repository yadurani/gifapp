import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ handleAdd }) => {
  const [inputValue, setInputValue] = useState('')
  
  const handleChange = (e) => setInputValue(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault()
    if(inputValue.trim().length > 2) {
      handleAdd(inputValue)
      setInputValue('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        placeholder="Search"
        value={inputValue}
        type="text"
        />
    </form>
  )
};

AddCategory.propTypes = {
  handleAdd: PropTypes.func.isRequired
}

export default AddCategory
