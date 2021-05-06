import { useState, useEffect } from 'react';

import getGif from '../helpers/getGift';

const useFetchGift = (category) => {
  const [offset, setOffset] = useState(0)
  const [state, setstate] = useState({
    data: [],
    pagination: null,
    loading: true,
  })
  const [disableBtn, setDisabledBtn] = useState(false)

  const fetchImages = async () => {
    const response = await getGif(category, offset * 10)
    setstate(prevState => ({
      ...prevState,
      data: [ ...response.gifs, ...prevState.data ],
      pagination: response.pagination.total_count,
      offset: offset * 10,
      loading: false,
    }))
  }

  const handlePage = () => {
    if(state.offset >= state.pagination) {
      setDisabledBtn(true)
    }
    if(state.offset <= state.pagination){
      setOffset(prevState => prevState + 1)
    }
  }
  
  useEffect(() => {
    fetchImages()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, offset])

  return {state, disableBtn, handlePage}
}

export default useFetchGift
