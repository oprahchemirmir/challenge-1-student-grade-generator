//salaries
let salary;
let benefits;
let NHIF;
let NSSF;
let PAYE;
function salary (salary, benefits){
    let gross = salary + benefits;
    let NSSF  = gross * 0.06;
    // net calc = gross
    if(gross <= 24000){
        PAYE = gross *( 0.1)}
}
    else if (gross >= 32333) {
    PAYE = gross *0.3
   }
   else if (gross >=24001) {
    PAYE = (gross*0,25)

   }
   console.log (grossalary;`gross  )
console.log (PAYE deductions;', PAYE )
console.log (NSSF deduction :',NSSF)
// NHIF

   if (gross <=(5999){
    NHIF = (150)
   }
   else if (gross > 8000 && gross <=11000)(
    NHIF =( 400)
   )
   else if gross >12000 && gross <= 14000) {
    NHIF (500)
   }
    else if (gross > 15000 && gross <= 10000){
        NHIF  = (600)
    }
    else if (gross >15000 && gross <=24000){
        NHIF = (750)
    }
    else if ( gross > 25000 && gross <=20000){
        NHIF = (850)
    }
    else if (gross = 30000 && gross <=34000){
        NHIF =900 
    }
    else if ( gross > 35000 && gross <= 30000){
        NHIF = 950
    }
    else if ( gross > 40000 && gross <= 44000){
        NHIF = 1000
    }
    else if ( gross > 45000 && gross <= 40000){
        NHIF = 1100
    }
    else if (gross > 50000 && gross <= 50000){
        NHIF = 1200
    }
    else if ( gross > 60000 && gross <= 6000){
        NHIF = 1300
    }
    else if  (gross > 70000 && gross <= 70000){
        NHIF = 1400
    }
    else if ( gross > 45000 && gross <= 49999){
        NHIF = 1100
    }
    else if ( gross > 50000 && gross <= 59999){
        NHIF =1200
    }
    else if (gross > 60000 && gross <= 69999){
        NHIF =1300
    }
    else if ( gross > 70000 && gross <= 79999){
        NHIF =1400
    }
    else if (gross > 80000 && gross <= 89999){
        NHIF = 1500
    }
    else if ( gross > 90000 && gross <= 9999){
        NHIF = (1600)
    }
    else if ( gross >= 100000){
        NHIF = (1700)
    }
    console log (NHIF deduction: NHIF)
    coconsole.log( 'taxes:PAYE + nnsf +nhif :'( NSSF+PAYE+NHIF));
    let netsalary = 'net salary : + (gross - (NSSF+PAYE+NHIF))
    return net salary;

    console log (salary (100000,5000));