var gameTable = document.getElementById("GameTable");


var originalMap;
var currentMap;


var numberOfGoals;
var boxesInPlace;
var numberOfMoves;
var playerPosition;  

var gameOver;

DrawTheMap();







//38 upp, 40 ner, 39 höger, 37 vänster

document.addEventListener("keydown", keyResponse);




function keyResponse(k) {

    //if ([37, 38, 39, 40].indexOf(k.keyCode)) { k.preventDefault();}

    if (!gameOver) {

        if (k.keyCode == 38) {
            MoveTo(-1, 0, "up");
            k.preventDefault();
        }      //Up
        else if (k.keyCode == 40) {
            MoveTo(1, 0, "down");
            k.preventDefault();
        }   //Down
        else if (k.keyCode == 37) {
            MoveTo(0, -1, "left");
            k.preventDefault();
        }   //Left
        else if (k.keyCode == 39) {
            MoveTo(0, 1, "right");
            k.preventDefault();
        }  //Right

        UpdateNumbers();
    }
}


function UpdateNumbers() {

    document.getElementById('moves').innerHTML = numberOfMoves;
    document.getElementById('boxes placed').innerHTML = boxesInPlace;

    if (boxesInPlace >= numberOfGoals) {
        document.getElementById('victory').innerHTML = "Level complete!";
        gameOver = true;
    }
    if (boxesInPlace < numberOfGoals) {
        document.getElementById('victory').innerHTML = "Move boxes!";
    }


}


function MoveTo(y, x, direction) {
    var table = document.getElementById("GameTable");  //Get a fresh copy of the table layout
    var currentCell = table.rows[playerPosition[0]].cells[playerPosition[1]];
    var nextCell = table.rows[playerPosition[0] + y].cells[playerPosition[1] + x];
    var nextNextCell = table.rows[playerPosition[0] + y + y].cells[playerPosition[1] + x + x];


    switch (nextCell.getAttribute("id")) {

        case "wall":
            //do nothing
            break;

        case "box":

            switch (nextNextCell.getAttribute("id")) {
                case "wall":
                    //do nothing            //Saving these slots in case they need to be used, and to show that they exist
                    break;

                case "box":
                    //do nothing
                    break;

                case "box_placed":
                    //do nothing
                    break;

                case "blank":

                    var box = document.createElement("img");
                    box.src = "imgs/box.gif";
                    box.width = 36;
                    box.height = 36;

                    nextNextCell.removeChild(nextNextCell.firstChild);
                    nextNextCell.appendChild(box);
                    nextNextCell.id = "box";


                    var player = document.createElement("img");
                    player.src = "imgs/player.gif";
                    player.width = 36;
                    player.height = 36;

                    nextCell.removeChild(nextCell.firstChild);
                    nextCell.appendChild(player);
                    nextCell.id = "player";


                    if (currentCell.id == "player on goal") {

                        var goal = document.createElement("img");
                        goal.src = "imgs/goal.gif";
                        goal.width = 36;
                        goal.height = 36;

                        currentCell.removeChild(currentCell.firstChild);
                        currentCell.appendChild(goal);
                        currentCell.id = "goal";
                    }
                    else {
                        var blank = document.createElement("img");
                        blank.src = "imgs/blank.gif";
                        blank.width = 36;
                        blank.height = 36;

                        currentCell.removeChild(currentCell.firstChild);
                        currentCell.appendChild(blank);
                        currentCell.id = "blank";

                    }


                    playerPosition[0] = playerPosition[0] + y;
                    playerPosition[1] = playerPosition[1] + x;
                    numberOfMoves += 1;


                    break;



                case "goal":




                    var box_placed = document.createElement("img");
                    box_placed.src = "imgs/box_placed.gif";
                    box_placed.width = 36;
                    box_placed.height = 36;

                    nextNextCell.removeChild(nextNextCell.firstChild);
                    nextNextCell.appendChild(box_placed);
                    nextNextCell.id = "box_placed";


                    var player = document.createElement("img");
                    player.src = "imgs/player.gif";
                    player.width = 36;
                    player.height = 36;

                    nextCell.removeChild(nextCell.firstChild);
                    nextCell.appendChild(player);
                    nextCell.id = "player";


                    if (currentCell.id == "player on goal") {

                        var goal = document.createElement("img");
                        goal.src = "imgs/goal.gif";
                        goal.width = 36;
                        goal.height = 36;

                        currentCell.removeChild(currentCell.firstChild);
                        currentCell.appendChild(goal);
                        currentCell.id = "goal";
                    }
                    else {
                        var blank = document.createElement("img");
                        blank.src = "imgs/blank.gif";
                        blank.width = 36;
                        blank.height = 36;

                        currentCell.removeChild(currentCell.firstChild);
                        currentCell.appendChild(blank);
                        currentCell.id = "blank";

                    }


                    playerPosition[0] = playerPosition[0] + y;
                    playerPosition[1] = playerPosition[1] + x;
                    numberOfMoves += 1;

                    boxesInPlace += 1;









                    break;



                default:

                    break;


            }


            break;



        case "box_placed":

            switch (nextNextCell.getAttribute("id")) {
                case "wall":
                    //do nothing            
                    break;

                case "box":
                    //do nothing
                    break;

                case "box_placed":
                    //do nothing
                    break;

                case "blank":

                    var box = document.createElement("img");
                    box.src = "imgs/box.gif";
                    box.width = 36;
                    box.height = 36;

                    nextNextCell.removeChild(nextNextCell.firstChild);
                    nextNextCell.appendChild(box);
                    nextNextCell.id = "box";


                    var player = document.createElement("img");
                    player.src = "imgs/player.gif";
                    player.width = 36;
                    player.height = 36;

                    nextCell.removeChild(nextCell.firstChild);
                    nextCell.appendChild(player);
                    nextCell.id = "player on goal";


                    if (currentCell.id == "player on goal") {

                        var goal = document.createElement("img");
                        goal.src = "imgs/goal.gif";
                        goal.width = 36;
                        goal.height = 36;

                        currentCell.removeChild(currentCell.firstChild);
                        currentCell.appendChild(goal);
                        currentCell.id = "goal";
                    }
                    else {
                        var blank = document.createElement("img");
                        blank.src = "imgs/blank.gif";
                        blank.width = 36;
                        blank.height = 36;

                        currentCell.removeChild(currentCell.firstChild);
                        currentCell.appendChild(blank);
                        currentCell.id = "blank";

                    }


                    playerPosition[0] = playerPosition[0] + y;
                    playerPosition[1] = playerPosition[1] + x;
                    boxesInPlace -= 1;
                    numberOfMoves += 1;

                    break;



                case "goal":




                    var box_placed = document.createElement("img");
                    box_placed.src = "imgs/box_placed.gif";
                    box_placed.width = 36;
                    box_placed.height = 36;

                    nextNextCell.removeChild(nextNextCell.firstChild);
                    nextNextCell.appendChild(box_placed);
                    nextNextCell.id = "box_placed";


                    var player = document.createElement("img");
                    player.src = "imgs/player.gif";
                    player.width = 36;
                    player.height = 36;

                    nextCell.removeChild(nextCell.firstChild);
                    nextCell.appendChild(player);
                    nextCell.id = "player on goal";


                    if (currentCell.id == "player on goal") {

                        var goal = document.createElement("img");
                        goal.src = "imgs/goal.gif";
                        goal.width = 36;
                        goal.height = 36;

                        currentCell.removeChild(currentCell.firstChild);
                        currentCell.appendChild(goal);
                        currentCell.id = "goal";
                    }
                    else {
                        var blank = document.createElement("img");
                        blank.src = "imgs/blank.gif";
                        blank.width = 36;
                        blank.height = 36;

                        currentCell.removeChild(currentCell.firstChild);
                        currentCell.appendChild(blank);
                        currentCell.id = "blank";

                    }


                    playerPosition[0] = playerPosition[0] + y;
                    playerPosition[1] = playerPosition[1] + x;
                    numberOfMoves += 1;










                    break;



                default:

                    break;


            }


            break;








        case "goal":

            var player = document.createElement("img");
            player.src = "imgs/player.gif";
            player.width = 36;
            player.height = 36;

            nextCell.removeChild(nextCell.firstChild);
            nextCell.appendChild(player);
            nextCell.id = "player on goal";




            if (currentCell.id == "player on goal") {

                var goal = document.createElement("img");
                goal.src = "imgs/goal.gif";
                goal.width = 36;
                goal.height = 36;

                currentCell.removeChild(currentCell.firstChild);
                currentCell.appendChild(goal);
                currentCell.id = "goal";
            }
            else {
                var blank = document.createElement("img");
                blank.src = "imgs/blank.gif";
                blank.width = 36;
                blank.height = 36;

                currentCell.removeChild(currentCell.firstChild);
                currentCell.appendChild(blank);
                currentCell.id = "blank";

            }



            playerPosition[0] = playerPosition[0] + y;
            playerPosition[1] = playerPosition[1] + x;
            numberOfMoves += 1;





            break;

        case "blank":


            var player = document.createElement("img");
            player.src = "imgs/player.gif";
            player.width = 36;
            player.height = 36;

            nextCell.removeChild(nextCell.firstChild);
            nextCell.appendChild(player);
            nextCell.id = "player";



            if (currentCell.id == "player on goal") {

                var goal = document.createElement("img");
                goal.src = "imgs/goal.gif";
                goal.width = 36;
                goal.height = 36;

                currentCell.removeChild(currentCell.firstChild);
                currentCell.appendChild(goal);
                currentCell.id = "goal";
            }
            else {
                var blank = document.createElement("img");
                blank.src = "imgs/blank.gif";
                blank.width = 36;
                blank.height = 36;

                currentCell.removeChild(currentCell.firstChild);
                currentCell.appendChild(blank);
                currentCell.id = "blank";

            }


            playerPosition[0] = playerPosition[0] + y;
            playerPosition[1] = playerPosition[1] + x;
            numberOfMoves += 1;


            break;


        default:
            break;
    }


}












function GetPlayerPosition() {

    for (var i = 0; i < currentMap.length; i++) {

        for (var j = 0; j < currentMap[i].length; j++) {

            if (currentMap[i][j] == 'P') {
                return [i, j];
            }


        }

    }
}

function RedrawTheMap() {
    EraseTheMap();
    DrawTheMap();
}


function EraseTheMap() {
    var tableRows = gameTable.getElementsByTagName('tr');
    var rowCount = tableRows.length;

    for (var i = 0; i < rowCount; i++) {
        gameTable.deleteRow(0);
    }

}

function DrawTheMap() {

    numberOfGoals = 0;
    boxesInPlace = 0;
    numberOfMoves = 0;
    gameOver = false;

    var randomMap = mapsArray[Math.floor(Math.random() * mapsArray.length)];

    originalMap = randomMap.mapGrid;
    currentMap = originalMap;


    for (var i = 0; i < originalMap.length; i++) {


        //create a new row
        var row = gameTable.insertRow(i);

        for (var j = 0; j < originalMap[i].length; j++) {

            //create a new cell

            var cell = row.insertCell(j);


            if (originalMap[i][j] == 'W') {

                var wall = document.createElement("img");
                wall.src = "imgs/wall.gif";
                wall.width = 36;
                wall.height = 36;



                cell.appendChild(wall);
                cell.id = "wall";
            }

            if (originalMap[i][j] == ' ') {

                var blank = document.createElement("img");
                blank.src = "imgs/blank.gif";
                blank.width = 36;
                blank.height = 36;

                cell.appendChild(blank);
                cell.id = "blank";

            }


            if (originalMap[i][j] == 'B') {

                var box = document.createElement("img");
                box.src = "imgs/box.gif";
                box.width = 36;
                box.height = 36;


                cell.appendChild(box);
                cell.id = "box";

            }

            if (originalMap[i][j] == 'G') {

                var goal = document.createElement("img");
                goal.src = "imgs/goal.gif";
                goal.width = 36;
                goal.height = 36;


                cell.appendChild(goal);
                cell.id = "goal";

                numberOfGoals += 1;

            }

            if (originalMap[i][j] == 'P') {

                var player = document.createElement("img");
                player.src = "imgs/player.gif";
                player.width = 36;
                player.height = 36;


                cell.appendChild(player);
                cell.id = "player";

            }




        }
    }



    playerPosition = GetPlayerPosition();  //Sets the player's position
    UpdateNumbers();
}
