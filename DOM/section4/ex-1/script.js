document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const list = document.getElementById('list');
    const items = list.getElementsByTagName('li');
  
    searchInput.addEventListener('input', function() {
      const filter = searchInput.value.trim().toLowerCase();
  
      if (filter.length > 0) {
        list.style.display = 'block';
      } else {
        list.style.display = 'none';
      }
  
      Array.from(items).forEach(function(item) {
        const itemName = item.textContent.toLowerCase();
        if (itemName.includes(filter)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
  