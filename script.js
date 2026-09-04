let display = document.getElementById("display");

function addValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value;

        
        expression = expression.replace(/(\d+(?:\.\d+)?)%/g, "($1/100)");

        display.value = eval(expression);
    } 
    catch (error) {
        display.value = "Error";
    }
}