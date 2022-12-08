const prompt = require('prompt-sync')();
const grade = parseInt(prompt('Enter:'))
function paye (){
    let salaryOne = parseInt(document.getElementById("input").value)
    let S1 = salaryOne * .1
    let S2= salaryOne * .25
    let S3 = salaryOne * .3
     if (salaryOne <=24000){
         document.getElementById("output").innerHTML = parseFloat(S1).toFixed(2)
         return  parseFloat(S1).toFixed(2)
     }
     else if (salaryOne>=24001 && salaryOne <=32333){
         document.getElementById("output").innerHTML =parseFloat|(S2)
         return parseFloat|(S2)
     }
     else if (salaryOne >= 32334){
         document.getElementById("output").innerHTML = parseFloat(S3).toFixed(2)
         return parseFloat(S3).toFixed(2)
 }
 }
 // NHIF decuction
 function NhifCalc() {
     let salaryOne = parseInt(document.getElementById("input").value)
     if(salaryOne<5999){
         document.getElementById("output").innerHTML = 'NHIF Deduction is Ksh. 150'
     }
     else if(salaryOne >= 6000 && salaryOne <= 7999){
         document.getElementById("output").innerHTML = 'NHIF Deduction is Ksh. 300'
     }
     else if(salaryOne >= 8000 && salaryOne <= 11999){
         document.getElementById("output").innerHTML = 'NHIF Deduction is Ksh. 400'
     }
     else if(salaryOne >= 12000 && salaryOne <= 14999){
         document.getElementById("output").innerHTML = 'NHIF Deduction is Ksh. 500'
     }
     else if(salaryOne >= 15000 && salaryOne <= 19999){
         document.getElementById("output").innerHTML = 'NHIF Deduction is Ksh. 600'
     }
     else if(salaryOne >= 20000 && salaryOne <= 24999){
         document.getElementById("output").innerHTML = 'NHIF Deduction is Ksh. 750'
     }
     else if(salaryOne >= 25000 && salaryOne <= 29999){
         document.getElementById("output").innerHTML = 'NHIF Deduction is Ksh. 850'
     }
     else if(salaryOne >= 30000 && salaryOne <= 34999){
         document.getElementById("output").innerHTML = 'NHIF Deduction is Ksh. 900'
     }
     else if(salaryOne >= 35000 && salaryOne <= 39999){
         document.getElementById("output").innerHTML = 'NHIF Deduction is Ksh. 950'
     }
     else if(salaryOne >= 40000 && salaryOne <= 44999){
         document.getElementById("output").innerHTML = 'NHIF Deduction is Ksh. 1000'
     }
     else if(salaryOne >= 45000 && salaryOne <= 49999){
         document.getElementById("output").innerHTML = 'NHIF Deduction is Ksh. 1100'
     }
     else if(salaryOne >= 50000 && salaryOne <=  59999){
         document.getElementById("output").innerHTML = 'NHIF Deduction is Ksh. 1200'
     }
     else if(salaryOne >= 60000 && salaryOne <= 69999){
         document.getElementById("output").innerHTML = 'NHIF Deduction is Ksh. 1300'
     }
     else if(salaryOne >= 70000 && salaryOne <= 79999){
         document.getElementById("output").innerHTML = 'NHIF Deduction is Ksh. 1400'
     }
     else if(salaryOne >= 80000 && salaryOne <= 89999){
         document.getElementById("output").innerHTML = 'NHIF Deduction is Ksh. 1500'
     }
     else if(salaryOne >= 90000 && salaryOne <= 99999){
         document.getElementById("output").innerHTML = 'NHIF Deduction is Ksh. 1600'
     }
     else if(salaryOne >= 100000){
         document.getElementById("output").innerHTML = 'NHIF Deduction is Ksh. 1700'
     }
 }
 // NSSF contribution as per old rates due to ongoing litigation some employers continue to use the old rates.
 function NssfCal(){
     let salaryOne = parseInt(document.getElementById("input").value)
     if(salaryOne>=1){
         document.getElementById("output").innerHTML = 'NHIF Deduction is Ksh. 400'
     }
 }
 let NhifBycalc =()=>{
     let salaryOne = parseInt(document.getElementById("input").value)
     if(salaryOne<5999){
         document.getElementById("output").innerHTML = parseFloat(150 ).toFixed(2)
         return parseFloat(150 ).toFixed(2)
     }
     else if(salaryOne >= 6000 && salaryOne <= 7999){
         document.getElementById("output").innerHTML = parseFloat(300 ).toFixed(2)
         return parseFloat(300 ).toFixed(2)
     }
     else if(salaryOne >= 8000 && salaryOne <= 11999){
         document.getElementById("output").innerHTML = parseFloat(400 ).toFixed(2)
         return parseFloat(400 ).toFixed(2)
     }
     else if(salaryOne >= 12000 && salaryOne <= 14999){
         document.getElementById("output").innerHTML = parseFloat(500 ).toFixed(2)
         return parseFloat(500 ).toFixed(2)
     }
     else if(salaryOne >= 15000 && salaryOne <= 19999){
         document.getElementById("output").innerHTML = parseFloat(600 ).toFixed(2)
         return parseFloat(600 ).toFixed(2)
     }
     else if(salaryOne >= 20000 && salaryOne <= 24999){
         document.getElementById("output").innerHTML = parseFloat(750 ).toFixed(2)
         return parseFloat(750 ).toFixed(2)
     }
     else if(salaryOne >= 25000 && salaryOne <= 29999){
         document.getElementById("output").innerHTML = parseFloat(850 ).toFixed(2)
         return parseFloat(850 ).toFixed(2)
     }
     else if(salaryOne >= 30000 && salaryOne <= 34999){
         document.getElementById("output").innerHTML = parseFloat(900 ).toFixed(2)
         return  parseFloat(900).toFixed(2)
     }
     else if(salaryOne >= 35000 && salaryOne <= 39999){
         document.getElementById("output").innerHTML = parseFloat(950 ).toFixed(2)
         return parseFloat(950 ).toFixed(2)
     }
     else if(salaryOne >= 40000 && salaryOne <= 44999){
         document.getElementById("output").innerHTML = parseFloat(1000).toFixed(2)
         return parseFloat(1000).toFixed(2)
     }
     else if(salaryOne >= 45000 && salaryOne <= 49999){
         document.getElementById("output").innerHTML = parseFloat(1100 ).toFixed(2)
         return parseFloat(1100 ).toFixed(2)
     }
     else if(salaryOne >= 50000 && salaryOne <=  59999){
         document.getElementById("output").innerHTML = parseFloat(1200 ).toFixed(2)
         return  parseFloat(200 ).toFixed(2)
     }
     else if(salaryOne >= 60000 && salaryOne <= 69999){
         document.getElementById("output").innerHTML = parseFloat(1300 ).toFixed(2)
         return parseFloat(1300 ).toFixed(2)
     }
     else if(salaryOne >= 70000 && salaryOne <= 79999){
         document.getElementById("output").innerHTML = parseFloat(1400 ).toFixed(2)
         return parseFloat(1400 ).toFixed(2)
     }
     else if(salaryOne >= 80000 && salaryOne <= 89999){
         document.getElementById("output").innerHTML = parseFloat(1500 ).toFixed(2)
         return parseFloat(1500 ).toFixed(2)
     }
     else if(salaryOne >= 90000 && salaryOne <= 99999){
         document.getElementById("output").innerHTML = parseFloat(1600 ).toFixed(2)
         return parseFloat(1600 ).toFixed(2)
     }
 }
 // calculates the total deduction and return amount remain.
 function deduction(){
     // let salaryOne = parseInt(document.getElementById("input").value)
     const deduction = parseInt(paye()) +parseInt(NhifBycalc())  + 400
     console.log("========payee=====",paye())
     console.log("========nhif=====",NhifBycalc())
     document.getElementById("output").innerHTML = (deduction)
 }