var i = 1;
var submit_button = document.querySelector('#submit');
var artist_input = document.querySelector('#artist');
var genre_input = document.querySelector('#genre');
var array = [];
var tableID = 'table';
//function to be used in html sumbit button
function sumbitClick(){
  addRow(artist_input.value,genre_input.value);
}

//functions that adds row
function addRow(genre,artist) {
  var tbody = document.getElementById(tableID).getElementsByTagName('tbody')[0];
  var table = document.getElementById(tableID);
  var rowCount = tbody.rows.length;
  var row = table.insertRow(rowCount);
  //inserting values into table
  var cell1 = row.insertCell(0);
  cell1.innerHTML = artist;
  


  var cell2 = row.insertCell(1);
  cell2.innerHTML = genre;
  

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
  //saving items to local storage
  array.push({artist:artist,genre:genre,"rowId":row.id});
  localStorage.setItem('database', JSON.stringify(array));
  
  //initializing values
  artist_input.value = '';
  genre_input.value = '';
  //console.log(localStorage.getItem('database'));
}
//function that deletes row
function deleteRow(deleteNode) {
      try {
        //gets the closest parent <tr>
        var rowId = deleteNode.closest("tr").id;
        
        var rowIndex = document.getElementById(rowId).rowIndex;
        var table = document.getElementById('table');
        table.deleteRow(rowIndex);
        //
        //console.log(rowIndex);
        //delete from local storage
        array.splice(rowIndex-2,1);
        localStorage.setItem('database', JSON.stringify(array));

      }catch(e) {
          alert(e);
      }
  }

  document.addEventListener('DOMContentLoaded', () => {
    var localdata = JSON.parse(localStorage.getItem('database'));
    //local storage
    //console.log(localdata);
    if (localdata){
      localdata.forEach(element => {
        addRow(element.genre,element.artist);
        //console.log(element);
      });
    }
    // By default, submit button is disabled
    submit_button.disabled = true;

    // Enable button only if there is text in the input field
    (artist_input&& genre_input).onkeyup = () => {
        if (artist_input.value.length > 0 || genre_input.value.length > 0)
          submit_button.disabled = false;
        else
          submit_button.disabled = true;
    };
  })