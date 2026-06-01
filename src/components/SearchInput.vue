<template>
  <div class="flex justify-left mt-4">
    <input
      v-model="localQuery"
      @input="handleInput"
      :placeholder="placeholder"
      class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

// Props
const props = defineProps({
  modelValue: String, // Current value of the input
  items: {
    type: Array, // List of items to filter
    default: () => [],
  },
  placeholder: {
    type: String,
    default: 'Buscar Pokémon', // Placeholder text for the input
  },
});

// Emit event
const emit = defineEmits(['update:modelValue', 'update:filteredItems'])

// Local state
const localQuery = ref(props.modelValue)

// Function to handle user input and perform filtering
const handleInput = () => {
  emit('update:modelValue', localQuery.value); // Emit the input value to the parent

  // Filter the items based on the entered text
  const filtered = props.items.filter(item =>
    item.name === localQuery.value
  );

  emit('update:filteredItems', filtered); // Emit the filtered list
};

// Synchronize `modelValue` with the local state
watch(() => props.modelValue, (newValue) => {
  localQuery.value = newValue;
});
</script>
