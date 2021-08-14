let ships = [];
let Ship_Cap = 200;
function Ship(id, capacity =5000, availible = true, batch = [])
{
    this.id = id;
    this.capacity = capacity;   //if total ship capacity is 5000 for all ships, ship capacity should be (maximum_capacity)/(amount of ships) instead for each ship
    this.available = availible
    this.batch = batch;
}
//generate 200 ships
for (let i =0;i<Ship_Cap;i++)
{
    ships.push(new Ship(i));
}
console.log(ships.length);

module.exports = Ship