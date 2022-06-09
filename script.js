
const result = document.querySelector('.result');
const operation = document.querySelector('.operation');
const buttons = document.querySelector('.buttons');
const operators = ['+','-','*','/','.'];

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
            syntaxCheck();
            if(eval(operation.innerText).toString().includes('.')) {
                if(eval(operation.innerText).toString().slice(eval(operation.innerText).toString().indexOf('.')+1).length >4){
                result.innerText = eval(operation.innerText).toFixed(4);
                }
                else{
                    result.innerText = eval(operation.innerText);
                }       
            } 
            else{
                result.innerText = eval(operation.innerText);
            }                              
           
        }
        

        else{ 
            
            let lastNum = operation.innerText.charAt(operation.innerText.length - 1);
                
            if((operators.includes(lastNum) && operators.includes(newInput)) 

            || 
            
            ((newInput == '.') && operation.innerText.lastIndexOf('.') > operation.innerText.lastIndexOf('+'))
            &&
            (newInput == '.') && operation.innerText.lastIndexOf('.') > operation.innerText.lastIndexOf('-')
            &&
            (newInput == '.') && operation.innerText.lastIndexOf('.') > operation.innerText.lastIndexOf('/')
            &&
            (newInput == '.') && operation.innerText.lastIndexOf('.') > operation.innerText.lastIndexOf('*'))
            
            
            {
                null
            }
            else{
            
                if(operation.innerText == '0' && operators.includes(newInput) ){
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


function syntaxCheck(){  
    if(operators.filter((operator)=> operation.innerText.endsWith(operator)).length > 0){
        result.style.fontSize = '2rem';
        result.innerText = 'Syntax error!!!';
    }

    if(['*','/','.'].filter((operator)=> operation.innerText.startsWith(operator)).length > 0){
        result.style.fontSize = '2rem';
        result.innerText = 'Syntax error!!!';
    }
}

})



// boşken 0 dan sonrasını alma          son else içinde hallettim
// sonunda operatör kalınca napacaz.    syntaxCheck
// ilk karakter operatör olmasın        syntaxCheck
// +-*. yanyana olmasın  son else içinde hallettik


// - olunca parantez  ????????