let a = '';//first number
let b = '';//secont number
let sign = '';//знак операции
let finish = false;

const digit = ['0','1','2','3','4','5','6','7','8','9','.',];
const action = ['-','+','X','/'];

//экран калькулятора
const out = document.querySelektor('.calk-screen p');
  
function clearAll () {
    a = '';//first number
    b = '';//secont number
    sign = '';//знак операции
    finish = false;
    out.textContent -0
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.button').onclick = (event) => {
    
};

