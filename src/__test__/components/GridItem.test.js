import React from 'react'
import { shallow } from 'enzyme';

import GridItem from '../../components/GifExpertApp/GridItem';

describe('Probando el componente <GridItem />', () => {
  const title = 'Un titulo'
  const url = 'https://localhost/image.png'
  const wrapper = shallow(<GridItem title={title} url={url}/>)

  it('Debe hacer toMatchSnapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('Debe de tener una imagen con una url', () => {
    const img = wrapper.find('img')

    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  })

  it('Debe tener animate__fadeIn', () => {
    const div = wrapper.find('div');
    const className = div.prop('className');

    expect(className.includes('animate__fadeIn')).toBe(true)
  })
})