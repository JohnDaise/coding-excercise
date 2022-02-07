import { useEffect, useState } from "react";
import Sprite from "./Sprite";
import Stats from "./Stats";

function PokeWindow(){


    const [isLoading,setIsLoading] = useState(true);
    const [error,setError] = useState(false);

    const [searchText,setSearchText] = useState("pikachu");
    const [pokemon,setPokemon] = useState({});

    const onChangeInput = (e) => {
        setSearchText(e.target.value);
    }

    const searchPokemon = (e) => {
        e.preventDefault();
        setIsLoading(true);
        fetchPokemon(searchText)
            .then( pokemon => {
                setIsLoading(false);
                setPokemon(pokemon);
                console.log(pokemon);
            });
    }

     const fetchPokemon = async ()=> {

        try {

            let url = `https://pokeapi.co/api/v2/pokemon/${searchText}/`;
            const response = await fetch(url);
            const data = await response.json();
            setPokemon(data);
            setError(false);
            return data;

        } catch (error) {
            setError(true);
            setIsLoading(false);
            console.log(error);
    
        }
    }

    // TODO useEffect to have pokemon loaded on initial loading of page

    useEffect(()=>{
        setIsLoading(true);
        fetchPokemon().then( data =>{
            setIsLoading(false);
            setPokemon(data);
            // console.log(data);
        });
    },[]);

        return (
            <div>
                <form>
                    <input onChange={onChangeInput} value={searchText} placeholder="pikachu"/>
                    <button className={"btn"} onClick={(e)=>searchPokemon(e)}>Search</button>
                </form>
                { error && <div><p>Pokemon Not Found. Please Try Again.</p></div>}
                { isLoading && <div><p>Loading...</p></div> }
                { !isLoading && (!error && <div>
                                <Sprite pokemon={pokemon}/>
                                <Stats pokemon={pokemon}/>
                             </div>)}
            </div>
        );
    
    
}

export default PokeWindow;