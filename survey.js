const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {
  rl.question('What is your favourite animal? ', (animal) => {
    rl.question('What is your favourite activity? ', (activity) => {
      rl.question('What is coolest tv-show you recently watched? ', (tv) => {
        rl.question('What is the best food eve in your opinion? ', (food) => {
          rl.question('Destination of the dream vacation? ', (vacation) => {


            console.log(`${name}'s favourite animal is ${animal}, favourite activity is ${activity}, favourite tv-show ${tv} and ${name}'s best food ever is ${food}. Vacation destination of ${name}'s dreams is ${vacation}. `);

            rl.close();
          })
        })
      })
    })
  })
  })