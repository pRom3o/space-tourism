<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { RouterLink, useRoute } from 'vue-router';
import NavBar from '@/components/NavBar.vue';
import data from '/data.json';
import { onMounted, ref, watch } from 'vue';

const route = useRoute();
const destinations = ref(null);

//function to get data based on current route

const getDestination = () => {
  const place = route.params.place; //gets place from route
  destinations.value = data.destinations[place]; //gets data for current destination
};

//gets data once page is mounted
onMounted(getDestination);
//watch for changes in route parameter
watch(
  () => route.params.place, //watches the 'place' param
  () => {
    getDestination(); //refetch data when parameter changes
  },
);
</script>

<template>
  <div class="md:bg-destination bg-destination-mobile h-screen w-screen bg-cover">
    <NavBar />
    <div class="flex items-center justify-center w-full px-72 h-2/3 text-white">
      <div class="w-1/2 flex flex-col">
        <p class="font-light flex text-2xl">
          01 <span class="font-medium ml-4">PICK YOUR DESTINATION</span>
        </p>
        <div class="bg-black w-full h-full"></div>
      </div>
      <div class="w-1/2 flex flex-col space-y-4" v-if="destinations">
        <ul class="w-full h-10">
          <li
            class="flex items-center"
            v-for="(item, key) in Object.keys(data.destinations)"
            :key="key"
          >
            <RouterLink :to="`/Destinations/${item}`">{{
              data.destinations[item].name
            }}</RouterLink>
          </li>
        </ul>
        <p class="font-semibold text-[100px]">{{ data.destinations.name }}</p>
        <p>
          {{ data.destinations.description }}
        </p>
        <hr class="border-gray-400 w-full" />
        <div class="flex items-center space-x-10">
          <div class="flex flex-col space-y-2 text-sm">
            <p class="font-light">AVG. DISTANCE</p>
            <p class="">{{ data.destinations.distance }}</p>
          </div>
          <div class="flex flex-col space-y-2 text-sm">
            <p class="font-light">EST. TRAVEL TIME</p>
            <p>{{ data.destinations.travel }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
