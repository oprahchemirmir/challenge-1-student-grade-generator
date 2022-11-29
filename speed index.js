
// challenge 2: Speed Detector
//function declaration!
function speedCheck(speed) {
  let speed1 = ((speed - 70) / 5);
// nested if  implementation
  if ((speed <= 70)) {
      console. log("OK");
  }
  //else if
  else if ((speed1 <= 12)) {
          console. log(`Point: ${speed1}`);
      } else {
          console. log ("License suspended");
      };
  }

  speedCheck(60)