/*  PROBLEM 1   */
function tickUp(){
    console.log("tickUp called");

    let counterElement = document.getElementById("counter");
    let counterValue = parseInt(counterElement.textContent);

    counterValue = counterValue + 1;
    counterElement.textContent = counterValue;

    console.log(`${counterValue}`);
}
function tickDown(){
    console.log("tickDown called");

    let counterElement = document.getElementById("counter");
    let counterValue = parseInt(counterElement.textContent);

    counterValue = counterValue - 1;
    counterElement.textContent = counterValue;

    console.log(`${counterValue}`);
}



/*  PROBLEM 2   */
function runForLoop(){
    console.log("runForLoop called");

    let counterValue = document.getElementById("counter").textContent;

    let loopOutputElement = document.getElementById("forLoopResult");
    let loopOutput = "";

    for(let i=0; i <= counterValue; i++ ){
        loopOutput = loopOutput + `${i}\n`;
    }
    
    loopOutputElement.textContent = loopOutput;
}



/*  PROBLEM 3   */
function showOddNumbers(){
    console.log("showOffNumbers called");

    let counterValue = parseInt(document.getElementById("counter").textContent);

    let loopOutputElement = document.getElementById("oddNumberResult");;
    let loopOutput = "";

    for(let i=1; i <= counterValue; i++ ){
        if(i % 2 == 1){
            loopOutput = loopOutput + `${i}\n`;

        }
    }
    
    loopOutputElement.textContent = loopOutput;




    
}


/*  PROBLEM 4   */
function addMultiplesToArray(){
    console.log("addMultiplesToArray called");

    let counterValue = parseInt(document.getElementById("counter").textContent);
    let multiples = [];

    for(let i=1; i<=counterValue; i++){
        if(i % 5 == 0){
            multiples.push(i);
        }
    }

    multiples.reverse();
    console.log(multiples);
}



/*  PROBLEM 5  */
function printCarObject(){
    console.log("printCarObject called");

    let type = document.getElementById("carType").value;
    let mpg = document.getElementById("carMPG").value;
    let color = document.getElementById("carColor").value;

    let car = {
        cType: type,
        cMPG: mpg,
        cColor: color
    }

    console.log(car);
}



/*  PROBLEM 6   */
function loadCar(numCar){
    console.log("loadCar called");
    let car;

    if(numCar == 1)
        car = carObject1;
    else if(numCar == 2)
        car = carObject2;
    else if (numCar == 3)
        car = carObject3;

    document.getElementById("carType").value = car.cType;
    document.getElementById("carMPG").value = car.cMPG;
    document.getElementById("carColor").value = car.cColor;

}




/* Problem 7   */
function changeColor(numColor){
    console.log("changeColor called");

    let parElement = document.getElementById("styleParagraph");
    let color;

    if(numColor == 1)
        parElement.style.color = "red";
    else if(numColor == 2)
        parElement.style.color = "green";
    else if(numColor == 3)
        parElement.style.color = "blue";
}