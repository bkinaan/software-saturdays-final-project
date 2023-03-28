import React, { useState, useEffect } from 'react';
import Pokemon from "./Pokemon";
import '../stylesheets/PokeList.css';
function PokeList() {
    const [pokemon, setPokemon] = useState(0);

    const handleFetch = (response) => {
        console.log(response.status);
        return response.json();
    }

    const handleResponse = async (response) => {
        const respPoke = await Promise.all(
            response.results.map(async (item) => {
                const pokemonResponse = await fetch(item.url);
                const pokemonData = await pokemonResponse.json();
                const types = pokemonData.types;
                return <Pokemon
                    class="pokemons"
                    name={item.name} 
                    img={pokemonData.sprites.front_default}
                    types={types}
                />
            })
        );
        setPokemon(respPoke);
    }

    const handleError = (error) => {
        console.log("uh oh error");
        console.log(error);
        setPokemon(<h1>AHHHHHHHHHH</h1>);
    }

    useEffect( () =>  {
        const url = "https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0";
        fetch(url)
        .then(handleFetch)
        .then(handleResponse)
        .catch(handleError);
    }, [])
    
    return (
        <>
        {pokemon}
        </>
    )
}

export default PokeList;