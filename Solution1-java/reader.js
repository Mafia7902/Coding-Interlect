var fs = require('fs');

var spacehip_count;
var num_crates;
var num_bases;
var map_width;
var map_height;
//reading from the textfile and split by next line
var read = function (){
  var map_scanner = fs.readFileSync('1.txt').toString().split(",");

for(var i = map_scanner.length; i >= map_scanner.length; i--) {
//reading from the textfile and split by comma line
  
  var map_scanner = fs.readFileSync('1.txt').toString().split("\n");
  for(var f = map_scanner.length; f >= map_scanner.length; f--) {
  }
}
var row1 = [];
var str1 = map_scanner[0].split(",");
for(var i = 0; i < 5; i++){
	row1.push(str1[i]);//pushes arrays into new 1d array
 }
 //console.log(map_scanner)
spacehip_count = row1[0];
num_crates = row1[1]
num_bases = row1[2]
map_width = row1[3]
map_height = row1[4]

var digital_map = [];
for(var i = map_width; i >= 1;i--){
  var splitc = map_scanner[i].split(",");//separate by comma
  splitc = map_scanner[i].split('');//separate into characters

  digital_map.push(splitc);//create a 2d array and push values to new array
    
  }
return digital_map;//return these values to app module for processing
}
var ships = function(){
  return spacehip_count
}
var crates = function(){
  return num_crates
}
var bases = function(){
  return num_bases
}
var width = function(){
  return map_width
}
var height = function(){
  return map_height
}
//console.log(read());
module.exports = {read, ships, crates, bases, width, height};

