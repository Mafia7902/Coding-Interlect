var fs = require('fs');

var Unique_Resource;
var Num_Ships;
var Ship_Capacity;
var Num_Labs;
var Material_Threshold;
var Number_Qoutas;
//reading from the textfile and split by next line
var read = function (){
  var map_scanner = fs.readFileSync('1.txt').toString().split("|");

for(var i = map_scanner.length; i >= map_scanner.length; i--) {
//reading from the textfile and split by comma line

  var map_scanner = fs.readFileSync('1.txt').toString().split("\r");
  for(var f = map_scanner.length; f >= map_scanner.length; f--) {
  }
}
var row1 = [];
var str1 = map_scanner[0].split("|");
for(var i = 0; i < 6; i++){
	row1.push(str1[i]);//pushes arrays into new 1d array
 }
Unique_Resource = row1[0];
Num_Ships = row1[1];
Ship_Capacity = row1[2];
Num_Labs = row1[3];
Material_Threshold = row1[4];
Number_Qoutas = row1[5];
// console.log(Unique_Resource)
// console.log(Num_Ships)
// console.log(Ship_Capacity)
// console.log(Num_Labs)
// console.log(Material_Threshold)
// console.log(Number_Qoutas)
var rowsort = [];

var str2 = map_scanner[1];
str2 = str2.toString().split("\n")
 str2.shift()
for(var i = 0; i < 1; i++){
	rowsort.push(str2[i].split("|"));//pushes arrays into new 1d array
 }

var row2 = []
for(var i = 0; i <rowsort.length; i++) {
  for(var j = 0; j <rowsort[i].length; j++) {
     row2.push(rowsort[i][j])

  }
}
var resources = [];
 for(var f = 2+row2.length; f < map_scanner.length; f++) {
   resources.push(map_scanner[f].slice(3).split("|"));
   
  }
  //console.log(row1.length)
return resources;//return these values to app module for processing
}
var AmountResources = function(){
  return Unique_Resource;
}
var ships = function(){
  return Num_Ships;
}
var Ship_Cap = function(){
  return Ship_Capacity
}
var labs = function(){
  return Num_Labs;
}
var Material = function(){
  return Material_Threshold
}
var qoutas = function(){
  return Number_Qoutas
}
console.log(read());
module.exports = {read, AmountResources, ships, Ship_Cap, labs, Material, qoutas};

