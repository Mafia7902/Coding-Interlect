module.exports = (currentPos,destination)=>{
    var xCalc = (currentPos[0]-destination[0])**2
    var yCalc = (currentPos[1]-destination[1])**2
    var zCalc = (currentPos[2]-destination[2])**2
    return Math.sqrt(xCalc+yCalc+zCalc)
}