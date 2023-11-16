//Represent a chessboard as a class. Initialization is the default setting.

class Chessboard {
    constructor() {
      this.board = this.createBoard();
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
        return board;
    }
}

const myChessboard = new Chessboard();
  