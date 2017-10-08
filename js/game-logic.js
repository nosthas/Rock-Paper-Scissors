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
    return;
  }
  // Check if Type is valid
  if ((moveOneType !== 'rock' && moveOneType !== 'paper' && moveOneType !== 'scissors') || (moveTwoType !== 'rock' && moveTwoType !== 'paper' && moveTwoType !== 'scissors') || (moveThreeType !== 'rock' && moveThreeType !== 'paper' && moveThreeType !== 'scissors')) {
    return;
  }
  // Check if Move is Greater than One
  if (moveOneValue < 1 || moveTwoValue < 1 || moveThreeValue < 1){
    return;
  }
  // Check if Move Sum is less than 99
  if (moveOneValue + moveTwoValue + moveThreeValue > 99){
    return;
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
};

// getRoundWinner function
const getRoundWinner = function(round) {


  // if (!playerOneMoveType || !playerOneMoveValue || !playerTwoMoveType ||
  //     !playerTwoMoveValue) {
  //   return null;
  // }

if (round && round === 1){

      if(playerOneMoveOneType === playerTwoMoveOneType){

            if(playerOneMoveOneValue > playerTwoMoveOneValue){
                return 'Player One';
            } else if (playerOneMoveOneValue < playerTwoMoveOneValue){
                return 'Player Two';
            } else {
                return 'Tie';
            }

      } else {

            if(playerOneMoveOneType === 'rock') {
                  if(playerTwoMoveOneType === 'scissors'){
                        return 'Player One';
                  } else {
                        return 'Player Two';
                  }
            } else if(playerOneMoveOneType === 'paper') {
                  if(playerTwoMoveOneType === 'rock'){
                        return 'Player One';
                  } else {
                        return 'Player Two';
                  }
            } else if(playerOneMoveOneType === 'scissors') {
                  if(playerTwoMoveOneType === 'paper'){
                        return 'Player One';
                  } else {
                        return 'Player Two';
                  }
            }
       }
  }

  else if (round && round === 2){

        if(playerOneMoveTwoType === playerTwoMoveTwoType){

              if(playerOneMoveTwoValue > playerTwoMoveTwoValue){
                  return 'Player One';
              } else if (playerOneMoveTwoValue < playerTwoMoveTwoValue){
                  return 'Player Two';
              } else {
                  return 'Tie';
              }

        } else {

              if(playerOneMoveTwoType === 'rock') {
                    if(playerTwoMoveTwoType === 'scissors'){
                          return 'Player One';
                    } else {
                          return 'Player Two';
                    }
              } else if(playerOneMoveTwoType === 'paper') {
                    if(playerTwoMoveTwoType === 'rock'){
                          return 'Player One';
                    } else {
                          return 'Player Two';
                    }
              } else if(playerOneMoveTwoType === 'scissors') {
                    if(playerTwoMoveTwoType === 'paper'){
                          return 'Player One';
                    } else {
                          return 'Player Two';
                    }
              }
         }
    }

  else  if (round && round === 3){

          if(playerOneMoveThreeType === playerTwoMoveThreeType){

                if(playerOneMoveThreeValue > playerTwoMoveThreeValue){
                    return 'Player One';
                } else if (playerOneMoveThreeValue < playerTwoMoveThreeValue){
                    return 'Player Two';
                } else {
                    return 'Tie';
                }

          } else {

                if(playerOneMoveThreeType === 'rock') {
                      if(playerTwoMoveThreeType === 'scissors'){
                            return 'Player One';
                      } else {
                            return 'Player Two';
                      }
                } else if(playerOneMoveThreeType === 'paper') {
                      if(playerTwoMoveThreeType === 'rock'){
                            return 'Player One';
                      } else {
                            return 'Player Two';
                      }
                } else if(playerOneMoveThreeType === 'scissors') {
                      if(playerTwoMoveThreeType === 'paper'){
                            return 'Player One';
                      } else {
                            return 'Player Two';
                      }
                }
           }
      }
  else if (!round || round > 3 || round < 1){
    return null;
  }

};

// getGameWinner Function
const getGameWinner = function(){

  if (!playerOneMoveOneType || !playerOneMoveTwoType ||
      !playerOneMoveThreeType || !playerOneMoveOneValue ||
      !playerOneMoveTwoValue || !playerOneMoveThreeValue ||
      !playerTwoMoveOneType || !playerTwoMoveTwoType ||
      !playerTwoMoveThreeType || !playerTwoMoveOneValue ||
      !playerTwoMoveTwoValue || !playerTwoMoveThreeValue) {
    return null;
  }

  let p1 = 0;
  let p2 = 0;

  for (let i = 1; i <= 3; i++) {
    if(getRoundWinner(i) === 'Player One'){
      p1++;
    } else if (getRoundWinner(i) === 'Player Two'){
      p2++;
    } else if (getRoundWinner(i) === 'Tie'){
      p1++;
      p2++;
    }
  }

  if (p1 > p2) {
    return 'Player One';
  } else if (p1 < p2){
    return 'Player Two';
  } else {
    return 'Tie';
  }
}

const setComputerMoves = function(){

  const moves = ['rock','paper','scissors']

   playerTwoMoveOneType = moves[Math.floor(Math.random()*3)];
   playerTwoMoveTwoType = moves[Math.floor(Math.random()*3)];
   playerTwoMoveThreeType = moves[Math.floor(Math.random()*3)];

  //console.log(playerTwoMoveOneType, playerTwoMoveTwoType, playerTwoMoveThreeType);

  playerTwoMoveOneValue = Math.floor(Math.random() *  99);
  playerTwoMoveTwoValue = Math.floor(Math.random() * (99 - playerTwoMoveOneValue));
  playerTwoMoveThreeValue = 99 - (playerTwoMoveOneValue + playerTwoMoveTwoValue);

  //console.log('Values: ' + playerTwoMoveOneValue + ', ' + playerTwoMoveTwoValue + ', '+ playerTwoMoveThreeValue);
  //console.log('Equals: ' + (playerTwoMoveOneValue + playerTwoMoveTwoValue + playerTwoMoveThreeValue));

};
