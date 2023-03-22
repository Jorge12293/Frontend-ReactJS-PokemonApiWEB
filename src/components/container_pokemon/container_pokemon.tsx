import { useMutation, useQuery } from "@tanstack/react-query"
import { getListPokemon, getPaginationListPokemon } from "../../services/pokemon_services";
import ListPokemon from "../list_pokemon/list_pokemon";
import {PaginationPokemon, PokemonName,ConvertPaginationPokemon} from "../../interfaces/pagination_pokemon";
import { useEffect, useState } from "react";

export default function ContainerPokemon() {

  let listPokemonName:any[]=[];
  let paginationPokemon:any;
  const {data,isLoading,isFetching} = useQuery({ 
      queryKey: ['todos'], 
      queryFn: getListPokemon
  }); 

if(!isLoading){
  paginationPokemon=ConvertPaginationPokemon.toListPokemon(JSON.stringify(data));
  listPokemonName =paginationPokemon?.results ?? [];
}


  const clickPrevious=()=>{
    getPaginationListPokemon(paginationPokemon?.previous ?? '')
        .then(data2 => {
          paginationPokemon=ConvertPaginationPokemon.toListPokemon(JSON.stringify(data2));
          listPokemonName =paginationPokemon?.results ?? [];
        })
  }

  const clickNext=()=>{
    getPaginationListPokemon(paginationPokemon?.next ?? '')
    .then(data3 => {
      paginationPokemon=ConvertPaginationPokemon.toListPokemon(JSON.stringify(data3));
      listPokemonName =paginationPokemon?.results ?? [];
    })
  }

  
  return (
    <>

          <h1>Listado de Pokemons</h1>
          <ListPokemon listPokemonName={listPokemonName} />
          <div className="container">
              <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-start">
                    <li className="page-item disabled">
                      <a className="page-link" onClick={clickPrevious}>Previous</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" onClick={clickNext}>Next</a>
                    </li>
                  </ul>
              </nav>
          </div>
    </>
  )

}
