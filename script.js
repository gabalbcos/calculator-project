let firstInput = "" ;
let secondInput  = "" ;
let operation = '';

const buttonSymbol = document.querySelectorAll('.calculator__number-symbol');
const buttonNumber = document.querySelectorAll('.calculator__number-button');
const screenNumber = document.querySelector('.calculator__screen-actual')
const clearButton = document.querySelector('.ac');


buttonNumber.forEach((button) => button.addEventListener('click', writeValue));
buttonSymbol.forEach((button) => button.addEventListener('click', writeOperation));
clearButton.addEventListener('click', clearAll);

function writeOperation(){
    if(operation === "" && firstInput === '0'){
        return; 
    } else if (operation === "" && firstInput !== '') {
        operation = this.value;
        return screenNumber.innerText+= this.value;
     }else {
       calculate();
       return operation = this.value;
     }
}


function writeValue(){
  if(operation === ""){  
    if(screenNumber.innerText=== '0'){
        screenNumber.innerText="";
        screenNumber.innerText+= this.value;
        return firstInput+= this.value;
    } 
    else (screenNumber.innerText !== '0')
        screenNumber.innerText+= this.value;
        return firstInput+= this.value;
    }

    screenNumber.innerText+= this.value;
    return secondInput+= this.value;
  }




function clearAll(){
    screenNumber.innerText= "0";
}



function calculate(){
    let valueHolder = "";
    if (operation !== '' && secondInput === ''){
        return
    }
    
    switch (operation) {
        case '+':
        valueHolder = parseInt(firstInput) + parseInt(secondInput)
        firstInput = valueHolder;
        secondInput = '';
        operation = ''
        screenNumber.innerText= firstInput;
        break
    }
}