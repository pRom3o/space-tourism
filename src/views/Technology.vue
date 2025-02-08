<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import NavBar from '@/components/NavBar.vue';
import { ref } from 'vue';
import * as data from '/data.json';

const technology = data.technology;
const currentTech = ref(technology[0]);

const switchTech = (index) => {
  currentTech.value = technology[index];
};
</script>

<template>
  <div class="md:bg-technology bg-technology-mobile h-screen w-screen bg-cover">
    <nav><NavBar /></nav>
    <div class="min-w-full h-5/6 flex items-center justify-center m-auto md:px-32 p-4 text-gray-50">
      <div
        class="md:h-3/4 w-full flex flex-col md:flex-row items-center justify-between p-4 md:space-x-10 space-y-10 md:space-y-0"
      >
        <div class="h-3/4 w-1/2 flex flex-col justify-between p-5" v-if="currentTech">
          <div class="w-full h-1/3 px-12">
            <h1 class="text-xl md:text-2xl text-gray-300">
              <span class="mr-2 text-[#B2BEB5]">03</span>SPACE LAUNCH 101
            </h1>
          </div>
          <div class="flex justify-evenly">
            <ul class="flex flex-col space-y-5">
              <li
                class="p-6 w-16 h-16 rounded-full border border-[#B2BEB5] flex text-2xl items-center cursor-pointer"
                v-for="(tech, index) in technology"
                :key="index"
                @click="switchTech(index)"
                :class="{ 'bg-white text-black': currentTech.name === tech.name }"
              >
                {{ index + 1 }}
              </li>
            </ul>
            <div class="w-2/3 space-y-5">
              <p class="text-sm text-[#b2beb5]">THE TERMINOLOGY....</p>
              <h2 class="uppercase md:text-3xl text-[#B2BEB5]">{{ currentTech.name }}</h2>
              <p class="w-2/3">{{ currentTech.description }}</p>
            </div>
          </div>
        </div>
        <div class="h-full w-1/2 flex justify-end">
          <img :src="currentTech.images['portrait']" alt="#" class="h-full w-2/3" />
        </div>
      </div>
    </div>
  </div>
</template>
