let butt = document.querySelectorAll('.num')
let display = document.querySelector('.display')
let add = document.querySelector('.add')
let equal = document.querySelector('.equal')
let calc = document.querySelectorAll('.calc')

let runn= 0
let enterNum=0
let firstNum=0;
let output=0

let reset=0
//Dodanie do wszystkich przyciskow liczbowych 
butt.forEach(mum=>{
    mum.addEventListener('click',() => {
        enterNum=Number(mum.textContent)+enterNum*10
        display.textContent=enterNum
        console.log(`firstNum: ${firstNum}`)
        console.log(`enterNum: ${enterNum}`)  
        
    })
})

//przycisk wybranego dzialania zapisuje pierwsza liczby i pozwala podac druga liczbe
//poprzez wybranie odpowiedniego dzialania zapisuje wybrane dzialanie
calc.forEach(action=>{
    action.addEventListener('click',()=> {
        firstNum=enterNum;
        enterNum=0
        runn=action.textContent;
    })
})
//przycisk dzialania ma dzialac rowniez jako '='

//po klikniecu "=" uruchamia funkcje operate. Musi byc zapisana 1 i 2 liczba oraz rodzaj dzialania
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
        enterNum=a/b
        console.log (enterNum)
        display.textContent=enterNum
    }
    else {
        console.log('dupa')
    }
    
    let reset=1

    console.log(`first num: ${firstNum}`)
    console.log(`enter num: ${enterNum}`)
    console.log(`a: ${a}`)
    console.log(`b: ${b}`)

}

equal.addEventListener('click',operate)

