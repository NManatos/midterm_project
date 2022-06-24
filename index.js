var i = 1;
var submit_button = document.querySelector('#submit');
var artist_input = document.querySelector('#artist');
var genre_input = document.querySelector('#genre');
console.log(submit_button,artist_input,genre_input);
function addRow(tableID) {
  var tbody = document.getElementById(tableID).getElementsByTagName('tbody')[0];
  var table = document.getElementById(tableID);
  var rowCount = tbody.rows.length;
  var row = table.insertRow(rowCount);
  //inserting values into table
  var cell1 = row.insertCell(0);
  cell1.innerHTML = artist_input.value;
  artist_input.value = '';


  var cell2 = row.insertCell(1);
  cell2.innerHTML = genre_input.value;
  genre_input.value = '';

  var cell3 = row.insertCell(2);
  var copynode = document.querySelector("#delete").cloneNode();
  //set attribute for the new button delete in the row and passed this argument to use the delete 
  copynode.setAttribute("onclick","deleteRow(this)");
  copynode.style.display = "inline-block";
  cell3.innerHTML = copynode.outerHTML;
  
  row.id = "row " + i
  tbody.append(row);
  i++;
  submit_button.disabled = true;
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

  document.addEventListener('DOMContentLoaded', () => {

    // By default, submit button is disabled
    submit_button.disabled = true;

    // Enable button only if there is text in the input field
    (artist_input&& genre_input).onkeyup = () => {
        if (artist_input.value.length > 0 && genre_input.value.length > 0)
          submit_button.disabled = false;
        else
          submit_button.disabled = true;
    };
  })