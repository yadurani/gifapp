import React from 'react';

import { shallow } from 'enzyme';

import AddCategory from '../../components/GifExpertApp/AddCategory';

describe('Probar el componente <AddCategory />', () => {
  const handleAdd = jest.fn()
  let wrapper = shallow(<AddCategory handleAdd={handleAdd}/>);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory handleAdd={handleAdd}/>);
  })

  it('Debe contener el snapchot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('Debe de cambiar la caja de texto', () => {
    const value = 'Hola Mundo'
    wrapper.find('input').simulate('change', { target: { value }});
    expect(wrapper.find('input').prop('value')).toBe(value)
  })

  it('No debe de postear la informacion con submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault(){} });
    expect(handleAdd).not.toHaveBeenCalled();
  })

  it('Debe de llamar el handleAdd, y limpiar la caja de texto', () => {
    const value = 'Hola Mundo'

    wrapper.find('input').simulate('change', { target: { value } });

    wrapper.find('form').simulate('submit', { preventDefault(){} });

    expect(handleAdd).toHaveBeenCalled();
    expect(handleAdd).toHaveBeenCalledTimes(1);
    expect(handleAdd).toHaveBeenCalledWith( expect.any(String) );
    // expect(handleAdd).toHaveBeenCalledWith( expect.any(Function) );
    
    expect(wrapper.find('input').prop('value')).toBe('')

  })
});