//Implement a function called fetchUserData that takes a user ID as an argument and fetches user data from an API endpoint.
//Use fetch with async/await to make the API call. Log the retrieved user data.

async function fetchUserData(userID) {
    try {
      if (isNaN(userID)) {
        throw new Error('Invalid user ID');
      }
      const apiUrl = `https://jsonplaceholder.typicode.com/users/${userID}`;
      
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
  
      const userData = await response.json();
      //console.log('Retrieved user data:', userData);
      return userData;
    } catch (error) {
      throw error;
    }
}
const userID = 10;
  
(async () => {
    try {
      const userData = await fetchUserData(userID);
      console.log('Received user data:', userData);
    } catch (error) {
      console.error('Error occurred:', error.message);
    }
})();  