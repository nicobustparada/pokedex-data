import axios from "axios"

//Fetches information about a specific Pokémon from the PokeAPI using its number.
export const getPokemonInfo = async (pokemonNumber) => {
  try {
    // Sending a GET request to the PokeAPI to fetch the Pokémon data
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`);
    const data = response.data;

    // Extracting the name, sprite URL, types, abilities, height and weight 
    const name = data.name;
    const sprite = data.sprites.front_default
    const types = data.types.map(typeInfo => typeInfo.type.name);
    const abilities = data.abilities.map(abilityInfo => abilityInfo.ability.name);
    const height = data.height;
    const weight = data.weight;
    
    // Returning an object containing the extracted data
    return {
      name,
      sprite,
      types,
      abilities,
      height,
      weight
    };
  } catch (error) {
    // If an error occurs, log the error and return null
    console.error(`Error obtaining pokemon ${pokemonNumber} data:`, error);
    return null;
  }
}
