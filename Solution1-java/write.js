const fs = require('fs') 
const distance = require('./app.js')
const data = require('./reader.js');

var write = function(){
// Data which will write in a file. 
let text = `Each line consists of the instructions for a single space ship. in this case the are ${data.ships()}. \nThe total manhatten distance travelled was: ${distance.answers()} units between all values\nThe final score is ${distance.answers()}.`
  
// Write data in 'Output.txt' . 
fs.writeFileSync('solution.txt', text, (err) => { 
      
    // In case of a error throw err. 
    if (err) throw err; 
}) 
}
