import axios from "axios";

const urlApiPokemon:string ='https://pokeapi.co/api/v2/pokemon';

export const getListPokemon = async()=>{
    const urlListPokemon=`${urlApiPokemon}?offset=0&limit=6`;
    const resp = await axios.get(urlListPokemon);
    return resp.data;
};

export const getPaginationListPokemon = async(url:string)=>{
    const urlListPokemon=`${url}`;
    const resp = await axios.get(urlListPokemon);
    return resp.data;
};

export const getPokemon = async(namePokemon:string)=>{
    const urlPokemon=`${urlApiPokemon}/${namePokemon}`;
    const resp = await axios.get(urlPokemon);
    return resp.data;
};

