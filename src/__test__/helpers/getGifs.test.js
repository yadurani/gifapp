import getGif from "../../helpers/getGift"

describe('Pruebas con getGifs Fetch', () => {
  it('Debe de traer 10 elementos', async () => {
    const gifs = await getGif('One punch');
    expect( gifs.gifs.length ).toBe(10);
  })
   
  it('Debe de traer 0 elementos', async () => {
    const gifs = await getGif('');
    expect( gifs.gifs.length ).toBe(0);
  })
})