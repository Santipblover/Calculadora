function obtenerDisplay() {
    return document.querySelector('.display .content');
}


function actualizarDisplay(valor) {
    obtenerDisplay().textContent = valor.toString();
}

let operando1 = '';
let operando2 = '';
let operacion = '';

function manejarOperacion(valor) {
    if (valor === '+' || valor === '-' || valor === 'x' || valor === '÷' || valor === '%') {
        operacion = valor;
        if (operando1 !== '') {
            actualizarDisplay(operando1 + ' ' + operacion);
        }
    } else if (valor === '=' && operando1 !== '' && operando2 !== '') {
            let resultado = calcularResultado(parseFloat(operando1), parseFloat(operando2), operacion);
            actualizarDisplay(resultado);
            operando1 = resultado.toString();
            operando2 = '';
            operacion = '';
    } else {
        if (operacion === '') {
            operando1 += valor;
            actualizarDisplay(operando1);
        } else {
            operando2 += valor;
            actualizarDisplay(operando2);
        }
    }
}


function calcularResultado(num1, num2, operador) {
    if(operador === '+') return num1 + num2;
    if (operador === '-') return num1 - num2;
    if (operador === 'x') return num1 * num2;
    if (operador === '÷' && (num2 !== 0)) return num1/num2;                 
    if (operador === '%') return (num1 * num2)/ 100;
    return 'Error';  
   }   


document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function() {
        let valor = this.querySelector('.key').textContent;
        manejarOperacion(valor);
    });
});


document.getElementById('on').addEventListener('click', function() {
    limpiarDisplay();
});

function limpiarDisplay() {
    obtenerDisplay().textContent = '0';
    operando1 = '';
    operando2 = '';
    operacion = '';
}

let botonOn = document.getElementById('on');
let botonOff = document.getElementById('off');
let displayContent = document.querySelector('.content');

function apagarDisplay() {
    displayContent.textContent = ''; 
    document.querySelector('.display').style.backgroundColor = 'black'; 
}

function encenderDisplay() {
    document.querySelector('.display').style.backgroundColor = 'rgb(52, 52, 236)';
}

botonOff.addEventListener('click', apagarDisplay);

botonOn.addEventListener('click', encenderDisplay);

