<template>
  <router-link :to="to">
    <button
      :class="`${buttonColor} text-white px-4 py-2 rounded-md shadow-md hover:${hoverColor} focus:outline-none focus:ring-2 focus:ring-blue-300`"
    >
      {{ buttonText }}
    </button>
  </router-link>
</template>

<script setup>
import { defineProps } from 'vue';

//Props to change redireccion, colors, and button text in the component
const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  buttonColor: {
    type: String,
    default: 'bg-blue-600',
  },
  hoverColor: {
    type: String,
    default: 'bg-blue-700',
  },
  buttonText: {
    type: String,
    required: true,
  },
});
</script>
