<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
// import { RouterLink } from 'vue-router';
import NavBar from '@/components/NavBar.vue';
import data from '/data.json';
import { onMounted, ref } from 'vue';

const destinations = data.destinations; // Ensure this is the correct format and data structure
const currentDestination = ref(null);

// Function to set the first destination on mount or based on interaction
const getDestination = () => {
  currentDestination.value = destinations[0];
};

onMounted(getDestination);

// Function to update the destination when an item is clicked

const selectDestination = (destination) => {
  currentDestination.value = destination;
};

console.log(currentDestination); // Will show the current selected destination
</script>

<template>
  <div class="md:bg-destination bg-destination-mobile h-screen w-screen bg-cover">
    <NavBar />
    <div class="flex items-center justify-center w-full px-72 h-5/6 text-white">
      <div class="w-1/2 space-y-20">
        <p class="font-light flex text-2xl">
          01 <span class="font-medium ml-4">PICK YOUR DESTINATION</span>
        </p>
        <img :src="currentDestination.images['png']" alt="#" class="w-1/2 bg-cover" />
      </div>
      <div class="w-1/2" v-if="currentDestination">
        <ul class="flex space-x-10">
          <li
            v-for="(destination, index) in destinations"
            :key="index"
            @click="selectDestination(destination)"
            class="cursor-pointer py-2 font-extralight text-sm"
            :class="{ 'border-b border-white': currentDestination.name === destination.name }"
          >
            {{ destination.name }}
          </li>
        </ul>
        <!-- Assuming each destination has a description -->
        <div v-if="currentDestination" class="w-[320px] h-1/2 space-y-14">
          <div>
            <h2 class="text-[100px]">{{ currentDestination.name }}</h2>
            <p class="mt-2">{{ currentDestination.description }}</p>
          </div>
          <hr class="opacity-50" />
        </div>
        <div class="flex items-center space-x-32 mt-5">
          <div class="flex flex-col space-y-2">
            <p class="font-light text-xs">AVG. DISTANCE</p>
            <p class="text-2xl">{{ currentDestination.distance }}</p>
          </div>
          <div class="flex flex-col space-y-2">
            <p class="font-light text-xs">EST. TIME TRAVEL</p>
            <P class="text-2xl">{{ currentDestination.travel }}</P>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
