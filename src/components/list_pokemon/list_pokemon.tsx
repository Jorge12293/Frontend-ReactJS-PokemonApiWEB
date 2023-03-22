import { PokemonName } from "../../interfaces/pagination_pokemon";
import CardPokemon from "../card_pokemon/card_pokemon";



const ListPokemon = (props: { listPokemonName: PokemonName[]}) => {
    const {listPokemonName} = props;
    const listCards = listPokemonName.map((pokemon,index) =>
      <CardPokemon key={index} pokemonName={pokemon} />
    );

    return (
        <div className="container">
           <div className="row">
                {listCards}
            </div>
        </div>       
    );
}

export default ListPokemon;
