import axios from "axios"

export const getPokemons = async () => {
  const numberPokemons = 150; 
  //endpoint to get the first numberPokemons 
  const endpoint = `https://pokeapi.co/api/v2/pokemon?limit=${numberPokemons}&offset=0`;

  try {
    // Request to pokeAPI
    const response = await axios.get(endpoint);
    // Obtain the list of pokemons
    const pokemons = response.data.results;

    // Prepare the result array
    const pokemonDetails = [];

    // Obtain Pokemon Number, Name, and Image for each pokemon
    for (const pokemon of pokemons) {
      const details = await axios.get(pokemon.url);
      const pokemonData = details.data;

      // Extract id, name, and sprite
      const pokemonId = pokemonData.id;
      const pokemonName = pokemonData.name;
      const pokemonSprite = pokemonData.sprites.front_default;

      // Add the details to the result array
      pokemonDetails.push({
        id: pokemonId,
        name: pokemonName,
        sprite: pokemonSprite,
      });
    }

    return pokemonDetails; // Return the array of dictionaries
  } catch (error) {
    // If an error occurs, log the error and return  []
    console.log("Error obtaining pokemons: ", error);
    return [];
  }
};
