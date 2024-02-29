let peso = document.getElementById('peso')
let boton = document.getElementById('calcular')
let Input = document.getElementById('peso')

boton.addEventListener('click',calcular)
Input.addEventListener('keyup', calcular)
function calcular(){
    const peso = document.getElementById('peso').valueAsNumber
    console.log('dato ingresado: ', peso)
    if(peso>0){
        if(peso<=30){
            segar(peso)
            MET1.style.display="block"
            MET2.style.display="none"
            METS.style.display="none"
            error.style.display="none"
        }else{
            superficie(peso)
            MET2.style.display="block"
            MET1.style.display="none"
            METS.style.display="none"
            error.style.display="none"
        }
    }
    else{
        error.style.display="block"
        error.innerHTML="Ingrese un valor valido"
        DIA.style.display="none"
        FLU.style.display="none"
        MAN.style.display="none"
        METS.style.display="block"
        MET1.style.display="none"
        MET2.style.display="none"
    }
    function segar(valor){
        if(valor>20){
            console.log(((valor-20)*20)+1500)
            DIA.innerHTML = "Diario: " + (((valor-20)*20)+1500) + " cc"
            DIA.style.display="block"
            FLU.innerHTML="flujo: " + ((((valor-20)*20)+1500)/24).toFixed(0) + " cc/hr"
            FLU.style.display="block"
            MAN.innerHTML="m+m/2: " + (((((valor-20)*20)+1500)/24)*1.5).toFixed(0) + " cc/hr"
            MAN.style.display="block"
        }
        else if(valor>10){
            console.log(((valor-10)*50)+1000)
            DIA.innerHTML = "Diario: " + (((valor-10)*50)+1000) + " cc"
            DIA.style.display="block"
            FLU.innerHTML="flujo: " + ((((valor-10)*50)+1000)/24).toFixed(0) + " cc/hr"
            FLU.style.display="block"
            MAN.innerHTML="m+m/2: " + (((((valor-10)*50)+1000)/24)*1.5).toFixed(0) + " cc/hr"
            MAN.style.display="block"
        }
        else{
            console.log(valor*100)
            DIA.innerHTML = "Diario: "+ (valor*100) + " cc"
            DIA.style.display="block"
            FLU.innerHTML="flujo: "+ ((valor*100)/24).toFixed(0) + " cc/hr"
            FLU.style.display="block"
            MAN.innerHTML="m+m/2: "+ (((valor*100)/24)*1.5).toFixed(0) + " cc/hr"
            MAN.style.display="block"
        }
        console.log("segar", valor)

    }
    
    function superficie(valor){
        console.log(((valor*4)+7)/(valor+90))
        console.log("superficie", valor)
            DIA.innerHTML = "SC * 1500: " + ((((valor*4)+7)/(valor+90))*1500).toFixed(0)
            DIA.style.display="block"
            FLU.innerHTML="SC * 2000: " + ((((valor*4)+7)/(valor+90))*2000).toFixed(0)
            FLU.style.display="block"
            MAN.style.display="none"
    }
}
const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const DIA = document.getElementById('dia');
const METS = document.getElementById('mets');
const MET1 = document.getElementById('met1');
const MET2 = document.getElementById('met2');