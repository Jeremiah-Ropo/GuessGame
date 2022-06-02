//Guess game generator.

// const userName = parseFloat(prompt('Enter name: '))
// const userNumb = parseFloat(prompt("Enter number:"))

// const userName = prompt("Enter your name: ")


//Function for generating randomly from range 1 to 2
const rangeGenerator = (start=2) => {
  let rand = Math.random() * start
  let randomWhole = Math.ceil(rand)
  return randomWhole
}


const guessRW = (computerguess, winning = "yes") => {
  
   while (winning === "yes"){
    const userNumb = parseFloat(prompt("Enter number:"))
     
    if (userNumb <= 2 && userNumb === computerguess){
      console.log(`You guess right ${computerguess} `)
      winning = prompt('Do you want to play again? ') 
      
    }
     else{
       console.log( `You guessed wrong ${ computerguess}`)
       break
     }
  }
  
}

guessRW(rangeGenerator())





