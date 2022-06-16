import React from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';

class Pokedex extends React.Component {
    render() {  
    console.log(pokemons);
        return (
        <div className='pokedex'>
           { pokemons.map((personagem) => {
            console.log(personagem);
            return <Pokemon key={personagem.id} pokemon={personagem}/>
           })}
        </div>
    )
  
    }
}

export default Pokedex