// Function that loads the crossword puzzle
function loadCrossword() {
    var table = document.getElementById("crossword");
    // Declare what words will be used in the crossword puzzle
    var arrWords = new Array("Chocolate", "orange", "Pear");

    var tr = table.rows[1];

    // Create for loop to loop through the word chocolate
    for (var i = 0; i < arrWords[0].length; i++) {
        var cell = tr.cells[i];
        cell.innerText = arrWords[0][i];
    }

    // Create for loop to loop through the word orange
    for (var i = 0; i < arrWords[1].length; i++) {
        var trow = table.rows[i+1];
        var cell = trow.cells[2];
        cell.innerText = arrWords[1][i];
    }

    // Create for loop to loop through the word pear
    for (var i = 0; i < arrWords[2].length; i++) {
        var trow = table.rows[i];
        var cell = trow.cells[8];
        cell.innerText = arrWords[2][i];
    }
}