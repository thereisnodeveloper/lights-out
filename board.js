// export

export function board() {
  //define array based on config

  //CONFIG
  let boardWidth = 3;
  let boardLength = 3;
  let defaultCellValue = 0;
  let neighborOffsets = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ];

  const boardObject = makeBoard();

  function makeBoard() {
    const boardToBe = [];
    for (let index = 0; index < boardLength; index++) {
      boardToBe.push(Array(boardWidth).fill(defaultCellValue));
    }

    return boardToBe;
  }
  console.log(makeBoard());

  /**
   * @param {Array} locationXY - coordinates in[x,y] form
   * @param {number} changeTo - what value to change cell to
   */
  function changeBoardCell(locationXY, changeTo) {
    const [x, y] = locationXY;
    boardObject[y][x] = changeTo;
  }

  /**
   * increment targetLocationXY by each neighborOffsets
   * @param {*} targetLocationXY
   * @param {Array} neighborOffsets
   * @returns {Array}
   */
  function changeCellNeighbors(targetLocationXY, neighborOffsets, changeTo) {
    //for each cell, add coordinate adjustsments i.e. [0,1] to target cell location
    let neighborCoordinates = neighborOffsets.map((cell) => {
      cell[0] += targetLocationXY[0];
      cell[1] += targetLocationXY[1];
      return cell;
    });

    neighborCoordinates.forEach((cell) => {
      if(!isValidCoordinates(cell)) return
      changeBoardCell([cell[0], cell[1]], changeTo);
    });
  }
  changeCellNeighbors([0, 1], neighborOffsets, 2);

  function isValidCoordinates(cell) {
    //coordinates outside board
    //less than 0
    //larger than largest coordinate in the board
    //x
    
    const xMax = boardObject[0].length - 1;
    //y
    const yMax = boardObject.length - 1;

    if (cell[0] > xMax || cell[0] < 0) {
      return false
    } else if (cell[1] > yMax || cell[1] < 0) {
      return false
    }
    return true
  }

  console.log(boardObject);
}
