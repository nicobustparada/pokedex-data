<template>
  <div class="text-center py-4">
    <div class="flex items-center justify-center space-x-4">
      <!-- Button to go to the previous page -->
      <button
        @click="onPreviousPage"
        :disabled="currentPage === 1"
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300"
      >
        Anterior
      </button>

      <!-- Text to show the current page number and total pages -->
      <span class="text-lg">{{ currentPage }} de {{ totalPages }}</span>

      <!-- Button to go to the next page -->
      <button
        @click="onNextPage"
        :disabled="currentPage === totalPages"
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300"
      >
        Siguiente
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed, ref, watch } from 'vue'

// Define the necessary props
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  itemsPerPage: {
    type: Number,
    default: 30,
  },
});

// Define events emitted to the parent
const emit = defineEmits(['update:currentPage', 'update:paginatedItems'])

// State for the current page
const currentPage = ref(1)

// Compute the total number of pages
const totalPages = computed(() =>
  Math.ceil(props.items.length / props.itemsPerPage)
);

// Compute the items for the current page
const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * props.itemsPerPage
  return props.items.slice(start, start + props.itemsPerPage)
});

// Emit the paginated items whenever they change
watch(paginatedItems, (newItems) => {
  emit('update:paginatedItems', newItems)
});

//Detect when props.items changes and show the first page
watch(() => props.items, () => {
  currentPage.value = 1
});
// Function that change next page
const onNextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
    emit('update:currentPage', currentPage.value)
  }
};
// Function that change previous page
const onPreviousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
    emit('update:currentPage', currentPage.value)
  }
};

// Update the paginated list initially
emit('update:paginatedItems', paginatedItems.value)
</script>
