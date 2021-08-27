import useFetchGift from '../../hooks/useFetchGift';
import {renderHook} from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchGif', () => {
  const category = 'One Punch'
  it('Debe de retornar el estado inicial', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGift(category))
    const { state: { data, loading } } = result.current
    await waitForNextUpdate();
    expect(data).toEqual([])
    expect(loading).toBeTruthy()
  })
  
  it('Debe de retornar un arreglo de imagenes y el loading en false', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGift(category))
    await waitForNextUpdate();
    const { state: { data, loading } } = result.current
    expect(data.length).toBe(10)
    expect(loading).toBeFalsy()
  })
} )