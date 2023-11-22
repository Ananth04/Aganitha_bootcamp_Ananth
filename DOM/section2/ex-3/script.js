function addItem() {
  var inputField = document.getElementById('itemInput');
  var inputValue = inputField.value.trim();
  
  if(inputValue !== '') {
    var itemList = document.getElementById('itemList');
    var listItem = document.createElement('li');
    listItem.textContent = inputValue;
  
    itemList.appendChild(listItem);
    inputField.value = '';
  }
}
  