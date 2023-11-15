//Expand the problem by creating a function called fetchMultipleUsers that takes an array of user IDs and 
//fetches their data concurrently using Promise.all and async/await. Log the combined result.

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
  
async function fetchMultipleUsers(userIDs) {
    try {
      const userFetchPromises = userIDs.map(async (userID) => {
        return await fetchUserData(userID);
      });
  
      const userDataArray = await Promise.all(userFetchPromises);
  
      userDataArray.forEach(userData => {
        processUserData(userData);
      });
  
      return userDataArray;
    } catch (error) {
      throw error;
    }
}
  
const userIDs = [5, 10];
  
(async () => {
    try {
      const combinedUserData = await fetchMultipleUsers(userIDs);
      console.log('Fetched user data for multiple users:', combinedUserData);
    } catch (error) {
      console.error('Error occurred:', error.message);
    }
  }
)();