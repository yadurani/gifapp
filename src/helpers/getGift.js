const getGif = async ( category, page ) => {
  const URL_API = 'http://api.giphy.com/v1/gifs/search?q='
  const API_KEY = '9A6jp0e4admbMZUm8bRFJ9VwZiW9r8R6'
  const URL_PROXY = 'https://api.allorigins.win/raw?url='
  const url = `${URL_PROXY}${URL_API}${encodeURI(category)}&limit=10&offset=${page}&api_key=${API_KEY}`
  const response = await fetch(url)
  const { data, pagination } = await response.json()
  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium.url
  }))
  return {gifs, pagination}
}

export default getGif