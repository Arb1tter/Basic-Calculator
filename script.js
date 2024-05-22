let resultOperator = document.getElementById("resultOperator");

resultOperator.addEventListener("click", function () {

    let input1 = parseFloat(document.getElementById("input1").value);
    let input2 = parseFloat(document.getElementById("input2").value);
    let operation = document.querySelector('input[name="operator"]:checked');
    document.getElementsByClassName("alert")[0].style.display = "none";
    let screenNumber = document.getElementById("screenNumber");

    if (isNaN(input1) || isNaN(input2) || !operation) {

        document.getElementsByClassName("alert")[0].style.display = "block";
        screenNumber.innerHTML = 0;
        screenNumber.style.color = "purple";
        return;
    }

    let result = operations(input1, input2, operation.value);

    changeColor(result, screenNumber);
    screenNumber.innerHTML = result;

});

changeColor = (result, screenNumber) => {

    if(result > 0){
        screenNumber.style.color = "green";
    }
    
    else if(result == 0) {
        screenNumber.style.color = "purple";
    }
    
    else{
        screenNumber.style.color = "red";
    }
}


operations = (input1, input2, operation) => {

    switch (operation) {
        case "+":
            return input1 + input2;
            break;

        case "-":
            return input1 - input2;
            break;

        case "*":
            return input1 * input2;
            break;

        case "/":
            return input1 / input2;
            break;
    }
}







