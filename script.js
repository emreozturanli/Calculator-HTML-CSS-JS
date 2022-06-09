
const result = document.querySelector('.result');
const operation = document.querySelector('.operation');
const buttons = document.querySelector('.buttons');
const operators = ['+','-','*','/'];

buttons.addEventListener('click', (e)=>{

   let newInput = e.target.innerText;

    if(e.target.classList.contains('buttons')){
        null
    }
    else{
        if (newInput == 'AC'){
        result.innerText = '';
        }
        else if (newInput == 'C'){
            operation.innerText = '';
        }                                                
        else if (newInput == '='){
            let subResult;
            if(operation.innerText.includes('+')){
               subResult = operation.innerText.split('+').map((i)=> +i).reduce((a,b)=> a+b)
            }
            else if(operation.innerText.includes('/')){

                subResult = operation.innerText.split('/').map((i)=> +i).reduce((a,b)=> a/b)
            }
            else if(operation.innerText.includes('*')){
                subResult = operation.innerText.split('*').map((i)=> +i).reduce((a,b)=> a*b)
            }
            else if(operation.innerText.includes('-')){
                if(operation.innerText.indexOf('-') == operation.innerText.lastIndexOf('-')){
                    subResult = operation.innerText.split('-').map((i)=> +i).reduce((a,b)=> a-b)
                }else{
                    if(operation.innerText.includes('--')){
                        subResult = operation.innerText.split('--').map((i)=> +i).reduce((a,b)=> a+b)
                    }
                    else{
                        subResult = operation.innerText.slice(1).split('-').map((i)=> +i).reduce((a,b)=> -(a+b))
                    }
                }
            }
            if(subResult.toString().includes('.')){
                if(subResult.toString().slice(subResult.toString().indexOf('.')+1).length >4){
                    result.innerText = subResult.toFixed(4);
                    }
                    else{
                        result.innerText = subResult;
                    } 
            }
            else{
                result.innerText = subResult;
            }
            operation.innerText = result.innerText
        }
        else{ 
            if(operation.innerText.split('').some((i)=> ['+','*','/'].includes(i)) && ['+','*','/','-'].includes(newInput) ){
                null
            }
            else if((!operation.innerText.startsWith('-') && operation.innerText.split('-').length ==2) && ['+','*','/','-'].includes(newInput)){
                null
            }
            else if((operation.innerText.startsWith('-') && operation.innerText.split('-').length ==3) && ['+','*','/','-'].includes(newInput)){
                null
            }
            else if((operation.innerText.includes('--') && (operation.innerText.split('--').length <=3)) && ['+','*','/','-'].includes(newInput)){
                null
            }
            else if(operation.innerText.endsWith('-') && ['+','*','/','.'].includes(newInput)){
                null
            }
            else if(operation.innerText.startsWith('-') && operation.innerText.length == 1 && operators.includes(newInput)){
                null
            }
            else if((operation.innerText.endsWith('-') && operation.innerText.charAt(operation.innerText.length - 2) == '-') && operators.includes(newInput) ){
                null
            }
            else{
                if(operation.innerText == '0' && ['+','-','*','/','.'].includes(newInput) ){
                    operation.innerText += newInput; 
                }
                else if(operation.innerText == '' && ['+','*','/','.'].includes(newInput)){
                    null
                }
                else if(operation.innerText == '' && newInput == '-'){
                    operation.innerText += newInput;
                }
                else if (operation.innerText != '0'){
                    operation.innerText += newInput;
                }
                else if(operation.innerText == '0' && !operators.includes(newInput)){
                    operation.innerText = newInput;
                }       
            }
        }
}  
})


