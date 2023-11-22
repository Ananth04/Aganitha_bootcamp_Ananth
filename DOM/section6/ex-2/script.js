const countries = [
  'Afghanistan', 'Albania', 'Algeria',
  'Zimbabwe'
];
  
function displayCountries() {
  const countriesGrid = document.getElementById('countriesGrid');
  
  countries.forEach(country => {
    const countryDiv = document.createElement('div');
    countryDiv.classList.add('country');
    countryDiv.textContent = country;
    countriesGrid.appendChild(countryDiv);
  });
}
  
displayCountries();
  