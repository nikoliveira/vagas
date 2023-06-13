var data =  require("./../../fakeData");

/**
 * Update user by id and can update a part of the data too.
 * 
 * Examples:
 *
 *     updateUser(id, name, job);
 *     // => {
       // =>     id: 1,
       // =>     name: "username",
       // =>     job: "job",
       // =>     views: 0,
       // =>     features: [],
       // => }
 *
 * @param {Number} id
 * @param {Array<String> | null} features
 * @param {String | null} name
 * @param {String | null} job
 * @return {{ id: number, name: string, job: string, views: number, features: Array<String>} | null}
 * @public
 */
function updateUser(id, name, job, features){
    if(!id) throw new Error('Missing id of the user.');
    const index = data.findIndex((user) => user.id == id);

    if (index == -1) return null;

    data[index].name = name ? name : data[index].name;
    data[index].job = job ? job : data[index].job
    data[index].features = features ? features : data[index].features

    return data[index];
}

module.exports = updateUser;