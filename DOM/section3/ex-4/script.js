function addRow() {
  var table = document.getElementById('numberTable');
  var lastRow = table.rows[table.rows.length - 1];
  var lastNumber = parseInt(lastRow.cells[0].innerText);
  var newRow = table.insertRow();
  var newCell = newRow.insertCell(0);
  var newNumber = lastNumber + 1;
  newCell.innerText = newNumber;
}

function deleteRow() {
  var table = document.getElementById('numberTable');
  if (table.rows.length > 1) {
    table.deleteRow(-1);
  }
}
  