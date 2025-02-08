<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue';
import NavBar from '@/components/NavBar.vue';
import * as data from '/data.json';

const Crew = data.crew; //stores imported crew array
const currentCrew = ref(Crew[0]); //sets current display to the first object in the array

// Function to update the crew when an item is clicked
const selectCrew = (name) => {
  const crew = Crew.find((item) => item.name === name);
  if (crew) {
    currentCrew.value = crew;
  }
};
</script>

<template>
  <div class="md:bg-crew bg-crew-mobile h-screen w-screen bg-cover">
    <NavBar />
    <div class="min-w-full h-5/6 flex items-center justify-center m-auto md:px-32 p-4 text-gray-50">
      <div
        class="md:h-3/4 w-full flex flex-col md:flex-row items-center justify-center p-4 md:space-x-10 space-y-10 md:space-y-0"
      >
        <div class="h-full md:w-[500px] w-full flex flex-col p-4 space-y-3" v-if="currentCrew">
          <div class="w-full h-1/2">
            <h1 class="text-xl md:text-2xl">
              <span class="mr-2 text-[#B2BEB5]">02</span>MEET YOUR CREW
            </h1>
          </div>
          <div class="w-full h-full flex flex-col md:space-y-10 space-y-5">
            <h2 class="uppercase md:text-3xl text-[#B2BEB5]">{{ currentCrew.role }}</h2>
            <h2 class="uppercase md:text-6xl text-2xl font-medium">{{ currentCrew.name }}</h2>
            <p class="sm:text-sm md:text-base">
              {{ currentCrew.bio }}
            </p>
          </div>
          <ul class="flex space-x-5" v-if="currentCrew">
            <li
              v-for="(crew, index) in Crew"
              :key="index"
              class="space-x-5"
              @click="selectCrew(crew.name)"
            >
              <div
                class="h-4 w-4 rounded-full border"
                :v-model="crew.name"
                :class="{ 'bg-white': currentCrew.name === crew.name }"
              ></div>
            </li>
          </ul>
        </div>
        <div class="md:h-full md:w-1/3 w-full flex items-center justify-center">
          <img :src="currentCrew.images['png']" alt="#" class="h-[250px] md:h-[500px]" />
        </div>
      </div>
    </div>
  </div>
</template>
