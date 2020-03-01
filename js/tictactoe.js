document.addEventListener("DOMContentLoaded", function() {
	/*
		Link: https://www.codewars.com/kata/525caa5c1bf619d28c000335/train/javascript
		Descripción: 
		If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

		Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

		[[0, 0, 1],
		[0, 1, 2],
		[2, 1, 0]]
		We want our function to return:

		-1 if the board is not yet finished (there are empty spots),
		1 if "X" won,
		2 if "O" won,
		0 if it's a cat's game (i.e. a draw).
		You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

		Comentarios:
		Se resolvió pero puede optimizarse, :D
	*/
	let board = [[1,2,0],[0,1,2],[0,0,1]];
	let boardX = [[1,1,1],[2,2,1],[2,1,2]];
	let boardO = [[1,1,2],[2,1,2],[1,2,2]];
	let boardE = [[1,1,2],[2,2,1],[1,0,2]];

	function isSolved(board) {
		print(board);
		//Calcular estado
		if(gana("X", board)){
			return 1;
		} else if(gana("O", board)) {
			return 2;
		} else if(board[0].includes(0) || board[1].includes(0) || board[2].includes(0)) {
			return -1;
		} else {
			return 0;
		}
	}

	function gana(item, board) {
		//Definir ganador buscado
		let g = (item == "X" ? 1 : 2);
		if((board[0][0] == g) && (board[0][1] == g) && (board[0][2] == g)) {
			return true;
		} else if((board[0][0] == g) && (board[1][1] == g) && (board[2][2] == g)) {
			return true;
		} else if((board[0][0] == g) && (board[1][0] == g) && (board[2][0] == g)) {
			return true;
		} else if((board[0][2] == g) && (board[1][2] == g) && (board[2][2] == g)) {
			return true;
		} else if((board[1][0] == g) && (board[1][1] == g) && (board[1][2] == g)) {
			return true;
		} else if((board[2][0] == g) && (board[1][1] == g) && (board[0][2] == g)) {
			return true;
		} else if((board[2][0] == g) && (board[2][1] == g) && (board[2][2] == g)) {
			return true;
		} else {
			return false;
		}
	}

	function print(board) {
		console.log("["+board[0][0]+" "+board[0][1]+" "+board[0][2]+"]");
		console.log("["+board[1][0]+" "+board[1][1]+" "+board[1][2]+"]");
		console.log("["+board[2][0]+" "+board[2][1]+" "+board[2][2]+"]");
	}

	console.log(isSolved(board));
	console.log(isSolved(boardX));
	console.log(isSolved(boardO));
	console.log(isSolved(boardE));
});