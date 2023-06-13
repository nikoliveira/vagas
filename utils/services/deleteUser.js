var data =  require("./../../fakeData");

/**
 * Delete a user by name.
 * 
 * Examples:
 *
 *     deleteUser('username');
 *     // => success | null
 *
 * @param {String} name
 * @return {'success' | null}
 * @public
 */
function deleteUser(name){
    if(!name) throw new Error('Missing name of the user.');

    const index = data.findIndex(user => user.name === name);

    if (index == -1) return null;

    delete data[index];
    return 'success';
}

module.exports = deleteUser;