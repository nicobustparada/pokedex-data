<template>
  <div class="container mx-auto p-4">
    <!-- Button to navigate back to the main page -->
    <CustomButton
      :to="`/`"
      :buttonColor="'bg-green-600'"
      :hoverColor="'bg-green-700'"
      :buttonText="'Inicio'"
    ></CustomButton>
    <!-- Show the Waiting component while fetching Pokémon data from the API -->
    <div v-if="waiting">
      <Waiting></Waiting>
    </div>
    <!-- Display an error message if no Pokémon data is available -->
    <div v-else-if="pokemon == null">
      <NoPokemon :message="'No existe este Pókemon'"></NoPokemon>
    </div>

    <!-- Display Pokémon details if data is available -->
    <article v-else>
      <header class="mb-4">
        <h1 class="text-3xl font-semibold text-center">
          <u>{{ pokemon.name }}</u>
        </h1>
      </header>

      <section class="grid grid-cols-1 md:grid-cols-2 gap">
        <!-- Pokémon properties (left section) -->
        <div class="space-y-4">
          <section>
            <h2 class="text-xl font-semibold">Peso:</h2>
            <ul>
              <li class="text-lg">{{ pokemon.weight }} Kg</li>
            </ul>
          </section>

          <section>
            <h2 class="text-xl font-semibold">Altura:</h2>
            <ul>
              <li class="text-lg">{{ pokemon.height }} m</li>
            </ul>
          </section>

          <section>
            <h2 class="text-xl font-semibold">Tipo/s:</h2>
            <ul class="list-disc pl-5">
              <li v-for="(type, index) in pokemon.types" :key="index" class="text-lg">
                {{ type }}
              </li>
            </ul>
          </section>

          <section>
            <h2 class="text-xl font-semibold">Habilidad/es:</h2>
            <ul class="list-disc pl-5">
              <li v-for="(ability, index) in pokemon.abilities" :key="index" class="text-lg">
                {{ ability }}
              </li>
            </ul>
          </section>
        </div>

        <!-- Pokémon image (right section) -->
        <div class="flex justify-center items-center">
          <img :src="pokemon.sprite" :alt="'Image of ' + pokemon.name" class="w-64 h-64 object-contain" />
        </div>
      </section>
    </article>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getPokemonInfo } from "@/utils/getPokemonInfo"
import { capitalize } from "@/utils/capitalizeLetter"
import Waiting from '@/components/Waiting.vue'
import NoPokemon from '@/components/NoPokemon.vue'
import CustomButton from '@/components/CustomButton.vue'

// Ref to hold the Pokémon information
const pokemon = ref({})
// Boolean ref to track if data is still being fetched
const waiting = ref(true)
// Access the route parameters
const route = useRoute()

// Function to fetch Pokémon data from the API
const fetchPokemonInfo = async () => {
  pokemon.value = await getPokemonInfo(route.params.id)
  // Capitalize the Pokémon name if data is available, and change the page tittle
  if (pokemon.value != null) {
    pokemon.value.name = capitalize(pokemon.value.name)
    document.title += ` ${pokemon.value.name}`
  }else{
    document.title = 'Error'
  }
  // Update the waiting state to false once data is fetched
  waiting.value = false
};

// Call the API function when the component is mounted
onMounted(() => {
  fetchPokemonInfo()
});
</script>
