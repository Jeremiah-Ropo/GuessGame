//Guess game generator.


// const userName = prompt("Enter your name: ")


//Function for generating randomly from range 1 to 2
const rangeGenerator = (start=2) => {
  let rand = Math.random() * start;
  let randomWhole = Math.ceil(rand);
  return randomWhole
}


// Function for the guess game.
const guessRW = (computerGuesser, winning = "yes") => {
  try{
    while (winning === "yes") {
      const userNumber = parseFloat(prompt("Enter number within the starting range: "));
      let rangeComp = [...Array(computerGuesser+1).keys()].length
  
      if (userNumber > computerGuesser && userNumber > rangeComp && rangeComp > computerGuesser){
        return console.log(`${userNumber} out of range`)
      }
      else if (isNaN(userNumber)){
        return console.log(`${userNumber}, it's a string`)
      }  
      else{
        if (userNumber === computerGuesser){
          console.log(`${computerGuesser}, you won! `)
          winning = prompt('Do you want to play again? ')
        }else{
          console.log( `${ computerGuesser}, your guess is wrong!`)
          {break}
        }        
      }
    }
  }catch(error){
    return console.log("Something is wrong somewhere!" | error.message)
  }
}

guessRW(rangeGenerator(4))
// rangeGenerator(5)




