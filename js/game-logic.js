// All code should be written in this file.

// Player One Variable
let playerOneMoveOneType;
let playerOneMoveOneValue;
let playerOneMoveTwoType;
let playerOneMoveTwoValue;
let playerOneMoveThreeType;
let playerOneMoveThreeValue;

// Player Two Variable
let playerTwoMoveOneType;
let playerTwoMoveOneValue;
let playerTwoMoveTwoType;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeType;
let playerTwoMoveThreeValue;

// setPlayerMoves Function
const setPlayerMoves = function(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue){

  // Check if Value or Move is missing
  if (moveOneType === undefined || moveOneValue === undefined || moveTwoType === undefined || moveTwoValue === undefined || moveThreeType === undefined || moveThreeValue === undefined){
    return false;
  }
  // Check if Type is valid
  if ((moveOneType !== 'rock' && moveOneType !== 'paper' && moveOneType !== 'scissors') || (moveTwoType !== 'rock' && moveTwoType !== 'paper' && moveTwoType !== 'scissors') || (moveThreeType !== 'rock' && moveThreeType !== 'paper' && moveThreeType !== 'scissors')) {
    return false;
  }
  // Check if Move is Greater than One
  if (moveOneValue < 1 || moveTwoValue < 1 || moveThreeValue < 1){
    return false;
  }
  // Check if Move Sum is less than 99
  if (moveOneValue + moveTwoValue + moveThreeValue > 99){
    return false;
  }
  // Check for Player Type
  if (player === 'Player One') {
    playerOneMoveOneType = moveOneType;
    playerOneMoveOneValue = moveOneValue;
    playerOneMoveTwoType = moveTwoType;
    playerOneMoveTwoValue = moveTwoValue;
    playerOneMoveThreeType = moveThreeType;
    playerOneMoveThreeValue = moveThreeValue;
  } else if (player === 'Player Two') {
    playerTwoMoveOneType = moveOneType;
    playerTwoMoveOneValue = moveOneValue;
    playerTwoMoveTwoType = moveTwoType;
    playerTwoMoveTwoValue = moveTwoValue;
    playerTwoMoveThreeType = moveThreeType;
    playerTwoMoveThreeValue = moveThreeValue;
  } else {
    return false;
  }
}

// getRoundWinner function
const getRoundWinner = function(round) {
  if (round === 1){
      if(playerOneMoveOneType === playerTwoMoveOneType){
        if(playerOneMoveOneValue > playerTwoMoveOneValue){
          return 'Player One';
        }else if (playerOneMoveOneValue < playerTwoMoveOneValue){
          return 'Player Two';
        }else {
          return 'Tie';
        }
      } else {
        if(playerOneMoveOneType === 'rock' && playerTwoMoveOneType === 'scissors') {
          return 'Player One';
        } else if(playerOneMoveOneType === 'paper' && playerTwoMoveOneType === 'rock') {
          return 'Player One';
        } else if(playerOneMoveOneType === 'scissors' && playerTwoMoveOneType === 'paper') {
          return 'Player One';
        } else {
          return 'Player Two';
        }
      }
  } else if (round === 2) {
    if(playerOneMoveTwoType === playerTwoMoveTwoType){
      if(playerOneMoveTwoValue > playerTwoMoveTwoValue){
        return 'Player One';
      }else if (playerOneMoveTwoValue < playerTwoMoveTwoValue){
        return 'Player Two';
      }else {
        return 'Tie';
      }
    } else {
      if(playerOneMoveTwoType === 'rock' && playerTwoMoveTwoType === 'scissors') {
        return 'Player One';
      } else if(playerOneMoveTwoType === 'paper' && playerTwoMoveTwoType === 'rock') {
        return 'Player One';
      } else if(playerOneMoveTwoType === 'scissors' && playerTwoMoveTwoType === 'paper') {
        return 'Player One';
      } else {
        return 'Player Two';
      }
    }
  } else if (round === 3) {
    if(playerOneMoveThreeType === playerTwoMoveThreeType){
      if(playerOneMoveThreeValue > playerTwoMoveThreeValue){
        return 'Player One';
      }else if (playerOneMoveThreeValue < playerTwoMoveThreeValue){
        return 'Player Two';
      }else {
        return 'Tie';
      }
    } else {
      if(playerOneMoveThreeType === 'rock' && playerTwoMoveThreeType === 'scissors') {
        return 'Player One';
      } else if(playerOneMoveThreeType === 'paper' && playerTwoMoveThreeType === 'rock') {
        return 'Player One';
      } else if(playerOneMoveThreeType === 'scissors' && playerTwoMoveThreeType === 'paper') {
        return 'Player One';
      } else {
        return 'Player Two';
      }
    }
  } else {
    return false;
  }
}
