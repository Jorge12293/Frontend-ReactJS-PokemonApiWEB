export interface PaginationPokemon {
    count:    number;
    next:     string;
    previous: string;
    results:  PokemonName[];
}

export interface PokemonName {
    name: string;
    url:  string;
}

// Converts JSON strings to/from your types
export class ConvertPaginationPokemon {
    public static toListPokemon(json: string): PaginationPokemon {
        return JSON.parse(json);
    }

    public static listPokemonToJson(value: PaginationPokemon): string {
        return JSON.stringify(value);
    }
}
