

const salary = document.getElementById("gsalary").value;
/* let pin = document.getElementById("hnif").value;  */


const grossalary = () => {
    const salary = document.getElementById("gsalary").value;
    if (document.getElementsByTagName('input').value == "") {
        alert("Please Enter your salary amount eg.1234");
    }
    document.getElementById("gpay").innerHTML = `${salary}`;
    nssf();
    nhif();
    payee();
    tax();
    nsalary();

    /* KRA CALCULATIONS */
    function tax() {
        const salary = document.getElementById("gsalary").value;
        let tax1 = salary - nssf();
        let tax = tax1 - nhif();
        if (salary >= 1) {
            document.getElementById("taxable").innerHTML = `${tax}`;
            return `${tax}`;
        }
        else if (salary <= 0) {
            document.getElementById("taxable").innerHTML = "";
            return "";
        }
    };

    /* PAYEE CALCULATIONS */
    /* ELSE IF IMPLEMENTATION */
    function payee() {


        const insuranceRelief = nhif() * 0.15;
        const taxablePay = salary - nssf();
        const personalRelief = 2400;
        if (taxablePay >= 0 && taxablePay <= 24000) {
            let paye = ((taxablePay * 0.1) - personalRelief - insuranceRelief);
            document.getElementById("payee").innerHTML = `${paye}`;
            return paye;
        } else if (taxablePay > 24000 && taxablePay <= 32333) {
            let paye1 = ((taxablePay - 24000) * 0.25) + ((24000 * 0.1)) - personalRelief - insuranceRelief;
            document.getElementById("payee").innerHTML = `${paye1}`;
            return paye1;
        } else if (taxablePay > 32333) {
            let paye2 = ((24000 * 0.1) + (8333 * 0.25) + ((taxablePay - 32333) * 0.3) - personalRelief - insuranceRelief);
            document.getElementById("payee").innerHTML = `${paye2}`;
            return paye2;
        } else {
            document.getElementById("payee").innerHTML = "";
            return "";
        }
    };
    /* NHIF CALCULATIONS */
    function nhif() {
        const salary = document.getElementById("gsalary").value;
        if (salary >= 1 && salary <= 5999) {
            document.getElementById("nhif").innerHTML = "150";
            return 150;
        }
        else if (salary >= 6000 && salary <= 7999) {
            document.getElementById("nhif").innerHTML = "300";
            return 300;
        }
        else if (salary >= 8000 && salary <= 11999) {
            document.getElementById("nhif").innerHTML = "400";
            return 400;
        }
        else if (salary >= 12000 && salary <= 14999) {
            document.getElementById("nhif").innerHTML = "500";
            return 500;
        }
        else if (salary >= 15000 && salary <= 19999) {
            document.getElementById("nhif").innerHTML = "600";
            return 600;
        }
        else if (salary >= 20000 && salary <= 24999) {
            document.getElementById("nhif").innerHTML = "750";
            return 750;
        }
        else if (salary >= 25000 && salary <= 29999) {
            document.getElementById("nhif").innerHTML = "850";
            return 850;
        }
        else if (salary >= 30000 && salary <= 34999) {
            document.getElementById("nhif").innerHTML = "900";
            return 900;
        }
        else if (salary >= 35000 && salary <= 39999) {
            document.getElementById("nhif").innerHTML = "950";
            return 950;
        }
        else if (salary >= 40000 && salary <= 44999) {
            document.getElementById("nhif").innerHTML = "1000";
            return 1000;
        }
        else if (salary >= 45000 && salary <= 49999) {
            document.getElementById("nhif").innerHTML = "1100";
            return 1100;
        }
        else if (salary >= 50000 && salary <= 59999) {
            document.getElementById("nhif").innerHTML = "1200";
            return 1200;
        }
        else if (salary >= 60000 && salary <= 69999) {
            document.getElementById("nhif").innerHTML = "1300";
            return 1300;
        }
        else if (salary >= 70000 && salary <= 79999) {
            document.getElementById("nhif").innerHTML = "1400";
            return 1400;
        }
        else if (salary >= 80000 && salary <= 89999) {
            document.getElementById("nhif").innerHTML = "1500";
            return 1500;
        }
        else if (salary >= 90000 && salary <= 99999) {
            document.getElementById("nhif").innerHTML = "1600";
            return 1600;
        }

        else {
            document.getElementById("nhif").innerHTML = "";
            return ""
        }

    };
    /* NSSF CALCULATIONS */
    function nssf() {
        const salary = document.getElementById("gsalary").value;
        let nss = (salary / 100) * 6;
        let tier1 = 360;
        let tier2 = 720;
        let total = tier1 + tier2;
        if (salary >= 1 && salary <= 17999) {
            document.getElementById("nsf").innerHTML = `${nss}`;
            return nss;
        }
        else if (salary >= 18000) {
            document.getElementById("nsf").innerHTML = `${total}`;
            return total;
        }
        else {
            document.getElementById("nsf").innerHTML = "";
            return "";
        }

    };
//calculate the net salary//

    function nsalary() {
        const salary = document.getElementById("gsalary").value;
        let itax = tax();
        let over = itax - payee();

        if (salary >= 1) {
            document.getElementById("nsalar").innerHTML = `${over}`;
            return over;

        }
        else {
            document.getElementById("nsalar").innerHTML = "";
            return "";
        }
    };

}