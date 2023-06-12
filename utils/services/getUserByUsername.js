var data =  require("./../../fakeData");

/**
 * Get one user by username.
 * 
 * Examples:
 *
 *     getUserByUsername('John Doe');
 *     // => {
       // =>     id: 1,
       // =>     name: "John Doe",
       // =>     job: "Current Job",
       // =>     views: 0,
       // => }
 *
 * @param {String} name
 * @return {{ id: number, name: string, job: string, views: number  } | null}
 * @public
 */
function getUserByUsername(name){
    if(!name) throw new Error('Missing name of the user');
    const index = data.findIndex((user) => user.name === name);
    return data[index];
}

module.exports = getUserByUsername;