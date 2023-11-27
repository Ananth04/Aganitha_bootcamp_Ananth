//const analyzeButton = document.getElementById('analyzeButton');
const barChartCanvas = document.getElementById('barChart');
document.getElementById('pageTitle').addEventListener('click', function() {
    window.location.href = 'index.html';
});
const narrativeText = document.getElementById('narrative-text');
const ctxBar = barChartCanvas.getContext('2d');
let barChart;

import { fetchData } from './dataLoader.js';

function updateNarrativeText(event, chart) {
  const activePoint = chart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, false)[0];
  if (activePoint) {
    const dataset = chart.data.datasets[activePoint.datasetIndex];
    const value = dataset.data[activePoint.index];
    const label = chart.data.labels[activePoint.index];
    narrativeText.textContent = `The value for ${label} is ${value}.`;
  } else {
    narrativeText.textContent = 'Hover over the bar chart bars to see details';
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

      //const yearLabels = articles.map(article => article.Publication_Year);
      //yearLabels.sort(function(a, b){return a - b});
      //console.log(yearLabels);
      const fieldLabels = [...new Set(articles.map(article => article.Research_area))];
      //const diseaseLabels = [...new Set(articles.map(article => article.Disease_Focus))];

      const citationData = fieldLabels.map(field => {
        const fieldData = articles.filter(article => article.Research_area === field);
        const countCitation = fieldData.reduce((sum, article) => sum + article.Citation_Count, 0);
        return countCitation;
      });

      const impactData = fieldLabels.map(field => {
        const fieldData = articles.filter(article => article.Research_area === field);
        const counti = fieldData.reduce((sum, article) => sum + article.Impact_Factor, 0)/fieldData.length;
        return Math.round(counti);
      });

      
      if (barChart) {
        barChart.destroy();
      }

      // Bar chart - Average citation count comparison in different biopharma fields
      barChart = new Chart(ctxBar, {
        type: 'bar',
        data: {
          labels: fieldLabels,
          datasets: [{
            label: 'Citation Count',
            data: citationData,
            backgroundColor: [
              'rgba(255, 99, 132, 0.7)',
              'rgba(54, 162, 235, 0.7)',
              'rgba(255, 206, 86, 0.7)'
            ],
            borderWidth: 1
          }/*,{
            label: 'Impact Factor',
            data: impactData,
            backgroundColor: [
              'rgba(55, 99, 132, 0.7)',
              'rgba(154, 162, 235, 0.7)',
              'rgba(155, 206, 86, 0.7)'
            ],
            borderWidth: 1
          }*/
        ]
        },
        options: {
          responsive: true,
          indexAxis: 'y',
          plugins: {
            title: {
              display: true,
              text: 'Comparative Metrics Across Fields',
              font: { size: 18 }
            }
          },
          scales: {
            x: {
              stacked: true,
              title: {
                display: true,
                text: 'Metrics'
              }
            },
            y: {
              stacked: true,
              title: {
                display: true,
                text: 'Fields'
              }
            }
          }
        }
      
      });
      loadingIndicator.style.display = 'none';
      barChartCanvas.addEventListener('mousemove', (event) => {
        updateNarrativeText(event, barChart);
      });
      
      // Reset narrative text when mouse leaves the chart
      barChartCanvas.addEventListener('mouseout', () => {
        narrativeText.textContent = 'Hover over the graph to see details';
      });
    }
    catch(error) {
      console.error('Error fetching data:', error);
      loadingIndicator.style.display = 'none';
    };
}, 1500);
}

window.addEventListener('load', analyzeResearch);