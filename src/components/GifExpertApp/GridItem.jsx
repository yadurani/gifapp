import React from 'react';
import PropTypes from 'prop-types';

const GridItem = ({ url, title }) => {
  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={url} alt={title}/>
    </div>
  )
};

GridItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default GridItem
