const removeSpecialCharacters = (text) => {

    const newText = text && text.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase().trim();

    return newText;
};

module.exports = {
    removeSpecialCharacters,
};