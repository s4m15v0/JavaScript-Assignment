// 1.(feet to mile)

function feetToMile(feet){
    const mile = feet / 5280;     
    return mile;
}
var result = feetToMile(1);
console.log(result, "Mile");



// 2.(woodCalculator)

function woodCalculator(chair, table, bed) {
    let totalWoodAmount = 0;
    if (chair < 0 || table < 0 || bed < 0) {
      console.log(
        "you cannot make your furniture by put negative value. give positive value and try again"
      );
    } else {
      return (totalWoodAmount = chair * 1 + table * 3 + bed * 5);
    }
  }
  
  let woodAmount = woodCalculator(10, 3, 5);
  console.log(`Amount of wood require is =  ${woodAmount} cubic feet`);


// 3.(brickCalculator)

  function brickCalculator(floor) {
    let feet = 0;
    if (floor <= 10) {
        feet += floor * 15;                         
    }
    else if (floor > 10 && floor <= 20) {
        floor -= 10;
        feet += 10 * 15 + floor * 12;               
    }
    else if (floor > 20) {
        floor -= 20;
        feet += 10 * 15 + 10 * 12 + floor * 10;     
    }
    const bricksNeeded = feet * 1000;               
    return bricksNeeded;
}
var output = brickCalculator(19);
console.log("Total bricks needed for your building is:",output);


// 4.(tinyFriend)

function tinyFriend(friendName){
    let shortest = friendName[0];
    for (i = 0; i < friendName.length; i++){
        let nextName = friendName[i];
        if (nextName.length < shortest.length){
            shortest = nextName;
        }
    }
    return shortest;
}
var output = tinyFriend(["Nazmur", "Moin", "Abdullah", "Mustakim", "Mim", "Shahreen"]);
console.log("The shortest name of the list is:", output)


// 





