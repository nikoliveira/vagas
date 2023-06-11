import data from "./fakeData"

module.exports = function(req, res) {
  
    const name =  req.query.name;

    for(let i = 0; i < data.length;  i++) {
        if(i.name == name) {
            data[i] = null;
        }
    }

    res.send("success");

};