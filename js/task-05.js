// Напиши скрипт который, при наборе текста 
// в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка "Anonymous".

const elementInput = document.querySelector('#name-input');
const elementSpan = document.querySelector('#name-output');
//console.log(elementInput, elementSpan);

elementInput.addEventListener('input', (event) => elementSpan.textContent = event.currentTarget.value);


// if event="blur" next code will be used
// elementInput.addEventListener('blur', elementInputDisplayContent);

// function elementInputDisplayContent (event) {
//     if (event.currentTarget.value.length > 0){ 
//         elementSpan.textContent = event.currentTarget.value;
//     }
// }

