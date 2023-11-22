// script.js
document.addEventListener('DOMContentLoaded', function() {
    const autocompleteInput = document.getElementById('autocomplete');
    const autocompleteResults = document.getElementById('autocomplete-results');
  
    // Sample predefined list of suggestions
    const suggestions = ['Apple', 'Banana', 'Orange', 'Grapes', 'Strawberry', 'Watermelon', 'Mango', 'Pineapple'];
  
    autocompleteInput.addEventListener('input', function() {
      const inputText = autocompleteInput.value.toLowerCase();
      const matchingSuggestions = suggestions.filter(suggestion =>
        suggestion.toLowerCase().startsWith(inputText)
      );
  
      displaySuggestions(matchingSuggestions);
    });
  
    autocompleteInput.addEventListener('focusout', function() {
      // Hide suggestions when the input loses focus
      autocompleteResults.style.display = 'none';
    });
  
    function displaySuggestions(suggestionsList) {
      autocompleteResults.innerHTML = '';
  
      if (suggestionsList.length > 0) {
        suggestionsList.forEach(suggestion => {
          const suggestionElement = document.createElement('div');
          suggestionElement.classList.add('autocomplete-item');
          suggestionElement.textContent = suggestion;
          suggestionElement.addEventListener('click', function() {
            autocompleteInput.value = suggestion;
            autocompleteResults.style.display = 'none';
          });
          autocompleteResults.appendChild(suggestionElement);
        });
  
        autocompleteResults.style.display = 'block';
      } else {
        autocompleteResults.style.display = 'none';
      }
    }
  });
  