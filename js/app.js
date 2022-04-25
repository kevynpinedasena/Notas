const name = document.getElementById('inputNombre');
const note1 = document.getElementById('inputNota1');
const note2 = document.getElementById('inputNota2');
const response = document.getElementById('respuesta');

const sent = document.getElementById('botonEnviar');
const inputColors = document.getElementById('inputColor');
const option = document.querySelector('select');

//accion para darle color al body
inputColors.addEventListener('input', event => {
    let body = document.getElementById('body');
    body.style.background = event.target.value;
})

//metodo para validar campos
const validatefields = () => {
    if (note1.value == "" || note2.value == "" || name.value == "") {
        response.innerText = `Llene los campos requeridos`;

        return false;
    }
    else{  
        if (note1.value < 1 || note1.value > 5) {
            response.innerText = `Ingrese la nota 1 de 1 a 5`;
            return false;
        }
        else if (note2.value < 1 || note2.value > 5){
            response.innerText = `Ingrese la nota 2 de 1 a 5`;
            return false;
        }
    }
}

//metodo para calcular promedio
const calculateNote = (note1, note2, option) => {

    let calculate = (note1*0.3)+(note2*0.3);
    let noteFinal = ((option-calculate)*100)/40;

    calculateFinal(noteFinal, option);
}

//metodo para calcular cuadro de honor
const calculateFinal = (noteFinal, option) => {
    
    if (option == 4.0){
        if (noteFinal > 0.9 && noteFinal < 5.1) {
            response.innerText = `Necesita ${noteFinal.toFixed(1)}`;
            response.style.color = ('blue');
        }
        else {
            response.innerText = `Ya no puede alcanzar el cuadro de honor`;
            response.style.color = ('blue');
        }

    }
    else if (option == 3.5){
        if (noteFinal > 0.9 && noteFinal < 5.1) {
            response.innerText = `Necesita ${noteFinal.toFixed(1)}`;
            response.style.color = ('green');
        }
        else {
            response.innerText = `Ya no puede ganarla`;
            response.style.color = ('green');
        }

    }
    else if (option == 2.0){
        if (noteFinal > 0.9 && noteFinal < 5.1) {
            response.innerText = `Necesita ${noteFinal.toFixed(1)} o Superior`;
            response.style.color = ('yellow');
        }
        else if (noteFinal < -1) {
            response.innerText = `Ya gano`;
            response.style.color = ('yellow');
        }
        else if (noteFinal < 1) {
            response.innerText = `puede recuperar con 1 o superior`;
            response.style.color = ('yellow');
        }
        else {
            response.innerText = `Ya no puede recuperar`;
            response.style.color = ('yellow');
        }
    }
    else if (option == 1.9){
        if (noteFinal >= 1 && noteFinal <= 5.0) {
            response.innerText = `Necesita ${noteFinal.toFixed(1)} o inferior`;
            response.style.color = ('red');
        }
        else if (noteFinal < -1){
            response.innerText = `Ya gana`;
            response.style.color = ('red');
        }
        else if (noteFinal < 1){
            response.innerText = `Ya con un 1 la pierde y mayor de 3 gana`;
            response.style.color = ('red');
        }
        else {
            response.innerText = `Ya la perdio`;
            response.style.color = ('red');
        }
    }

    console.log(noteFinal);
}



sent.addEventListener('click', () => {
    console.log(option.value);
    let not1 = parseFloat(note1.value);
    let not2 = parseFloat(note2.value);
    let option1 = parseFloat(option.value);

    if (validatefields() == false){
        console.log('');
    }
    else{
        calculateNote(not1, not2, option1);
    }
})

