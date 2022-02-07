

function Stats({ pokemon }){

    const {types, height, weight,forms, abilities, stats, moves} = pokemon;
    return (
        <div>
           
              {/* TODO view stats in table */}
              <table className="center">
                <tbody>
                    <tr>
                        <th>Type</th>
                    </tr>
                    <tr>
                        <td>
                            {types?.map((el,idx)=>{
                                const { type } = el;
                                return type?.name
                            }).join(", ")}  
                        </td>
                    </tr>
                    <tr>
                        <th>Height</th>
                        <th>Weight</th>
                    </tr>
                    <tr>
                        <td>{height}</td>
                        <td>{weight}</td>
                    </tr>
                    <tr>
                        <th>Abilites</th>
                    </tr>                 
                    <tr>
                        <td>
                            {abilities?.map((el)=>{
                                const { ability } = el;
                                return ability?.name
                            }).join(", ") }    
                        </td> 
                    </tr>                 
                    <tr>
                        <th>Stats</th>
                    </tr>                 
                    {stats?.map((el,idx)=>{
                        const { stat,base_stat } = el;
                        
                        return (
                            <tr key={idx}>
                                <td>{stat.name}</td>
                                <td>{base_stat} points </td>
                            </tr>
                        );
                    })}
               
                </tbody>
              </table>

        </div>
    );
    
    
    }
    
    export default Stats;