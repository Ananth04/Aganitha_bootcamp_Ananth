const analyzeButton = document.getElementById('analyzeButton');
const pieChartCanvas = document.getElementById('pieChart');
const resultsSection = document.querySelector('.results-section');
document.getElementById('pageTitle').addEventListener('click', function() {
    window.location.href = 'index.html';
});
const narrativeText = document.getElementById('narrative-text');

const ctxPie = pieChartCanvas.getContext('2d');

let pieChart

import { fetchData } from './dataLoader.js';

function updateNarrativeText(event, chart) {
  const activePoint = chart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, false)[0];
  if (activePoint) {
    const dataset = chart.data.datasets[activePoint.datasetIndex];
    const value = dataset.data[activePoint.index];
    const label = chart.data.labels[activePoint.index];
    narrativeText.textContent = `The value for ${label} is ${value}.`;
  } else {
    narrativeText.textContent = 'Hover over the pie chart segments to see details';
  }
}

async function analyzeResearch() {
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

      //console.log(yearLabels);
      const fieldLabels = [...new Set(articles.map(article => article.Research_area.toLowerCase()))];
      const researchAreaInput = document.getElementById('researchTopic');
      const selectedResearchArea = researchAreaInput.value.trim().toLowerCase(); // Get the entered research area

    if (!fieldLabels.includes(selectedResearchArea)) {
      console.error('Invalid research area entered.');
      loadingIndicator.style.display='none';
      if (pieChart) {
        pieChart.destroy();
      }
      return;
    }
    const filteredArticles = articles.filter(article => article.Research_area.toLowerCase() === selectedResearchArea);
    //console.log(filteredArticles);
    const diseaseLabels = [...new Set(filteredArticles.map(article => article.Disease_Focus))];
    //console.log(diseaseLabels);
      if (pieChart) {
        pieChart.destroy();
      }

      // Pie chart - Research distribution across diseases
      pieChart = new Chart(ctxPie, {
        type: 'pie',
        data: {
          labels: diseaseLabels,
          datasets: [{
            data: diseaseLabels.map(disease => {
              const matchingData = filteredArticles.filter(article => article.Disease_Focus === disease);
              return matchingData.length;
            }),
            backgroundColor: [
              'rgba(255, 99, 132, 0.7)',
              'rgba(54, 162, 235, 0.7)',
              'rgba(255, 206, 86, 0.7)',
              'rgba(75, 192, 192, 0.7)',
              'rgba(153, 102, 255, 0.7)'
            ]
          }]
        },
        options: {
          responsive: true
        }
      });
      loadingIndicator.style.display = 'none';
      pieChartCanvas.addEventListener('mousemove', (event) => {
        updateNarrativeText(event, pieChart);
      });
      
      // Reset narrative text when mouse leaves the chart
      pieChartCanvas.addEventListener('mouseout', () => {
        narrativeText.textContent = 'Hover over the graph to see details';
      });
    }
    catch(error) {
      console.error('Error fetching data:', error);
      loadingIndicator.style.display = 'none';
    };
}, 1500);
}

analyzeButton.addEventListener('click', analyzeResearch);