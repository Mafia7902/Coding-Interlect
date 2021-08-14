const data = require('./reader.js');
const writer = require('./write.js');
const fs = require('fs') 

//data returned from reader
var resources = data.read();//field map initially
var Material = data.Material();
var Ship_Capacity = data.Ship_Cap();
var labs = data.labs();
var Number_ships = data.ships();
var qoutas = data.qoutas();
//console.log(Number_ships)
console.log(`Material: ${Material}, Ship Capacity: ${Ship_Capacity}, labs: ${labs}, Number of ships: ${Number_ships}, Quotas: ${qoutas}`)

// var coordinatesCrates = [];
// var Crates = [];
// var coordinatesbase = [];
// var base = [];
// //loops through 2d array
// for(var i = 0; i < thefield.length; i++){
//     for (var j= 0; j < thefield[i].length; j++){
//         //looks for crate E and its coordinates
//         if(/[A-Z]/.test(thefield[i][j])){
//             var cord = `${thefield[i][j]}, ${i},${j}`
//             coordinatesCrates.push(cord.split(","));//pushes coordinates of crates
//             Crates.push(thefield[i][j])//pushes alphabets of crates
//         }
//          //looks for base e and its coordinates
//         else if(/[a-z]/.test(thefield[i][j])){
//             var cord = `${thefield[i][j]}, ${i},${j}`
//             coordinatesbase.push(cord.split(","))//pushes coordinates of base
//             base.push(thefield[i][j])//pushes alpahbest of base
//         }
//     }
// }
// coordinatesCrates.sort();
// coordinatesbase.sort();
// // console.log(coordinatesCrates);
// // console.log(coordinatesbase);


// var mission = [];
// var missionCratesBase = []; //
// var CrateBase = [];
// var CrateBase1 = []; //

// //calculate the total distance between the two
// for(var i = 0; i <base.length; i++) {
//     for(var j = 0; j <Crates.length; j++) {
//         if(Crates[i].toLowerCase() == base[j]){
//             var missicord = `${coordinatesCrates[i]},${coordinatesbase[i]}`//matches crate coordinates and base coordinates
//             mission.push(missicord.split(","))
//             missionCratesBase.push(`,${mission[i][0]} then base ${mission[i][3]}`)
//             CrateBase.push(`${Crates[i]},${base[j]}`)
//             CrateBase1.push(`${Crates[i]},${base[j]}`)
//         }
//     }
// }
// console.log(missionCratesBase)
// console.log(mission);//before distance sorting
//  var distance = [];
//  var distanceSpace = [];
//  var distanceSpaceBack = [];
//  var vars = []
// var vars1 = []; //
// var singles = [];
// var singles1 = [];
// var additional = 0;

// var baseMission = mission




// mission = shortestStart(mission)

// mission.sort((a,b) => a[6] - b[6]);

// //after distance sorting




// function shortestStart(mission) {
//     var crateBaseDis = []
//     var homeCrateDis = []
//     var Totaldistance = []

//     for(var i = 0; i < mission.length; i++){
//         var sum = (Math.abs(mission[i][5] - mission[i][2] ) + Math.abs(mission[i][4] - mission[i][1]));
//         crateBaseDis.push(sum)
//     }
    
//     for(var i = 0; i < mission.length; i++){
//         var sum = (Math.abs(0 - mission[i][1] ) + Math.abs(0- mission[i][2]));
//         homeCrateDis.push(sum)
//     }
    
//     for (let i = 0; i < crateBaseDis.length; i++) {
//         //console.log(crateBaseDis[i]+"+"+homeCrateDis[i]);
//         Totaldistance.push(crateBaseDis[i]+homeCrateDis[i])
//         // mission[i].push(totalDis)
//     }

//     for (let i = 0; i < mission.length; i++) {
//         mission[i].push(Totaldistance[i])
        
//     }
//     return mission
// }

// var remaining = num_crates-data.ships();
// console.log(mission)
// var shippers = data.ships();
// for(var i = 0; i < mission.length; i++){
//     //sum distance between base and crates
//         var sum = (Math.abs(mission[i][5] - mission[i][2] ) + Math.abs(mission[i][4] - mission[i][1]));//manhatten formular
//         //console.log(`${i} against ${spacehip_count}`)
//         //4 shipps
//         //7 bases
//         var y = i+1
//         if(shippers>0){
//             vars.push(missionCratesBase[i].split(",").join(" spaceship "+y+" visited Crate "));
//             vars1.push(`${mission[i][0]},${mission[i][3]}`)
//             var sumS1 =(Math.abs(0 - mission[i][2] ) + Math.abs(0- mission[i][1]));//distance of spaceship to crate
//             distanceSpace.push(sumS1);
            
//             shippers-- //--
            
//         }
//         if(i==spacehip_count){//only true once... this is flawed
//            // var newz = parseInt(i)
//             console.log(i)
//             console.log(`there is ${remaining} remaining`)
//             var x=i
//             for(var z=0; z <remaining; z++){
//                 console.log(x) 
//                 singles.push(missionCratesBase[x].split(",").join(" spaceship "+data.ships()+" visited Crate "));
//                 console.log(`${mission[x][0]},${mission[x][3]}`)
//                 singles1.push(`${mission[x][0]},${mission[x][3]}`);//data for n
//                 console.log(`${mission[x][4]} : ${mission[x][5]}`)
//                 var sumS2 =(Math.abs(0- mission[x][4] ) + Math.abs(0 - mission[x][5]));//distance of spaceship to base
//                 distanceSpaceBack.push(sumS2);
//                 x++
//             }
            
//         } 
//         distance.push(Math.abs(sum));//math abs removes negatives
// }
// // console.log(distance)
// // console.log(distanceSpace)
// // console.log(distanceSpaceBack)//base
// missionCratesBase.sort();
// CrateBase1.sort();
// CrateBase.sort();

// console.log(singles);
// var TotalDistance = distance.reduce((a, b) => a + b, 0) + distanceSpace.reduce((a, b) => a + b, 0) + distanceSpaceBack.reduce((a, b) => a + b, 0 )//some of calculated distance




// //console.log(after)


// // vars1.sort();
// // singles1.sort();
// console.log(singles.join)
// var ships1 = `${vars1.join("\n")},${singles1.join()}\nEach line consists of the instructions for a single spaceship. In this case the ${data.ships()}${singles.join()}. The total Manhattan distance travelled is ${TotalDistance}.\nThe final score is ${TotalDistance}. `;
// var ships2 = `${vars1.join("\n")},${singles1.join()}\nEach line consists of the instructions for a single spaceship. In this case there are ${data.ships()} spaceships.${vars.join()}, ${singles.join()}. The total Manhattan distance travelled is ${TotalDistance}.\nThe final score is ${TotalDistance}. `;
// let text;
// if (data.ships() == 1)
// {
//     console.log(ships1);
//     text = ships1;
// }
// else{
//     console.log(ships2);
//     text = ships2;
// }
// // Write data in 'solution.txt' . 
// fs.writeFileSync('solution.txt', text, (err) => { 
      
//     // In case of a error throw err. 
//     if (err) throw err; 
// }) 