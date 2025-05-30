// export

export function makeBoard() {
  //define array based on config

  //CONFIG
  let boardWidth = 3;
  let boardLength = 3;

  const boardArray = [];
  for (let index = 0; index < boardLength; index++) {
    boardArray.push(Array(boardWidth).fill(0));
  }
  console.log(boardArray);
}
