var data =  require("./../../fakeData");

/**
 * Update user view count by username.
 * 
 * Examples:
 *
 *     getUserByUsername('John Doe');
 *     // => 1
 *
 * @param {String} name
 * @return {Number | null}
 * @public
 */
function updateUserViewCount(name){
    if(!name) throw new Error('Missing name of the user');
    const index = data.findIndex((user) => user.name === name);
    
    if(index == -1) return null

    data[index].views = data[index].views + 1;
    return data[index].views;
}

module.exports = updateUserViewCount;