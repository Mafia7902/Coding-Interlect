const data = require('./reader.js');
const writer = require('./write.js');
const fs = require('fs') 
const distance = require('./DistanceCalc')
const shipInfo = require('./ShipInfo')

//data returned from reader
var resources = data.read();//field map initially
var Material = data.Material();
var Ship_Capacity = data.Ship_Cap();
var labs = data.labs();
var Number_ships = data.ships();
var qoutas = data.qoutas();
var coodrs = []
var currentPos = [0, 0, 0]
//console.log(Number_ships)
//console.log(`Material: ${Material}, Ship Capacity: ${Ship_Capacity}, labs: ${labs}, Number of ships: ${Number_ships}, Quotas: ${qoutas}`)

for (let i = 0; i < resources[0].length; i++) {
    var r1 = resources[0][i].split(',')
    r1.pop()
    r1.shift()
    coodrs.push(r1)
}

//console.log(coodrs);

var distTravell = []
 
var loopCount = coodrs.length
var baseDistances = allDistances(currentPos,coodrs)
var shipCount = 0

console.log(baseDistances);

while (shipCount<Number_ships) {
    // console.log(baseDistances);
    for (let i = 0; i < loopCount; i++) {

        var disCount = 0
        //console.log('current position: '+currentPos);
        //console.log(distTravell);
        distTravell = baseDistances
        
        

        indexOfSmall = 0;
        smallestTravel = Number.POSITIVE_INFINITY
        for (i = 0, l = baseDistances.length; i < l; i++) {
            smallestTravel = Math.min(smallestTravel, baseDistances[i])
        }
        indexOfSmall = baseDistances.indexOf(smallestTravel)
        currentPos = coodrs[baseDistances.indexOf(smallestTravel)]
        //

        for (let i = 0; i < distTravell.length; i++) {
            if (distTravell[i]>baseDistances[i]) {
                disCount++
            }
        }
        
        if (disCount==baseDistances.length) {
            x=loopCount
            break
        }else{
            coodrs.splice(indexOfSmall,1)
            baseDistances.splice(indexOfSmall,1)
        }
        console.log('Currently at: '+ currentPos);
        
    }
    shipCount++
    console.log("next ship added");
}


function allDistances(currentPos, travelTo) {
    distances = []
    for (let i = 0; i < travelTo.length; i++) {
        distances.push(distance(currentPos,travelTo[i]));
    }
    return distances
}