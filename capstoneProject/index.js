// Fetch data using dataLoader.js
import { fetchData } from './dataLoader.js';

const startSearchButton = document.getElementById('startSearch');
const searchInput = document.getElementById('search');
const displaySection = document.querySelector('.display-section');
const loadingIndicator = document.getElementById('loadingIndicator');

let initialDataLoaded = false;

function showLoadingIndicator() {
    loadingIndicator.style.display = 'block';
  }
  
  // Function to hide loading indicator and display content
  function hideLoadingIndicator() {
    loadingIndicator.style.display = 'none';
  }

  function clearDisplaySection() {
    displaySection.innerHTML = '';
  }

  function displayFilteredData(filteredData) {
    // Clear previous results
    clearDisplaySection();
  
    if (filteredData.length > 0) {
      // Render each identified object separately
      filteredData.forEach(object => {
        const objectElement = document.createElement('div');
        objectElement.classList.add('object');
        objectElement.innerHTML = `
        <h3>${object.Research_area}</h3>
        <p>Disease Focus: ${object.Disease_Focus}</p>
        <p>Study Type: ${object.Study_Type}</p>
        <p>Publication Year: ${object.Publication_Year}</p>
        <p>Citations: ${object.Citation_Count}</p>
        `;
        displaySection.appendChild(objectElement);
      });
    } else {
      displaySection.innerHTML = '<p>No results found.</p>';
    }
  }

async function filterAndDisplayData(searchTerm, selectedFilters) {
// Simulating a delay of 1500 milliseconds (1.5 seconds)
showLoadingIndicator();
await new Promise(resolve => setTimeout(resolve, 1500));
    
  try {
    // Fetch data (Replace 'MOCK_DATA.json' with the actual data source)
    const articles = await fetchData('MOCK_DATA.json');

    // Process data based on the search term
    let filteredData;
    if (searchTerm && searchTerm.trim() !== '') {
      filteredData = articles.filter(article =>
        Object.values(article).some(value =>
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      // If no search term is provided, show the most popular objects based on citation count
      filteredData = articles.sort((a, b) => b.Citation_Count - a.Citation_Count);
    }

    if (selectedFilters.length > 0) {
        filteredData = filteredData.filter(article => {
            // Check if any of the selected filters match the article's properties
            return selectedFilters.some(filter =>
                article.hasOwnProperty(filter)
            );
        });
    }

    /*if (filteredData.length > 0) {
      // Render search results
      filteredData.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('article');
        articleElement.innerHTML = `
          <h3>${article.Research_area}</h3>
          <p>Disease Focus: ${article.Disease_Focus}</p>
          <p>Study Type: ${article.Study_Type}</p>
          <p>Publication Year: ${article.Publication_Year}</p>
          <p>Citations: ${article.Citation_Count}</p>
        `;
        displaySection.appendChild(articleElement);
      });
    } else {
      displaySection.innerHTML = '<p>No results found.</p>';
    }*/
    displayFilteredData(filteredData);

    hideLoadingIndicator();
  } catch (error) {
    console.error('Error fetching or processing data:', error);
    hideLoadingIndicator();
  }
}

/*window.addEventListener('load', () => {
    if (!initialDataLoaded) {
        filterAndDisplayData('');
        initialDataLoaded = true;
    }
});*/

startSearchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    const selectedFilters = Array.from(document.querySelectorAll('.filter-checkbox:checked'))
        .map(checkbox => checkbox.value);
    filterAndDisplayData(searchTerm, selectedFilters);
});
/*searchInput.addEventListener('input', event => {
    const searchTerm = event.target.value.trim();
    filterAndDisplayData(searchTerm);
});*/