// const fetch = require('node-fetch');

async function fetchCripto () {
const url = 'https://api.coincap.io/v2/assets';
const coins = await fetch(url)
.then((resposta) => resposta.json())
.then((data) => data.data)
.catch((error) => error.toString())
return coins;
}

const apareceMoeda = async () => {
    const coins = await fetchCripto();

    const coinsList = document.getElementById('coins-list');

coins
.filter((_, index) => index < 10)
.forEach((coin) => {
    const newLi = document.createElement('li');
    const usdPrice = Number(coin.priceUsd);
    newLi.innerText = `${coin.name} (${coin.symbol}): ${usdPrice.toFixed(2)}`;
    coinsList.appendChild(newLi);
});
}

window.onload = () => apareceMoeda();