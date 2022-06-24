var i = 0;

function addRow(tableID) {

  var table = document.getElementById(tableID);
  var rowCount = table.rows.length;
  var row = table.insertRow(rowCount);
  //inserting values into table
  var cell1 = row.insertCell(0);
  cell1.innerHTML = document.querySelector('#artist').value;
  document.querySelector('#artist').value = '';


  var cell2 = row.insertCell(1);
  cell2.innerHTML = document.querySelector('#genre').value;
  document.querySelector('#genre').value = '';

  var cell3 = row.insertCell(2);
  var copynode = document.querySelector("#delete").cloneNode();
  //set attribute for the new button delete in the row and passed this argument to use the delete 
  copynode.setAttribute("onclick","deleteRow(this)");
  copynode.style.display = "block";
  cell3.innerHTML = copynode.outerHTML;
  
  row.id = "row" + i
  document.querySelector(tableID).append(row);
  i++;
}
function deleteRow(deleteNode) {
      try {
        //gets the closest parent <tr>
        var rowId = deleteNode.closest("tr").id;
        
        var rowIndex = document.getElementById(rowId).rowIndex;
        var table = document.getElementById('table');
        table.deleteRow(rowIndex);
          
      }catch(e) {
          alert(e);
      }
  }