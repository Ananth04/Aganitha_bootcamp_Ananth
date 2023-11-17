//Represent a chessboard as a class. Initialization is the default setting. Move piece and Capture piece.

class Piece {
  constructor(color, type,status = 'Not Captured') {
    this.type = type;
    this.color = color;
    this.status = status;
  }
  updateStatus(newStatus) {
    this.status = newStatus;
  }

  getPieceInfo() {
    return `${this.type}`;
  }
}

class Chessboard {
  constructor() {
      this.board = this.createBoard();
      this.placePieces();
  }

  createBoard() {
      const board = [];
      //const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

      for (let i = 0; i < 8; i++) {
        const row = [];
        for (let j = 0; j < 8; j++) {
          //row.push({ column: columns[j], row: 8 - i });
          row.push(null);
        }
      board.push(row);
      }
      //board[8]['a'] = 'BR';
      //console.log(board);
      return board;
  }

  placePieces() {
      this.board[0] = [new Piece('white', '\u265C'), new Piece('white', '\u265E'), new Piece('white', '\u265D'), new Piece('white', '\u265B'), new Piece('white', '\u265A'), new Piece('white', '\u265D'), new Piece('white', '\u265E'), new Piece('white', '\u265C')];
      //this.board[1] = [new Piece('white', '\u265F'), new Piece('white', '\u265F'), new Piece('white', '\u265F'), new Piece('white', '\u265F'), new Piece('white', '\u265F'), new Piece('white', '\u265F'), new Piece('white', '\u265F'), new Piece('white', '\u265F')];
      //this.board[6] = [new Piece('black', '\u2659'), new Piece('black', '\u2659'), new Piece('black', '\u2659'), new Piece('black', '\u2659'), new Piece('black', '\u2659'), new Piece('black', '\u2659'), new Piece('black', '\u2659'), new Piece('black', '\u2659')];
      this.board[1] = Array.from({ length: 8 }, () => new Piece('white', '\u265F'));
      this.board[6] = Array.from({ length: 8 }, () => new Piece('black', '\u2659'));
      this.board[7] = [new Piece('black', '\u2656'), new Piece('black', '\u2658'), new Piece('black', '\u2657'), new Piece('black', '\u2655'), new Piece('black', '\u2654'), new Piece('black', '\u2657'), new Piece('black', '\u2658'), new Piece('black', '\u2656')];
  }

  movePiece(startRow, startCol, endRow, endCol) {
    const pieceToMove = this.board[startRow][startCol];
    if (!pieceToMove) {
      console.log('No piece at the starting position.');
      return;
    }
    const destinationPiece = this.board[endRow][endCol];
    if (destinationPiece) {
      console.log('Destination position is occupied.');
      return;
    }
    this.board[endRow][endCol] = pieceToMove;
    this.board[startRow][startCol] = null;
    console.log(`Moved ${pieceToMove.getPieceInfo()} from ${String.fromCharCode(97 + startCol)}${startRow + 1} to ${String.fromCharCode(97 + endCol)}${endRow + 1}`);
  }

  capturePiece(startRow, startCol, endRow, endCol) {
    const pieceToMove = this.board[startRow][startCol];
    if (!pieceToMove) {
      console.log('No piece at the starting position.');
      return;
    }
    const pieceToCapture = this.board[endRow][endCol];
    if (!pieceToCapture || pieceToCapture.color == pieceToMove.color) {
      console.log('No piece to capture at the destination.');
      return;
    }
    console.log(`Captured ${pieceToCapture.getPieceInfo()} at ${String.fromCharCode(97 + endCol)}${endRow + 1}`);
    this.board[endRow][endCol] = pieceToMove;
    this.board[startRow][startCol] = null;
  }

  printBoard() {
    console.log('Chessboard:');
    console.log(' ---------------------------------');
    for (let i = 7; i >= 0; i--) {
      let rowString = `${i + 1}|`;
      for (let j = 0; j < 8; j++) {
        const cell = this.board[i][j];
        const cellValue = cell ? cell.getPieceInfo() : ' ';
        rowString += ` ${cellValue} |`;
      }
      console.log(rowString);
      console.log(' ---------------------------------');
    }
    console.log('   a   b   c   d   e   f   g   h ');
  }
}

const myChessboard = new Chessboard();
myChessboard.printBoard();

myChessboard.movePiece(1, 4, 3, 4);
myChessboard.printBoard();

myChessboard.movePiece(6, 4, 4, 4);
myChessboard.printBoard();

//myChessboard.capturePiece(3, 4, 4, 3);
//myChessboard.printBoard();

myChessboard.movePiece(0, 6, 2, 5);
myChessboard.printBoard();

myChessboard.movePiece(7, 1, 5, 2);
myChessboard.printBoard();

myChessboard.movePiece(0, 5, 3, 2);
myChessboard.printBoard();

myChessboard.movePiece(6, 3, 5, 3);
myChessboard.printBoard();

myChessboard.movePiece(0, 1, 2, 2);
myChessboard.printBoard();

myChessboard.movePiece(7, 2, 3, 6);
myChessboard.printBoard();

myChessboard.capturePiece(2, 5, 4, 4);
myChessboard.printBoard();

myChessboard.capturePiece(3, 6, 0, 3);
myChessboard.printBoard();

myChessboard.capturePiece(3, 2, 6, 5);
myChessboard.printBoard();

console.log("Check+");

myChessboard.movePiece(7, 4, 6, 4);
myChessboard.printBoard();

myChessboard.movePiece(2,2,4,3);
myChessboard.printBoard();

console.log("Checkmate#");