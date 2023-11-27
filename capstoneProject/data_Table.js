import { fetchData } from './dataLoader.js';
document.addEventListener("DOMContentLoaded", async function () {
    //const data = await fetchData();
    renderDataTable();
});
const loadingIndicator = document.getElementById('loadingIndicator');
async function renderDataTable() {
    loadingIndicator.style.display='block';
    await new Promise(resolve => setTimeout(resolve, 1500));
    try{
        const data = await fetchData('MOCK_DATA.json');
    // Define the column names and corresponding data keys
    const columnNames = ["S_No", "Research_ID", "Publication_Year", "Research_area", "Disease_Focus", "Study_Type", "Citation_Count", "Impact_Factor", "Funding_Source", "Author_Count","Abstract"];
    const columnKeys = ["S_No", "Research_ID", "Publication_Year", "Research_area", "Disease_Focus", "Study_Type", "Citation_Count", "Impact_Factor", "Funding_Source", "Author_Count","Abstract"];
    //const columnKeys = ["trial_id", "disease_type", "phase", "location", "status", "funding_source", "participant_count", "outcome_successrate", "start_year", "end_year","objective","methodologies","participant_demographic","outcomes","age"];
    // Create DataTable columns dynamically
    const columns = columnNames.map((name, index) => ({ data: columnKeys[index], title: name }));
    // Initialize DataTable with options
    const dataTable = $('#data-table').DataTable({
        data: data,
        columns: columns,
        destroy: true, // Destroy existing table (if any) before initializing
    });
    loadingIndicator.style.display='none';
    }catch(error){
        console.error('Error fetching or processing data:', error);
        loadingIndicator.style.display='none';
    }
    // Optionally, add additional customization or event handling here
}