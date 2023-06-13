var data =  require("../../fakeData");

/**
 * Get one user by id.
 * 
 * Examples:
 *
 *     getUserById('John Doe');
 *     // => {
       // =>     id: 1,
       // =>     name: "John Doe",
       // =>     job: "Current Job",
       // =>     views: 0,
       // =>     features: [],
       // => }
 *
 * @param {Number} id
 * @return {{ id: number, name: string, job: string, views: number, features: Array<String> } | null}
 * @public
 */
function getUserById(id){
    if(!id) throw new Error('Missing id of the user');
    const user = data.find((user) => user.id == id);
    return user;
}

module.exports = getUserById;