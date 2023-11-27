// Define a reusable function to fetch JSON data using Promise
function fetchData(jsonPath) {
    return new Promise((resolve, reject) => {
      fetch(jsonPath)
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          return response.json();
        })
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          reject(null); // Reject the Promise or handle the error as needed
        });
    });
  }
  
  // Export the function to make it reusable
  export { fetchData };
  