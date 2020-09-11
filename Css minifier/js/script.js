let inputs = document.querySelectorAll('textarea');
let minifyBTN = document.querySelector('#minify');
let copyBTN = document.querySelector('#copy');

minifyBTN.addEventListener('click', () => {
  inputs[1].value = inputs[0].value
    .replace(/([^0-9a-zA-Z\.#])\s+/g, '$1')
    .replace(/\s([^0-9a-zA-Z\.#]+)/g, '$1')
    .replace(/;}/g, '}')
    .replace(/\/\*.*?\*\//g, '');
})

copyBTN.addEventListener('click', () => {
  inputs[1].select();
  document.execCommand('copy')
})