export class Pokemon {
    abilities?: AbilityElement[];
    sprites?:   Sprites;
    moves?:     Move[];
    types?:     Type[];
    weight?:    number;
    height?:    number;
}

export interface AbilityElement {
    ability:   MoveClass;
    is_hidden: boolean;
    slot:      number;
}

export interface MoveClass {
    name: string;
    url:  string;
}

export interface Move {
    move:                  MoveClass;
    version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
    level_learned_at:  number;
    move_learn_method: MoveClass;
    version_group:     MoveClass;
}

export interface Sprites {
    front_default: string;
}

export interface Type {
    slot: number;
    type: MoveClass;
}

// Converts JSON strings to/from your types
export class ConvertPokemon {
    public static toPokemon(json: string): Pokemon {
        return JSON.parse(json);
    }

    public static pokemonToJson(value: Pokemon): string {
        return JSON.stringify(value);
    }
}