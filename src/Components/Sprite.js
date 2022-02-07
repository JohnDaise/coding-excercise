


function Sprite({ pokemon }){

   const {sprites} = pokemon;

    return (
        <div>
            <h1>{pokemon?pokemon?.name:null}</h1>
            <img src={(sprites) ? sprites.front_default : null}/>
        </div>
    );
    
    
    }
    
    export default Sprite;