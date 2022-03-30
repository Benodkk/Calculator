let butt = document.querySelectorAll('.num')
let display = document.querySelector('.display')
let add = document.querySelector('.add')
let equal = document.querySelector('.equal')

let runn= 0
let enterNum=0
let firstNum=0;
let output=0
//Dodanie do wszystkich przyciskow liczbowych 
for (let i = 0; i < butt.length; i++) {
    butt[i].addEventListener("click", function () {
      enterNum=i+enterNum*10
      display.textContent=enterNum
      console.log(enterNum)
      console.log(firstNum)
      console.log(runn)
    });
}
//przycisk wybranego dzialania zapisuje pierwsza liczby i pozwala podac druga liczbe
add.addEventListener('click',function (){
    firstNum=enterNum;
    enterNum=0
    display.textContent='...';
    runn='add'
})

//poprzez wybranie odpowiedniego dzialania zapisuje wybrane dzialanie



function addNumbers(a,b){
    console.log (a+b)
}

function substract(a,b){
    console.log(a-b)
}

function multiply(a,b){
    console.log(a*b)
}   

function divide(a,b){
    console.log(a/b)
}

equal.addEventListener('click',function operate(a,b,run){
    a=firstNum;
    b=enterNum;
    run=runn
    if (run=='add'){
        console.log (a+b)
        display.textContent=a+b
    }
    else if (run=='substract'){
        substract(a,b)
    }
    else if (run=='multiply'){
        multiply(a,b)
    }
    else if (run=='divide'){
        divide(a,b)
    }
    else {
        console.log('dupa')
    }
})


//po klikniecu "=" uruchamia funkcje operate. Musi byc zapisana 1 i 2 liczba oraz rodzaj dzialania