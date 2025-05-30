// export

export function board() {
  //define array based on config

  //CONFIG
  let boardWidth = 3;
  let boardLength = 3;
  const boardObject = makeBoard()

  function makeBoard() {
      const boardToBe = [];
      for (let index = 0; index < boardLength; index++) {
      boardToBe.push(Array(boardWidth).fill(0));
    }
   
    return boardToBe
  }
  
  console.log( boardObject)
  /**
   * @param {Array} locationXY - coordinates in[x,y] form
   * @param {number} changeTo - what value to change cell to 
   */
  function changeCell(locationXY, changeTo) {
    const [x,y] = locationXY
    boardObject[x][y] = changeTo
  }

  function changeCellNeighbors(targetCell){
    
  }

console.log(boardObject)
}
