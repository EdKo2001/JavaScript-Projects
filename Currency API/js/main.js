window.addEventListener('load', () => {
    let EUR_USD = document.querySelector('#EUR_USD');
    let USD_EUR = document.querySelector('#USD_EUR');
    let USD = document.querySelector('#USD');
    let EUR = document.querySelector('#EUR')
    let USD1 = document.querySelector('#USD1');
    let EUR1 = document.querySelector('#EUR1')
    let btn = document.querySelector('.btn');


    const proxy = "https://cors-anywhere.herokuapp.com/";
    const api = `${proxy}https://free.currconv.com/api/v7/convert?q=USD_EUR,EUR_USD&compact=ultra&apiKey=dada0150bce424130f15`;
    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            EUR_USD.innerText = data.EUR_USD;
            USD_EUR.innerText = data.USD_EUR;
            USD1.value = data.EUR_USD;
            EUR.value = data.USD_EUR;
            btn.addEventListener('click', () => {
                EUR.value = USD.value * data.USD_EUR;
                USD1.value = EUR1.value * data.EUR_USD;
            })
        });
        
});

