import React from 'react';
import { shallow } from 'enzyme';
import GifExpertAppWrapper from '../../components/GifExpertApp/Wrapper';

describe('Probando el componente <GifExpertAppWrapper/>', () => {
  it('Debe hacer el toMatchSnapshot', () => {
    const wrapper = shallow(<GifExpertAppWrapper/>)
    expect(wrapper).toMatchSnapshot()
  })
  it('Debe de mostrar una lista de categorias', () => {
    const categories = ['One Punch', 'Dragon Ball']
    const wrapper = shallow(<GifExpertAppWrapper defaultCategories={categories}/>)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('GridList').length).toBe(categories.length)
  })
})