import { useEffect, useState } from "react";
import Sprite from "./Sprite";
import Stats from "./Stats";

function PokeWindow(){


    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(false);

    const [searchText,setSearchText] = useState("");
    const [pokemon,setPokemon] = useState({});

    const onChangeInput = (e) => {
        setSearchText(e.target.value);
    }


    const searchPokemon = (e) => {
        e.preventDefault();

        fetchPokemon(searchText)
            .then( pokemon => {
                setPokemon(pokemon);
                // TODO set error handling
                //console.log(pokemon);
            });
    }

    async function fetchPokemon(searchText){
        let url = `https://pokeapi.co/api/v2/pokemon/${searchText}/`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    // TODO useEffect to have pokemon loaded on initial loading of page

    useEffect(()=>{
        setSearchText("pikachu");
        fetchPokemon(searchText);
    },[]);


    if(isLoading){
        return (
            <i class="fas fa-spinner"></i>
        );
    }

    if(pokemon){
        return (
            <div>
                <form>
                    <input onChange={onChangeInput} placeholder="pikachu"/>
                    <button onClick={(e)=>searchPokemon(e)}>Search</button>
                </form>
                <Sprite {...pokemon}/>
                <Stats {...pokemon}/>
            </div>
        );
    }
    
    
}

export default PokeWindow;