let butt = document.querySelectorAll('.num')
let display = document.querySelector('.display')
let add = document.querySelector('.add')
let equal = document.querySelector('.equal')
let calc = document.querySelectorAll('.calc')
let clear =document.querySelector('.clear')
let comma =document.querySelector('.comma')

let runn= 0
let enterNum=0
let firstNum=0;
let output=0

let reset =0
let addComma=0

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
            console.log(`enterNum:${enterNum}`)
        }
        else if (addComma==0){
            enterNum=Number(Num.textContent)+enterNum*10
            console.log(`firstNum: ${firstNum}`)
            console.log(`enterNum: ${enterNum}`) 
         }
        display.textContent=enterNum
    })
})

comma.addEventListener('click',() =>{
    if (addComma==0){
        enterNum=enterNum+`.`;  
        display.textContent=enterNum;
        addComma=1;
        console.log(enterNum)
}
})

calc.forEach(action=>{
    action.addEventListener('click',() => {
        operate()
        runn=action.textContent;           
    })
})

equal.addEventListener('click',() =>{
    operate()
    firstNum=enterNum;
    enterNum=0
}
)

function operate(a,b,run){
    a=firstNum;
    b=enterNum;
    run=runn
    if (run=='+'){
        enterNum=a+b
        console.log (enterNum)
        display.textContent=enterNum
    }
    else if (run=='-'){
        enterNum=a-b
        console.log (enterNum)
        display.textContent=enterNum
    }
    else if (run=='*'){
        enterNum=a*b
        console.log (enterNum)
        display.textContent=enterNum
    }
    else if (run=='/'){
        if (b==0){
            display.textContent='Error'
        }
        else {
        enterNum=a/b
        console.log (enterNum)
        display.textContent=enterNum
        }
    }
    addComma=0
    reset=1
    console.log(`reset: ${reset}`)
    console.log(`first num: ${firstNum}`)
    console.log(`enter num: ${enterNum}`)
    console.log(`a: ${a}`)
    console.log(`b: ${b}`)

}

clear.addEventListener('click', function() {
    firstNum=0;
    enterNum=0;
    finalNum=0;
    display.textContent=0;
})


