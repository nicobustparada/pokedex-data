<template>
  <div class="container mx-auto p-4">
    <!-- Main title of the page -->
    <h1 class="text-3xl font-semibold text-gray-800 text-center mb-4">Primeros 150 Pokémon</h1>

    <!-- Search component to filter Pokémon -->
    <SearchInput
      v-model="query"
      :items="pokemons"
      placeholder="Buscar por nombre"
      @update:filteredItems="filteredPokemons = $event"
    />

    <!-- Show the loading component while the data is being fetched -->
    <div v-if="waiting">
      <Waiting></Waiting>
    </div>

    <!-- Show table and pagination if there are results -->
    <div v-else-if="filteredPokemons.length > 0">
      <!-- Pagination component to split results into pages -->
      <CustomPagination
        :items="filteredPokemons"
        :itemsPerPage="itemsPerPage"
        @update:paginatedItems="paginatedPokemons = $event"
      />

      <!-- Table displaying the list of Pokémon -->
      <div class="overflow-x-auto">
        <table class="min-w-full table-auto bg-white shadow-sm rounded-lg">
          <thead class="bg-blue-500 text-white">
            <!-- Row showing the total number of results -->
            <tr v-if="filteredPokemons.length > 0" class="border-t bg-gray-100">
              <td colspan="4" class="px-3 py-2 text-center text-gray-600">
                Pokémon encontrados: {{ filteredPokemons.length }}
              </td>
            </tr>
            <!-- Table header row -->
            <tr>
              <th class="px-3 py-2 text-left">#</th>
              <th class="px-3 py-2 text-left">Nombre</th>
              <th class="px-3 py-2 text-left">Imagen</th>
              <th class="px-3 py-2 text-left">Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(pokemon, index) in paginatedPokemons"
              :key="index"
              class="border-t hover:bg-gray-100"
            >
              <td class="px-3 py-2">{{ pokemon.id }}</td>
              <td class="px-3 py-2">{{ pokemon.name }}</td>
              <td class="px-3 py-2">
                <img :src="pokemon.sprite" :alt="'sprite de ' + pokemon.name" />
              </td>
              <td class="px-3 py-2">
                <!-- Button to view details -->
                <CustomButton
                  :to="`/${pokemon.id}`"
                  :buttonColor="'bg-blue-600'"
                  :hoverColor="'bg-blue-700'"
                  :buttonText="'Detalles'"
                ></CustomButton>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination component -->
      <CustomPagination
        :items="filteredPokemons"
        :itemsPerPage="itemsPerPage"
        @update:paginatedItems="paginatedPokemons = $event"
      />
    </div>

    <!-- Show error message if no results -->
    <div v-else>
      <NoPokemon :message="'No Pokémon found for: ' + query"></NoPokemon>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import { getPokemons } from '@/utils/getPokemons'
import CustomPagination from '@/components/CustomPagination.vue'
import SearchInput from '@/components/SearchInput.vue'
import Waiting from '@/components/Waiting.vue'
import NoPokemon from '@/components/NoPokemon.vue'
import CustomButton from '@/components/CustomButton.vue'

const pokemons = ref([])  // Holds the list of all Pokémon
const filteredPokemons = ref([])  // Holds the list of filtered Pokémon based on the search query
const paginatedPokemons = ref([])  // Holds the paginated list of Pokémon to be displayed on the current page
const query = ref('')  // Holds the current search query entered by the user
const itemsPerPage = 30  // Number of Pokémon to display per page
const waiting = ref(true)  // Indicates whether data is still being loaded


 //Fetches Pokémon data and sets the initial state for the Pokémon list
const fetchPokemons = async () => {
  // Fetch the list of Pokémon from the external API
  pokemons.value = await getPokemons()

  filteredPokemons.value = pokemons.value
  waiting.value = false
};

// Fetch Pokémon data when the component is mounted
onMounted(() => {
  fetchPokemons()
});
</script>
