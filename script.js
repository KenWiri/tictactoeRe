let i = 0;
let playerX = true;


function checkWinner () {
	let grid1 = document.getElementById('grid1'),
	    grid2 = document.getElementById('grid2'),
	    grid3 = document.getElementById('grid3'),
		grid4 = document.getElementById('grid4'),
		grid5 = document.getElementById('grid5'),
		grid6 = document.getElementById('grid6'),
		grid7 = document.getElementById('grid7'),
		grid8 = document.getElementById('grid8'),
		grid9 = document.getElementById('grid9');

		const grids = document.getElementsByClassName("grid");

	//winning conditions
	//Player X won
	//Write For Loop for this****
	if (grid1.innerHTML === "X" && grid2.innerHTML ===  "X" && grid3.innerHTML === "X") {
		alert("Player X Won!"); //grid 123 
		} 
	else if (grid4.innerHTML === "X" && grid5.innerHTML === "X" && grid6.innerHTML === "X") {
		alert ("Player X Won!");
	}
	else if (grid1.innerHTML === "X" && grid4.innerHTML === "X" && grid7.innerHTML === "X") {
		alert("Player X Won!");//winning on grid 147
		}
	else if (grid3.innerHTML === "X" && grid6.innerHTML === "X" && grid9.innerHTML === "X") {
		alert("Player X Won!");//winning on grid 369
		}
	else if (grid1.innerHTML === "X" && grid5.innerHTML === "X" && grid9.innerHTML === "X") {
		alert("Player X Won!");//winning on grid 159 diagonal line
		}
	else if (grid3.innerHTML === "X" && grid5.innerHTML === "X" && grid7.innerHTML === "X"){
		alert("Player X Won!");//winning on grid 357 diagonal line
		}
	else if (grid2.innerHTML === "X" && grid5.innerHTML === "X" && grid8.innerHTML === "X"){
		alert("Player X Won!");//winning on grid 258
		}
	else if (grid7.innerHTML === "X" && grid8.innerHTML === "X" && grid9.innerHTML === "X"){
		alert("Player X Won!");//winning on grid 789
		}

		//Player O Won!
	else if (grid1.innerHTML === "O" && grid2.innerHTML === "O" && grid3.innerHTML === "O") {
		alert("Player O Won!"); //grid 123 
		} 
	else if (grid4.innerHTML === "O" && grid5.innerHTML === "O" && grid6.innerHTML === "O") {
		alert("Player O Won!"); //winning on grid 456
		}
	else if (grid1.innerHTML === "O" && grid4.innerHTML === "O" && grid7.innerHTML === "O") {
		alert("Player O Won!");//winning on grid 147
		}
	else if (grid3.innerHTML === "O" && grid6.innerHTML === "O" && grid9.innerHTML === "O") {
		alert("Player O Won!");//winning on grid 369
		}
	else if (grid1.innerHTML === "O" && grid5.innerHTML === "O" && grid9.innerHTML === "O") {
		alert("Player O Won!");//winning on grid 159 diagonal line
		}
	else if (grid3.innerHTML === "O" && grid5.innerHTML === "O" && grid7.innerHTML === "O"){
		alert("Player O Won!");//winning on grid 357 diagonal line
		}
	else if (grid2.innerHTML === "O" && grid5.innerHTML === "O" && grid8.innerHTML === "O"){
		alert("Player O Won!");//winning on grid 258 diagonal line
		}
	else if (grid7.innerHTML === "O" && grid8.innerHTML === "O" && grid9.innerHTML === "O"){
		alert("Player O Won!");//winning on grid 357 diagonal line
		}
	else {
		// all boxes are populated
		let hasBlank = false;
		for(let i = 0; i <grids.length; i++){
		
			if (grids[i].innerHTML === "") {
				hasBlank = true;
			}
		}

		// check hasBlank
		if (hasBlank == false){
			alert ("it's a tie");
		}
	}
}
	// else if (grid1.innerHTML && grid2.innerHTML && grid3.innerHTML && grid4.innerHTML && grid5.innerHTML && grid6.innerHTML && grid7.innerHTML &&
	// 	grid8.innerHTML && grid9.innerHTML !== "") {
	// 	alert("It's a tie!")
	// }






//Clickable box


for(let i = 0; i < document.getElementsByClassName("grid").length; i++){
	const grids = document.getElementsByClassName("grid")[i];
	grids.onclick = function(event){
		const target = event.target
		console.log(target)
		if (grids.innerHTML === "X" || grids.innerHTML === "O") {
        return;
    }
		if (playerX) {
			target.innerHTML = 'X';
			target.style.fontSize="75px";
			target.style.textAlign="center";
			playerX = !playerX;

		}
		else if(playerX==false){
			target.innerHTML = 'O';
			target.style.fontSize="75px";
			target.style.textAlign="center";
			playerX = !playerX;
		}
		checkWinner()
	}
}		

const playAgain = document.getElementById("play-again");
playAgain.onclick = function (){
    window.location.reload(true);
}
// to reset game
const resetGame = document.getElementById("reset-game");
resetGame.onclick = function (){
    window.location.reload(true);
}