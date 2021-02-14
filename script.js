function compute() {
    //The values inputted by the user in the "Amount" and "Rate" fields are stored in these variables. 
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;

    //This conditional statment is to check if the amount value inputted is not 0 or negative.
    if (principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    };

    //The "No of Years" value is inputted as a string, the parseInt() function converts it in a integer.
    let years = parseInt(document.getElementById("years").value);

    //The current year is stored in this variable.
    let currentYear = new Date().getFullYear();

    //The number of years inputted by the user is added to the current year.
    let realYear = currentYear + years;

    //The formula to find the interest is calculated and converted to an interger for a better display.
    let interest = parseInt(principal * years * rate / 100);

    //The result of the interest calculation is displayed to the user as a detailed text.
    document.getElementById("result").innerHTML =
        `If you deposit <mark>${principal}</mark>, <br>
at an interest rate of <mark>${rate}%</mark>. <br>
You will receive an amount of <mark>${interest}</mark>, <br>
in the year <mark>${realYear}</mark>`;

};

//This function takes the rate value inputted by the user and replaces it unto the standard "10.25%" beside the slider bar.
function rangeValue() {
    let rateValue = document.getElementById("rate").value;
    document.getElementById("rangeDisplay").innerText = `${rateValue}%`;
}