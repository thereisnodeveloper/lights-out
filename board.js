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
  let maxValue = 1;

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
   */
  function changeBoardCell(locationXY) {
    let changeTo;
    const [x, y] = locationXY;
    console.log(`x: ${x}, y:${y} cellvalue: ${boardObject[y][x]}`);
    if (boardObject[y][x] >= maxValue) {
      boardObject[y][x] = 0;
    } else {
      boardObject[y][x] += 1;
    }
    console.log('changed to:', boardObject[y][x]);
  }

  /**
   * increment targetLocationXY by each neighborOffsets
   * @param {*} targetLocationXY
   * @param {Array} neighborOffsets
   * @returns {Array}
   */
  function changeCellNeighbors(targetLocationXY, neighborOffsets) {
    //for each cell, add coordinate adjustsments i.e. [0,1] to target cell
    //location

    let neighborCoordinates = neighborOffsets.map((cell) => {
      cell[0] += targetLocationXY[0];
      cell[1] += targetLocationXY[1];
      return cell;
    });
    
    neighborCoordinates.forEach((cell) => {
      if (!isValidCoordinates(cell)) {
        console.log(`cell: ${cell}`,'not a valid cell');
        return;
      }
      changeBoardCell([cell[0], cell[1]]);
    });
  }

  function isValidCoordinates(cell) {
    //check for any coordinates outside board

    const xMax = boardObject[0].length - 1;
    const yMax = boardObject.length - 1;
    if (cell[0] > xMax || cell[0] < 0) {
      return false;
    } else if (cell[1] > yMax || cell[1] < 0) {
      return false;
    }
    return true;
  }

  //BUG: coordinates are shifting with each changeCellNeighbors()
  changeCellNeighbors([0, 1], neighborOffsets);
  console.log('boardObject:', boardObject)
  changeCellNeighbors([0, 1], neighborOffsets);

  console.log(boardObject);
}
