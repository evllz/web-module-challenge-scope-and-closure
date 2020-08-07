// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *    A: The `count` variable scope changes, first it's in a function scope and after that it's in a global scope.
 * 2. Which of the two uses a closure? How can you tell?
 *    A: The first one, you can tell by looking into the variables that uses are not global scope.
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *    A: couter1 is better when all the process is going to be done in the same function and you want to protect your code from other functions. counter2 it will only be useful if the variable is going to be
 *    re-used later along the code.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  let inningScore = [];
  for (i = 0; i <= 8; i++){
  score = {
    home : Math.floor(Math.random()*3),
    away : Math.floor(Math.random()*3),
  }
    inningScore.push(score);
  }
  return inningScore;
}

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore (callback){
  let home = 0;
  let away = 0;
  let inningScore = callback;
  for (i = 0; i <= (callback.length-1); i++){
    home = home + callback[i].home;
    away = away + callback[i].away;
  }
  let finalScore={home,away,inningScore};
  return finalScore;
}

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


function scoreboard(getInningScore,inning,TotalInnings) {

  for (i = 0; i <= (TotalInnings-1); i++) {
    if (i == 0){
      console.log(`${i+1}st inning: ${getInningScore.inningScore[i].home} - ${getInningScore.inningScore[i].away} `);
    }
    else if (i == 1){
      console.log(`${i+1}nd inning: ${getInningScore.inningScore[i].home} - ${getInningScore.inningScore[i].away} `);
    }
    else if (i == 2){
      console.log(`${i+1}rd inning: ${getInningScore.inningScore[i].home} - ${getInningScore.inningScore[i].away} `);
    }
    else {
      console.log(`${i+1}th inning: ${getInningScore.inningScore[i].home} - ${getInningScore.inningScore[i].away} `);
    }
  }
  console.log(`Final Socre: ${getInningScore.home} - ${getInningScore.away}`)
}
scoreboard(finalScore(inning()),inning(),9);




