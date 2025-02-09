<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import NavBar from '@/components/NavBar.vue';
import { ref } from 'vue';
import * as data from '/data.json';

const technology = data.technology; // store technology array from data.json import
const currentTech = ref(technology[0]); // set the current display to the first object in the array

// function to switch objects displaying details based on index
const switchTech = (index) => {
  currentTech.value = technology[index];
};
</script>

<template>
  <div class="md:bg-technology bg-technology-mobile h-screen w-screen bg-cover">
    <nav><NavBar /></nav>
    <div class="min-w-full h-5/6 flex items-center justify-center m-auto md:px-32 p-4 text-gray-50">
      <div
        class="md:h-3/4 min-h-3/4 w-full flex flex-col md:flex-row items-center justify-between p-4 md:space-x-10 space-y-10 md:space-y-0"
      >
        <!-- div to render all details of object {image excluded} -->
        <div
          class="md:h-3/4 md:w-1/2 sm:w-full max-h-1/2 flex flex-col justify-between md:p-5 space-y-5"
          v-if="currentTech"
        >
          <div class="w-full md:px-12">
            <h1 class="text-2xl text-gray-50">
              <span class="mr-2 text-[#B2BEB5]">03</span>SPACE LAUNCH 101
            </h1>
          </div>
          <div class="flex md:justify-evenly justify-between items-center">
            <!-- ul for redering indexes -->
            <ul class="flex flex-col space-y-5">
              <button
                class="md:p-6 md:w-16 md:h-16 p-3 rounded-full border border-[#B2BEB5] flex md:text-2xl text-xl items-center"
                v-for="(tech, index) in technology"
                :key="index"
                @click="switchTech(index)"
                :class="{ 'bg-white text-black': currentTech.name === tech.name }"
              >
                {{ index + 1 }}
              </button>
            </ul>
            <!-- div for texts -->
            <div class="md:w-2/3 w-full space-y-5 md:px-0 px-5">
              <p class="md:text-sm text-xs text-[#b2beb5]">THE TERMINOLOGY....</p>
              <h2 class="uppercase text-3xl">{{ currentTech.name }}</h2>
              <p class="md:w-2/3 md:text-base text-sm">{{ currentTech.description }}</p>
            </div>
          </div>
        </div>
        <!-- div to render object image -->
        <div class="md:h-full md:w-1/2 flex md:justify-end justify-center">
          <img
            :src="currentTech.images['portrait']"
            alt="#"
            class="md:w-2/3 md:h-full h-[300px] w-[300px]"
          />
        </div>
      </div>
    </div>
  </div>
</template>
