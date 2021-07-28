const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const inputArray = [];

rl.question("What's your name? ", (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thanks, ${answer}! `);
  inputArray.push(answer);
  console.log(inputArray);

  rl.question("What's your favorite pass-time?", (answer) => {
    console.log(`${answer} sounds really fun! I personally like coding!`);
    inputArray.push(answer);
    rl.question(`What's your favorite music genra?`, (answer) => {
      console.log(`${answer}.. what an interesting choice!`, answer);
      inputArray.push(answer);
      rl.question("What's your favorite snack?", (answer) => {
        console.log(`I guess ${answer} is a pretty good treat. I'm more of a chips and bits kinda program!`);
        inputArray.push(answer);
        rl.question(`What's your favorite sport to play?`, (answer) => {
          console.log(`${answer}? I'm not buch of a sports person but I like counting!`);
          inputArray.push(answer);
          rl.question(`what's your favorite drink?`, (answer) => {
            console.log(`I can't believe you drink ${answer}... Gross..`);
            inputArray.push(answer);
            rl.question(`Brains or brawn?`, (answer) => {
              console.log(`${answer} really was the only sensible option..`, answer);
              inputArray.push(answer);
              console.log(inputArray);
              console.log(`Just to confirm...\n
              \rYour name is:    ${inputArray[0]}.\n
              \rYour favorit pass-time is:    ${inputArray[1]}\n
              \rYour favorite snack is:    ${inputArray[2]}\n
              \rYour favorite sport to play is:    ${inputArray[3]}\n
              \rYour favorite drink is:    ${inputArray[4]}\n
              \rAnd your choice between Brains/Brawn is:    ${inputArray[5]}?\n\n`);
              rl.question('[Yes]/[No]\n', answer => {

                if (answer === 'Yes' || answer === 'yes' || answer === 'y') {
                  console.log("Thanks! I'll create your profile now!\nGoodbye!")
                  
                } else if (answer ==='No' || answer === 'no' || answer === 'n') {
                  console.log('Sorry to hear that. Please restart the app and try again!');
                }
                rl.close
              })
            
              rl.close
            })
          
            rl.close
          })
        
          rl.close
        })
      
        rl.close
      })
    
      rl.close
    })
  
    rl.close
  })
  
  rl.close
});

