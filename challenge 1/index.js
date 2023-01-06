//prompts the user to log the grades
const prompt = require('prompt-sync')();
const grade = parseInt(prompt('Enter Marks:'))

function studentGradeGenerator(){
    //if the marks are between 100 and 79 the grade is A
    if(grade <= 100 && grade >= 79){
    console.log('A');
    };
    //if the marks are between 78 and 60 the grade is B
    if(grade <= 78 && grade >= 60){
    console.log('B');
    //if the marks are between 59 and 49 the grade is C
    } else if(grade <= 59 && grade >= 49){
        console.log('C');
        //if the marks are between 48 and 40 the grade is D
    } else if(grade <= 48 && grade >= 40){
        console.log('D');
        //if the marks are below 39 the grade is E
    } else if(grade < 39){
        console.log('E')
    }
    //if anything else is input apart from numerical values invalid input will be displayed 
    else{
        console.log('Invalid Marks')
    }
};
studentGradeGenerator();