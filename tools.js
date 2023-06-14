const removeAccent = (data) => {
    return data.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
}

module.exports = {
  removeAccent
}