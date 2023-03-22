import { PokemonName } from "@/src/interfaces/pagination_pokemon";
import { ConvertPokemon,Pokemon } from "@/src/interfaces/pokemon";
import { getPokemon } from "@/src/services/pokemon_services";
import { useQuery } from "@tanstack/react-query";

const CardPokemon = (props: {pokemonName: PokemonName}) => {
    const {pokemonName} = props;
    let name =pokemonName.name;
    let pokemon= new Pokemon();

    const {data,isLoading,isFetching} = useQuery({ 
        queryKey: ['todos',name], 
        queryFn: ({ queryKey }) => getPokemon(queryKey[1])
    }); 
   
    if(!isLoading){
        pokemon =ConvertPokemon.toPokemon(JSON.stringify(data));
        console.log(pokemon.types);
    }
    
   
    const type = pokemon?.types?.map((pokemon,index) =>
         <span 
            key={index}
            className="badge bg-secondary m-1">{pokemon.type.name}</span> 
    );


    return (
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">

            <div className="card shadow p-3 mb-4 bg-white rounded">
                <div className="card-body">
                    <div className="row">
                        <div className="col-6">
                            <div className="d-flex justify-content-center">
                            { 
                                pokemon != null &&(<img src={pokemon?.sprites?.front_default ?? ''} width={70} height={120}/>)
                            }
                            </div>
                        </div>
                        <div className="col-6">
                        <h5 className="card-title mt-1 text-primary">{pokemonName.name.toUpperCase()}</h5>
                           <p style={paragraph}>Peso   :{pokemon?.weight} kg</p>
                           <p style={paragraph}>Altura :{pokemon?.height} m</p> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="d-flex justify-content-around">
                                <span className="badge bg-info">Tipo:</span>
                                <div className="d-flex justify-content-around">
                                    {type}
                                </div>                            
                            </div> 
                        </div>
                    </div>                 
                 </div>
            </div>
        </div>     
    );
}

const paragraph = { marginTop: 0, marginBottom: 0};


export default CardPokemon;
