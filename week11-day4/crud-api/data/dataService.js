const axios = require('axios');

const fetchPosts = () => {
    return axios.get('https://jsonplaceholder.typicode.com/posts');
    };
    


module.exports = fetchPosts();