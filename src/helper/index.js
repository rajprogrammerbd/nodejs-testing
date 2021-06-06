const axios = require('axios');

function gettingImage() {
    return new Promise(async (resolve, reject) => {
        await axios.get("https://jsonplaceholder.typicode.com/photos").then(obj => resolve(obj.data)).catch(err => reject(err.message));
    });
}

module.exports.gettingImage = gettingImage;