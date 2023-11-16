//Represent a chessboard as a class. Initialization is the default setting.

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

/*class Cell {
  constructor(piece = null) {
     this.piece = piece;
  }
 
  getPieceInfo() {
     return this.piece ? this.piece.getPieceInfo() : ' ';
  }
}*/

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
      /*this.board[0][0] = new Piece('Rook', 'White');
      this.board[0][1] = new Piece('Knight', 'White');
      this.board[0][2] = new Piece('Bishop', 'White');
      this.board[0][3] = new Piece('Queen', 'White');
      this.board[0][4] = new Piece('King', 'White');
      this.board[0][5] = new Piece('Bishop', 'White');
      this.board[0][6] = new Piece('Knight', 'White');
      this.board[0][7] = new Piece('Rook', 'White');
      this.board[1] = [
        new Piece('Pawn', 'White'),
        new Piece('Pawn', 'White'),
        new Piece('Pawn', 'White'),
        new Piece('Pawn', 'White'),
        new Piece('Pawn', 'White'),
        new Piece('Pawn', 'White'),
        new Piece('Pawn', 'White'),
        new Piece('Pawn', 'White')
      ];
      this.board[7][0] = new Piece('Rook', 'Black');
      this.board[7][1] = new Piece('Knight', 'Black');
      this.board[7][2] = new Piece('Bishop', 'Black');
      this.board[7][3] = new Piece('Queen', 'Black');
      this.board[7][4] = new Piece('King', 'Black');
      this.board[7][5] = new Piece('Bishop', 'Black');
      this.board[7][6] = new Piece('Knight', 'Black');
      this.board[7][7] = new Piece('Rook', 'Black');
      this.board[6] = [
        new Piece('Pawn', 'Black'),
        new Piece('Pawn', 'Black'),
        new Piece('Pawn', 'Black'),
        new Piece('Pawn', 'Black'),
        new Piece('Pawn', 'Black'),
        new Piece('Pawn', 'Black'),
        new Piece('Pawn', 'Black'),
        new Piece('Pawn', 'Black'),
      ];*/

      
      this.board[0] = [new Piece('white', '\u265C'), new Piece('white', '\u265E'), new Piece('white', '\u265D'), new Piece('white', '\u265B'), new Piece('white', '\u265A'), new Piece('white', '\u265D'), new Piece('white', '\u265E'), new Piece('white', '\u265C')];
      //this.board[1] = [new Piece('white', '\u265F'), new Piece('white', '\u265F'), new Piece('white', '\u265F'), new Piece('white', '\u265F'), new Piece('white', '\u265F'), new Piece('white', '\u265F'), new Piece('white', '\u265F'), new Piece('white', '\u265F')];
      //this.board[6] = [new Piece('black', '\u2659'), new Piece('black', '\u2659'), new Piece('black', '\u2659'), new Piece('black', '\u2659'), new Piece('black', '\u2659'), new Piece('black', '\u2659'), new Piece('black', '\u2659'), new Piece('black', '\u2659')];
      this.board[1] = Array.from({ length: 8 }, () => new Piece('white', '\u265F'));
      this.board[6] = Array.from({ length: 8 }, () => new Piece('black', '\u2659'));
      this.board[7] = [new Piece('black', '\u2656'), new Piece('black', '\u2658'), new Piece('black', '\u2657'), new Piece('black', '\u2655'), new Piece('black', '\u2654'), new Piece('black', '\u2657'), new Piece('black', '\u2658'), new Piece('black', '\u2656')];
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
  