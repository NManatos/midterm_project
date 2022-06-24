var i = 0;

function addRow(tableID) {

  var table = document.getElementById(tableID);

  var rowCount = table.rows.length;
  var row = table.insertRow(rowCount);

  var cell1 = row.insertCell(0);
  cell1.innerHTML = document.querySelector('#artist').value;
  document.querySelector('#artist').value = '';


  var cell2 = row.insertCell(1);
  cell2.innerHTML = document.querySelector('#genre').value;
  document.querySelector('#genre').value = '';

  var cell3 = row.insertCell(2);
  var copynode = document.querySelector("#delete").cloneNode();
  copynode.setAttribute("onclick","deleteRow(this)");
  copynode.style.display = "block";
  cell3.innerHTML = copynode.outerHTML;
  
  row.id = "row" + i
  document.querySelector(tableID).append(row);
  i++;
}
function deleteRow(deleteNode) {
      try {
  
  var rowId = deleteNode.closest("tr").id;
  console.log('elaaa',rowId);
  var rowIndex = document.getElementById(rowId).rowIndex;
  var table = document.getElementById('table');
  table.deleteRow(rowIndex);
          
      }catch(e) {
          alert(e);
      }
  }