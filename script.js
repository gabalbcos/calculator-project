let firstInput = "" ;
let secondInput  = "" ;
let operation = '';

const buttonSymbol = document.querySelectorAll('.calculator__number-symbol');
const buttonNumber = document.querySelectorAll('.calculator__number-button');
const screenNumber = document.querySelector('.calculator__screen-actual');
const resultNumber = document.querySelector('.calculator__screen-result');
const clearButton = document.querySelector('.ac');
const equalButton = document.querySelector('.equal');
const percentButton = document.querySelector('.percentual');
const eraseButton = document.querySelector('.erase');

buttonNumber.forEach((button) => button.addEventListener('click', writeValue));
buttonSymbol.forEach((button) => button.addEventListener('click', writeOperation));

equalButton.addEventListener('click', calculate);
clearButton.addEventListener('click', clearAll);
percentButton.addEventListener('click', percentual);
eraseButton.addEventListener('click', erase);

function writeOperation(){
    if(operation === "" && firstInput === '0'  ){
        return; 
    }else if (operation === "" && firstInput !== ''){
        operation = this.value;
        return screenNumber.innerText+= this.value;
     }else {
       calculate();
       return operation = this.value;
     }
}




function writeValue(){
  if(operation === "" ){  
    if(screenNumber.innerText === 0){

        firstInput+= this.value;
        return screenNumber.innerText = firstInput;
    } 
    else (screenNumber.innerText !== 0)
         firstInput+= this.value;
        return screenNumber.innerText = firstInput;
         
    }

    screenNumber.innerText+= this.value;
    return secondInput+= this.value;

}


function clearAll(){
    screenNumber.innerText= "0";
    resultNumber.innerText= "0";
    firstInput = "" ;
    secondInput  = "" ;
    operation = '';
}



function calculate(){
    let valueHolder = "";
    if (operation !== '' && secondInput === ''){
        return
    }else if(Number.isInteger(+firstInput)){
    
    switch (operation) {
        case '+':
        writeResult();
        valueHolder = parseInt(firstInput) + parseInt(secondInput)
        firstInput = valueHolder;
        secondInput = '';
        operation = ''
        screenNumber.innerText= firstInput;
        break

        case '-':
            writeResult();
            valueHolder = parseInt(firstInput) - parseInt(secondInput)
            firstInput = valueHolder;
            secondInput = '';
            operation = ''
            screenNumber.innerText= firstInput;
            break
            
        case '/':
            writeResult();
            valueHolder = parseInt(firstInput) / parseInt(secondInput)
            firstInput = valueHolder;
            secondInput = '';

            operation = ''
            screenNumber.innerText= firstInput;
            break

           case '*':
            writeResult();
            valueHolder = parseInt(firstInput) * parseInt(secondInput);
            firstInput = valueHolder;
            secondInput = '';
            operation = ''
            screenNumber.innerText= firstInput;
            break   
                
            case 'percent':
                writeResult();
                valueHolder =  parseFloat(firstInput).toFixed(2)/100;
                firstInput = valueHolder;
                secondInput = '';
                screenNumber.innerText= firstInput;
                break    
            case 'e':
                valueHolder = parseInt(firstInput) ** parseInt(secondInput);
                firstInput = valueHolder;
                secondInput = '';
                operation = ''
                screenNumber.innerText= firstInput;                         
        }} else     switch (operation) {
            case '+':
            writeResult();
            valueHolder = parseFloat(firstInput) + parseFloat(secondInput)
            firstInput = valueHolder;
            secondInput = '';
            operation = ''
            screenNumber.innerText= firstInput.toFixed(2);
            break
    
            case '-':
                writeResult();
                valueHolder = parseFloat(firstInput) - parseFloat(secondInput)
                firstInput = valueHolder;
                secondInput = '';
                operation = ''
                screenNumber.innerText= firstInput.toFixed(2);
                break
                
            case '/':
                writeResult();
                valueHolder = parseFloat(firstInput) / parseFloat(secondInput)
                firstInput = valueHolder;
                secondInput = '';
    
                operation = ''
                screenNumber.innerText= firstInput.toFixed(2);
                break
    
               case '*':
                writeResult();
                valueHolder = parseFloat(firstInput) * parseFloat(secondInput);
                firstInput = valueHolder;
                secondInput = '';
                operation = ''
                screenNumber.innerText= firstInput.toFixed(2);
                break   
                    
                case 'percent':
                    writeResult();
                    valueHolder =  parseFloat(firstInput).toFixed(2)/100;
                    firstInput = valueHolder;
                    secondInput = '';
                    screenNumber.innerText= firstInput.toFixed(2);
                    break    
                case 'e':
                    valueHolder = parseFloat(firstInput) ** parseFloat(secondInput);
                    firstInput = valueHolder;
                    secondInput = '';
                    operation = ''
                    screenNumber.innerText= firstInput.toFixed(2);                         
            }

}

function percentual(){
   
    firstInput =  parseFloat(firstInput).toFixed(2)/100;
    operator = '';
    screenNumber.innerText= firstInput; 
}

function writeResult(){
    resultNumber.innerText= screenNumber.innerText;
}


function erase(){
    if (operation === ""){
        firstInput = firstInput.slice(0, -1);
        screenNumber.innerText = firstInput;
    } else if (operation !== "" && secondInput === ''){
        operation = operation.slice(0, -1);
        screenNumber.innerText = screenNumber.innerText.slice(0, -1);
    }else {
        secondInput = secondInput.slice(0, -1);
        screenNumber.innerText = screenNumber.innerText.slice(0, -1);
           
    }
}