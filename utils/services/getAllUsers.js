var data =  require("./../../fakeData");

/**
 * Get one user by username and updates the view count of the user.
 * 
 * Examples:
 *
 *     getAllUsers();
 *     // => [{
       // =>     id: 1,
       // =>     name: "John Doe",
       // =>     job: "Current Job",
       // =>     views: 0,
       // => }]
 *
 * @return {Array<{ id: number, name: string, job: string, views: number }>}
 * @public
 */

function getAllUsers(){
    return data;
}

module.exports = getAllUsers;