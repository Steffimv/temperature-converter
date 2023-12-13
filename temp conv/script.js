let celsiusInput=document.querySelector('#celsius>input');
let farenheitInput=document.querySelector('#farenheit>input');
let kelvinInput=document.querySelector('#kelvin>input');

let btn=document.querySelector('.button button');

function roundNumber(number){
    return Math.round(number*100)/100;
}

celsiusInput.addEventListener('input',function(){
    let cTemp =parseFloat(celsiusInput.value);
    let fTemp =(cTemp*(9/5))+32;
    let kTemp =cTemp +273.15;

    farenheitInput.value=roundNumber(fTemp);
    kelvinInput.value=roundNumber(kTemp);
})

farenheitInput.addEventListener('input',function(){
    let fTemp =parseFloat(farenheitInput.value);
    let cTemp =fTemp-273.15;
    let kTemp =(fTemp-273.15)*(9/5)+32;

    celsiusInput.value=roundNumber(cTemp);
    kelvinInput.value=roundNumber(kTemp);
})

kelvinInput.addEventListener('input',function(){
    let kTemp =parseFloat(kelvinInput.value);
    let cTemp =(kTemp-32)*(5/9);
    let fTemp =(kTemp-32)*(5/9)+273.15;

    celsiusInput.value=roundNumber(cTemp);
    farenheitInput.value=roundNumber(fTemp);
})

btn.addEventListener('click',()=>{
    celsiusInput.value="";
    farenheitInput.value="";
    kelvinInput.value="";
})