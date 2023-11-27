const analyzeButton = document.getElementById('analyzeButton');
const lineChartCanvas = document.getElementById('lineChart');
document.getElementById('pageTitle').addEventListener('click', function() {
    window.location.href = 'index.html';
});
const start_year = document.getElementById('startYear');
const end_year = document.getElementById('endYear');
const narrativeText = document.getElementById('narrative-text');
const ctxLine = lineChartCanvas.getContext('2d');
let lineChart;

import { fetchData } from './dataLoader.js';

function updateNarrativeText(event, chart) {
  const activePoint = chart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, false)[0];
  if (activePoint) {
    const dataset = chart.data.datasets[activePoint.datasetIndex];
    const datapoint = dataset.data[activePoint.index];
    narrativeText.textContent = `The value for this data point is ${datapoint}.`;
  } else {
    narrativeText.textContent = 'Hover over the graph to see details';
  }
}

async function analyzeResearch(start_year,end_year) {
  // Replace 'YOUR_API_KEY' with your actual API key from Europe PMC
  //const apiKey = 'Drug+Discovery';
  //const apiUrl = `https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=biopharma&resulttype=core&pageSize=200&format=json&apiKey=${apiKey}`;
  //const apiUrl = `https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=malaria&format=json`;
  const loadingIndicator = document.getElementById('loadingIndicator');
  // Show the loading indicator
  loadingIndicator.style.display = 'block';
  setTimeout(async()=> {
    try{
      //const articles = data.resultList.result;
      const articles = await fetchData('MOCK_DATA.json');
      //console.log(articles);

      const filteredData = articles.filter(
        article => article.Publication_Year >= start_year && article.Publication_Year <= end_year
      );
      const publicationCounts = {};
      filteredData.forEach(article => {
        const year = article.Publication_Year;
        publicationCounts[year] = (publicationCounts[year] || 0) + 1;
      });
      const yearLabels = Object.keys(publicationCounts).sort((a, b) => a - b);
      //console.log(yearLabels);
      //const fieldLabels = [...new Set(articles.map(article => article.Research_area))];

      if (lineChart) {
        lineChart.destroy();
      }

      // Line chart - Publication trends in different biopharma research areas
      lineChart = new Chart(ctxLine, {
        type: 'line',
        data: {
          labels: yearLabels,
          datasets: [
            {
              label: 'Number of Publications',
              data: yearLabels.map(year => publicationCounts[year] || 0),
              borderColor: 'rgba(75, 192, 192, 1)', // You can set a specific color
              backgroundColor: 'transparent',
              borderWidth: 2
            }
          ]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Number of Publications'
              }
            },
            x: {
              title: {
                display: true,
                text: 'Year'
              }
            }
          }
        }
      });
    loadingIndicator.style.display = 'none';
    lineChartCanvas.addEventListener('mousemove', (event) => {
      updateNarrativeText(event, lineChart);
    });
    
    // Reset narrative text when mouse leaves the chart
    lineChartCanvas.addEventListener('mouseout', () => {
      narrativeText.textContent = 'Hover over the graph to see details';
    });
    }
    catch(error) {
      console.error('Error fetching data:', error);
      loadingIndicator.style.display = 'none';
    };
  }, 1500);
}

analyzeButton.addEventListener('click', function() {
  const startYearValue = parseInt(start_year.value);
  const endYearValue = parseInt(end_year.value);

  // Check if startYear and endYear are valid numbers
  if (!isNaN(startYearValue) && !isNaN(endYearValue) && startYearValue <= endYearValue && startYearValue>=1980 && endYearValue<=2023) {
    analyzeResearch(startYearValue, endYearValue);
  } else {
    // Handle invalid input error
    alert('Invalid input for start year or end year.');
  }
});