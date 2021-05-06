const getDataNoDuplicated = (data) => {
  return [...new Set(data.map(a => a.id))].map(id => {
    return data.find(a => a.id === id)
  })
}
export default getDataNoDuplicated