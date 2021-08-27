import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'

import GridList from '../../components/GifExpertApp/GridList'
import useFetchGift from '../../hooks/useFetchGift'
jest.mock('../../hooks/useFetchGift')

describe('Probando el componente <GridList />', () => {
  const category = 'One punch';
  
  it('Debe hacer el toMatchSnapshot, componente cargando', () => {
    useFetchGift.mockReturnValue({
      state: {
        data: [],
        loading: true,
      }
    })
    
    const wrapper = shallow(<GridList category={category}/>);
    expect(wrapper).toMatchSnapshot();
  })

  it('Debe hacer el toMatchSnapshot, componente not found', () => {
    useFetchGift.mockReturnValue({
      state: {
        data: [],
        loading: false,
      }
    })
    
    const wrapper = shallow(<GridList category={category}/>);
    expect(wrapper).toMatchSnapshot();
  })

  it('Debe de mostrar items cuando se cargan imagénes useFetchGifs', () => {
    const gifs = [{
      id: 'ABC',
      url: 'https://localhost:3000/cosa.jpg',
      title: 'Cualquier cosa'
    }]
    useFetchGift.mockReturnValue({
      state: {
        data: gifs,
        loading: false,
      }
    })

    const wrapper = shallow(<GridList category={category}/>);
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('LoadingSkeleton').exists()).toBe(false)
    expect(wrapper.find('.notfound').exists()).toBe(false)
    expect(wrapper.find('GridItem').length).toBe(gifs.length)
  })
})