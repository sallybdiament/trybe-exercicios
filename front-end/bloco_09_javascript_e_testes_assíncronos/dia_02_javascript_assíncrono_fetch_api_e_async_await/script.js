const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';
// Note que para forçar o erro retiramos o https:// do início da url.
// const url = 'api.chucknorris.io/jokes/random?category=dev';

  await fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));
}

fetchJoke();

// Algo deu errado :(
// TypeError: Only absolute URLs are supported

//Outra opcao usando o try e catch:
const fetchJoke2 = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.value);
  } catch(error) {
    console.log(`Algo deu errado :( \n${error}`);
  }
}

fetchJoke2();