var data =  require("./../../fakeData");

/**
 * Create a new user.
 * 
 * Examples:
 *
 *     createUser('username', 'job', ['update']);
 *     // => {
       // =>     id: 1,
       // =>     name: "username",
       // =>     job: "job",
       // =>     views: 0,
       // =>     features: [],
       // => }
 *
 * @param {String} name
 * @param {String} job
 * @param {Array<String>} features
 * @return {{ id: number, name: string, job: string, views: number, features: Array<String> }}
 * @public
 */
function createUser(name, job, features){
    if(!name) throw new Error('Missing name of the new user');
    if(!job) throw new Error('Missing job of the new user');
    if(!features) throw new Error('Missing features of the new user');

    const newUser = {
        id: data.length + 1,
        name,
        job,
        features,
        views: 0,
    };

    data.push(newUser);

    return newUser;
}

module.exports = createUser;