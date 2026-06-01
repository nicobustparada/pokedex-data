<template>
  <div class="flex flex-col items-center justify-center p-4 space-y-4">
    <!-- Display the message error when no data is available-->
    <p class="text-gray-600 text-center text-sm sm:text-base md:text-lg">
      {{ message }}
    </p>

    <!-- Default image shown when no data is found -->
    <img
      src="@/assets/images/noPokemon.jpg"
      alt="No Pokémon Found"  
      class="w-64 h-32 object-contain sm:w-40 sm:h-40 md:w-64 md:h-48"
    />
  </div>
</template>

<script setup>

// Define props for the component. The 'message' prop will be a string that represents the error's message
const props = defineProps({
  message: String,
});
</script>
