var data =  require("./../../fakeData");

/**
 * Create a new user.
 * 
 * Examples:
 *
 *     createUser('username', 'job');
 *     // => {
       // =>     id: 1,
       // =>     name: "username",
       // =>     job: "job",
       // =>     views: 0,
       // => }
 *
 * @param {String} name
 * @param {String} job
 * @return {{ id: number, name: string, job: string, views: number }}
 * @public
 */
function createUser(name, job){
    if(!name) throw new Error('Missing name of the new user');
    if(!job) throw new Error('Missing job of the new user');

    const newUser = {
        index: data.length + 1,
        name,
        job,
        views: 0,
    };

    data.push(newUser);

    return newUser;
}

module.exports = createUser;