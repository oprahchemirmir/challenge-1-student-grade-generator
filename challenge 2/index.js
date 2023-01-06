//Challenge 2: Speed Detector (Toy Problem)

//prompts user to input the speed for the results
function speedDetector(){
    const prompt = require('prompt-sync')();
    let speed = parseInt(prompt('Enter Speed:'),10)

    //speed should not go beyond zero
if(!(speed < 0)){
    //checking whether the points are gone past 12 points
    if((speed - 70)/5>12){
        //displaying licence suspended to the console
        console.log("licence suspended")
//if speed is 70 or less than 70 'ok' should be displayed
    }else if(speed <= 70){
        console.log("OK")
//check the points
    }else if(speed > 70){
        console.log("points: " + Math.round((speed - 70)/5))
    }
    //if anything else is typed apart from numerical digits invalid input should be displayed
}else{
    console.log("Invalid Input")
}
}
speedDetector();