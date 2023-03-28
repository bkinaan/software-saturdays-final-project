import React, { useState, useEffect } from 'react';
import Pokemon from "./Pokemon";
import '../index.css';
function PokeList() {
    const [pokemon, setPokemon] = useState("");
    const [limit, setLimit] = useState(12);

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
                    class="pokemon"
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
        setPokemon(<h1 className='
            font-bold
            text-center
            text-lg'>
                Yikes! Something went wrong.
        </h1>);
    }

    useEffect( () =>  {
        //let limit = 30;
        const url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=0`;
        fetch(url)
        .then(handleFetch)
        .then(handleResponse)
        .catch(handleError);
    }, [limit]);

    const handleClick = () => {
        setLimit(limit + 12);
    };
    
    return (
        <>
            <div className='
                flex justify-center'>
                <div className='
                    grid
                    grid-cols-3
                    gap-20'>
                <h2 className='
                    font-bold
                    text-7xl
                    col-span-full
                    flex justify-center
                    text-title'>
                        Pokemon List</h2>
                    {pokemon}
                </div>
            </div>
        
        <div className='flex justify-center py-10'>
            <button className='
                w-48 h-8 
                bg-light-blue 
                hover:bg-blue
                hover:scale-125
                rounded-xl
                border-spacing-1'
                onClick={handleClick}>
                    Load More</button>
        </div>
        </>
    )
}

export default PokeList;