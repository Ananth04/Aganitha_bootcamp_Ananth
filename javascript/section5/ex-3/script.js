//Modify the fetchUserData function to call processUserData after successfully fetching the data.
//Ensure that the processing step occurs only if the API call is successful.

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

function processUserData(userData) {
    const { username, email } = userData;
    const concatenatedInfo = `${username} - ${email}`;
    console.log('Processed user data:', concatenatedInfo);
}

const userID = 10;
  
(async () => {
    try {
      const userData = await fetchUserData(userID);
      console.log('Received user data:', userData);
      processUserData(userData);
    } catch (error) {
      console.error('Error occurred:', error.message);
    }
})();  