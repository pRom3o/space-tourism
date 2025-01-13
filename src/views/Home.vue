<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import NavBar from '@/components/NavBar.vue';
</script>

<template>
  <div class="md:bg-home bg-home-mobile h-screen w-screen bg-cover">
    <nav><NavBar /></nav>
    <div
      class="flex flex-col md:flex-row items-center justify-between w-full h-3/4 md:px-64 px-8 mt-4"
    >
      <div class="text-white w-full md:w-[350px] text-center md:text-start flex-col space-y-5">
        <p class="text-2xl font-light">SO, YOU WANT TO TRAVEL TO</p>
        <p class="font-medium md:text-[120px]">SPACE</p>
        <p class="font-light">
          Let's face it; if you want to go to space, you might as well genuinely go to outer space
          not hover kind of on the edge of it. Well sit back, and relax because we'll give you a
          truly out of this world experience!
        </p>
      </div>
      <div
        class="md:w-80 md:h-80 w-56 h-56 rounded-full p-4 bg-gray-200 flex items-center justify-center"
      >
        <h2 class="md:text-5xl text-3xl">Explore</h2>
      </div>
    </div>
  </div>
</template>
