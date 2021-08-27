import React from 'react';
import PropTypes from 'prop-types';

import getDataNoDuplicated from '../../helpers/noDuplicated';
import useFetchGift from '../../hooks/useFetchGift';

import GridItem from './GridItem';
import LoadingSkeleton from './LoadingSkeleton';

const GridList = ({ category }) => {
  const { state, handlePage, disableBtn } = useFetchGift(category)
  const { data: images, loading  } = state
  const imagesFinally = getDataNoDuplicated(images)
  const noData = imagesFinally.length === 0

  return (
    <>
      <div className="subtitle">
        <h3 className="animate__animated animate__fadeIn">{category}</h3>
        <hr/>
        {!noData && <button disabled={disableBtn} onClick={handlePage}>Ver más</button>}
      </div>
      {noData && !loading && <div className="notfound">Ups!! Not found, try again.</div>}
      <div className="card-grid">
        {loading && <LoadingSkeleton/>}
        {imagesFinally?.map(({ id, ...rest }) => <GridItem key={id} {...rest}/>)}
      </div>
    </>
  )
};

GridList.propTypes = {
  category: PropTypes.string.isRequired
}

export default GridList
