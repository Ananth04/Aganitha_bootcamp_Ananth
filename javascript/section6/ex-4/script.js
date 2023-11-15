//Utilize an external NPM package (e.g., axios) in a script.
//Write a function that fetches data from a public API using the imported module and displays the result.

const axios = require('axios');
async function fetchDataFromAPI() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log('Fetched Data:');
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}
fetchDataFromAPI();
