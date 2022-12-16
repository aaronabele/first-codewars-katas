var number = function (busStops) {
  // Good Luck!
  let sumsum = 0;

  for (let i = 0; i < busStops.length; i++) {
    sumsum += busStops[i][0];
    sumsum -= busStops[i][1];
  }
  return sumsum;
};

//Erste Lösung

var number = function (busStops) {
  // Good Luck!
  //arr = [[10,0], [3,5],[5,8]]
  let sum1 = 0;
  let sum2 = 0;
  let sumsum = 0;

  //console.log(busStops.length);
  //console.table(busStops); //shows index
  //console.log(busStops[0][0]); //entering array

  for (let i = 0; i < busStops.length; i++) {
    //console.log(busStops[i]);
    for (let j = 0; j < busStops[i].length; j++) {
      if (j === 0) {
        sum1 += busStops[i][0];
        //console.log(sum1);
      } else if (j === 1) {
        sum2 += busStops[i][1];
        //console.log(sum2);
      }
    }
  }
  sumsum = sum1 - sum2;
  return sumsum;
};
