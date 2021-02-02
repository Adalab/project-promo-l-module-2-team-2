'use strict';
const inputsTextConfig = [
  {
    inputClass: '.js-name',
    cardClass: '.js-namePreview',
    defaultValue: 'Nombre Apellido',
    cardPrefix: '',
    cardElementAttribute: 'innerHTML',
  },
  {
    inputClass: '.js-position',
    cardClass: '.js-positionPreview',
    defaultValue: 'Front-end developer',
    cardPrefix: '',
    cardElementAttribute: 'innerHTML',
  },

  {
    inputClass: '.js-email',
    cardClass: '.js-emailPreview',
    defaultValue: '',
    cardPrefix: 'mailto:',
    cardElementAttribute: 'href',
  },
  {
    inputClass: '.js-phone',
    cardClass: '.js-phonePreview',
    defaultValue: '',
    cardPrefix: 'tel:',
    cardElementAttribute: 'href',
  },
  {
    inputClass: '.js-linkedin',
    cardClass: '.js-linkedinPreview',
    defaultValue: '',
    cardPrefix: 'https://www.linkedin.com/in/',
    cardElementAttribute: 'href',
  },
  {
    inputClass: '.js-github',
    cardClass: '.js-githubPreview',
    defaultValue: '',
    cardPrefix: 'https://github.com/',
    cardElementAttribute: 'href',
  },
];

function updateAllInputs() {
  // recorro los 6 inputs del array inputsTextConfig
  for (const inputTextConfig of inputsTextConfig) {
    // por cada objeto del array inputsTextConfig hago:
    console.log(
      'Empiezo una nueva iteración del for con la configuración del elemento:',
      inputTextConfig
    );
    // obtengo el elemento input, el origen
    const inputElement = document.querySelector(inputTextConfig.inputClass);
    console.log(
      'Elemento del formulario:',
      inputTextConfig.inputClass,
      inputElement
    );
    // obtengo el elemento de la card, el destino
    const cardElement = document.querySelector(inputTextConfig.cardClass);
    console.log(
      'Elemento del la tarjeta:',
      inputTextConfig.cardClass,
      cardElement
    );
    // obtengo el valor del input
    let newValue = inputElement.value;

    // compruebo si tengo que usar el innerHTML, es decir si es el nombre o la profesion
    if (inputTextConfig.cardElementAttribute === 'innerHTML') {
      // compruebo si está vacío
      if (inputElement.value === '') {
        newValue = inputTextConfig.defaultValue;
      } else {
        newValue = inputElement.value;
      }
      console.log('Valor por defecto:', inputTextConfig.defaultValue);
      console.log('Nuevo valor a poner en la tarjeta:', newValue);
      // actualizo la tarjeta
      cardElement.innerHTML = newValue;
    }
    // si no es de tipo innerHTML, compruebo si tengo que usar el href, es decir si es el email, phone, linkedin o gihtub
    else if (inputTextConfig.cardElementAttribute === 'href') {
      // compruebo si está vacío
      if (inputElement.value === '') {
        newValue = '#';
      } else {
        // limpio el prefijo por si acaso la usuaria ha escrito cosas como:
        // - https://github.com/migueldelmazo en vez de migueldelmazo a secas
        // - https://www.linkedin.com/in/migueldelmazo en vez de migueldelmazo a secas
        newValue = newValue.replace(inputTextConfig.cardPrefix, '');
        // vuelvo a añadir el prefijo https://www.linkedin.com/in/
        newValue = inputTextConfig.cardPrefix + newValue;
      }
      console.log('Valor del prefijo:', inputTextConfig.cardPrefix);
      console.log('Nuevo valor a poner en la tarjeta:', newValue);
      // actualizo la tarjeta
      cardElement.href = newValue;
    }
    console.log('-------------------------------------------------');
  }
}

<<<<<<< HEAD
// obtengo los 6 inputs del html
const inputTextElements = document.querySelectorAll('.js-inputText');
// escucho a cada uno de ellos con un addEventListener
for (const inputTextElement of inputTextElements) {
  inputTextElement.addEventListener('keyup', updateAllInputs);
=======
nameElement.addEventListener('keyup', handleName);

//PUESTO
const positionElement = document.querySelector('.js-position');
const positionPreviewElement = document.querySelector('.js-positionPreview');

function handlePosition(event) {
  const positionValue = event.target.value;

  if (positionValue === '') {
    positionPreviewElement.innerHTML = 'Front-end developer';
  } else {
    positionPreviewElement.innerHTML = positionValue;
  }
}

positionElement.addEventListener('keyup', handlePosition);

// Nueva función para reaprovechar código

//IMAGEN DE PERFIL

//EMAIL

const emailElement = document.querySelector('.js-email');
const emailPreviewElement = document.querySelector('.js-emailPreview');
function handleEmail(ev) {
  const emailValue = ev.target.value;

  if (emailValue === '') {
    emailPreviewElement.href = '';
  } else {
    emailPreviewElement.href = 'mailto:' + emailValue;
  }
>>>>>>> dev
}

// al arrancar la página proceso todos los inputs
// como updateAllInputs no recibe eventos puedo ejecutar esta función al inicio, tras un evento de usuaria o cuando me de la real gana!!!
updateAllInputs();
