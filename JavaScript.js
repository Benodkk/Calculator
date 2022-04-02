let butt = document.querySelectorAll('.num')
let display = document.querySelector('.display')
let add = document.querySelector('.add')
let equal = document.querySelector('.equal')
let calc = document.querySelectorAll('.calc')
let clear =document.querySelector('.clear')
let comma =document.querySelector('.comma')
let backspace=document.querySelector('.backspace')

let runn= 0
let enterNum=0
let firstNum=0;

let reset =0
let addComma=0
let afterEqual=0
//Dodanie do wszystkich przyciskow liczbowych 
butt.forEach(Num=>{
    Num.addEventListener('click',() => {
        if (reset==1){
            firstNum=enterNum
            enterNum=0
            reset=0
        }
        if (addComma==1){
            enterNum=Number(enterNum+Num.textContent);
        }
        else if (addComma==0){
            enterNum=Number(Num.textContent)+enterNum*10
        }
        display.textContent=enterNum
    })
})

document.addEventListener('keydown', (event) => {
    var name = event.key;
    if (name>=0 && name<=9){
         if (reset==1){
            firstNum=enterNum
            enterNum=0
            reset=0
        }
        if (addComma==1){
            enterNum=Number(enterNum+name);
        }
        else if (addComma==0){
            enterNum=Number(name)+enterNum*10
        }
        display.textContent=enterNum
    }
    else {
        return
     }   
})

comma.addEventListener('click',() =>{
    if (addComma==0){
        enterNum=enterNum+`.`;  
        display.textContent=enterNum;
        addComma=1;
}
})

backspace.addEventListener('click',() =>{
    enterNum=enterNum.toString();
    enterNum=enterNum.substr(0,enterNum.length-1);
    enterNum=Number(enterNum)
    display.textContent=enterNum;
})

calc.forEach(action=>{
    action.addEventListener('click',() => {
        if (afterEqual==0){
        operate()
    }
        runn=action.textContent;
        afterEqual=0;           
    })
})

equal.addEventListener('click',() =>{
    operate()
    afterEqual=1;
})

function operate(a,b,run){
    a=firstNum;
    b=enterNum;
    run=runn
    if (run=='+'){
        enterNum=a+b
        display.textContent=enterNum
    }
    else if (run=='-'){
        enterNum=a-b
        display.textContent=enterNum
    }
    else if (run=='*'){
        enterNum=a*b
        display.textContent=enterNum
        
    }
    else if (run=='/'){
        if (b==0){
            display.textContent='Error'
        }
        else {
        enterNum=a/b
        display.textContent=enterNum
        }
    }
    addComma=0
    reset=1
}

clear.addEventListener('click', function() {
    firstNum=0;
    enterNum=0;
    display.textContent=0;
    addComma=0;
    reset=0;
    afterEqual=0;
    runn=0;
})


