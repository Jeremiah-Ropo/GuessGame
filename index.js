//Guess game generator.

// const userName = parseFloat(prompt('Enter name: '))
const userNumb = parseFloat(prompt("Enter number:"))

//Function for generating randomly from range 1 to 2
const rangeGenerator = (start=2) => {
  let rand = Math.random() * start
  let randomWhole = Math.ceil(rand)

  return randomWhole
}

const guessRW = (computerguess, userNumb) => {
  for (let incre = userNumb; incre <=2; incre++){
    
    if (userNumb <= 2 && userNumb === computerguess){
      console.log(`You guess right ${computerguess} `)
      guessRW(computerguess, userNumb)
      
    }
   return console.log( `You guessed wrong ${ computerguess}`) 
  }
  
}

guessRW(rangeGenerator(), userNumb)





