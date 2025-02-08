<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
// import { RouterLink } from 'vue-router';
import NavBar from '@/components/NavBar.vue';
import * as data from '/data.json';
import { ref } from 'vue';

const destination = data.destinations; // Ensure this is the correct format and data structure

const currentDestination = ref(destination[0]); // Sets the current destination to the first object in destination array

// Function to update the destination when an item is clicked
const selectDestination = (name) => {
  const dest = destination.find((item) => item.name === name);
  if (dest) {
    currentDestination.value = dest;
  }
};
</script>

<template>
  <div class="md:bg-destination bg-destination-mobile w-screen h-screen bg-cover">
    <nav><NavBar /></nav>
    <div
      class="min-w-full md:h-5/6 sm:h-full justify-around flex lg:flex-row flex-col items-center md:px-10 text-white"
    >
      <div class="flex flex-col items-center md:items-start space-y-10 mr-8">
        <h1 class="flex text-lg lg:text-xl font-light">
          01<span class="font-semibold ml-2">PICK YOUR DESTINATION</span>
        </h1>
        <img
          class="lg:w-[380px] lg:h-[380px] h-[300px]"
          :src="currentDestination.images['png']"
          :alt="currentDestination.name"
        />
      </div>
      <div
        class="h-2/3 lg:max-w-1/2 px-4 flex flex-col md:space-y-5 space-y-3"
        v-if="currentDestination"
      >
        <ul class="flex space-x-5 md:justify-start justify-center">
          <li
            class="p-3 cursor-pointer"
            v-for="(dest, index) in destination"
            :key="index"
            @click="selectDestination(dest.name)"
            :class="{
              'border-b border-white': currentDestination.name === dest.name,
            }"
          >
            {{ dest.name }}
          </li>
        </ul>
        <div class="space-y-5 p-2" v-if="currentDestination">
          <h2 class="md:text-9xl md:font-semibold font-extrabold text-4xl">
            {{ currentDestination.name }}
          </h2>
          <p class="max-w-[400px] lg:text-lg">
            {{ currentDestination.description }}
          </p>
        </div>
        <hr class="w-full" />
        <div class="flex justify-between">
          <div class="flex flex-col space-y-3">
            <p>AVG. DISTANCE</p>
            <p>{{ currentDestination.distance }}</p>
          </div>
          <div class="flex flex-col space-y-3">
            <p>EST. TRAVEL TIME</p>
            <p>{{ currentDestination.travel }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
