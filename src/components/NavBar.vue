<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue';
import { useRoute, RouterLink } from 'vue-router';

const navs = ref([
  { id: '00', name: 'Home', path: '/' },
  { id: '01', name: 'Destination', path: '/Destination' },
  { id: '02', name: 'Crew', path: '/Crew' },
  { id: '03', name: 'Technology', path: '/Technology' },
]);

const route = useRoute();

const isActive = (path) => route.path === path;

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <div class="h-20 w-screen">
    <div class="w-full flex items-center">
      <div class="w-1/2 flex items-center relative p-4">
        <p class="md:mr-24">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48">
            <g fill="none" fill-rule="evenodd">
              <circle cx="24" cy="24" r="24" fill="#FFF" />
              <path
                fill="#0B0D17"
                d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
              />
            </g>
          </svg>
        </p>
        <hr class="max-w-[700px] border-gray-500 absolute left-[15%] z-10 hidden" />
      </div>
      <div
        class="backdrop-blur-lg md:max-w-1/2 lg:w-1/2 text-white px-16 ml-16 hidden md:inline-block"
      >
        <ul class="flex items-center md:justify-around space-x-5">
          <li
            v-for="items in navs"
            :key="items.id"
            :class="{ 'border-b-white border-b-2': isActive(items.path) }"
            class="hover:border-b-white hover:border-b-2 transition-all ease py-4"
          >
            <RouterLink :to="items.path" class="flex gap-1"
              ><p class="font-semibold">{{ items.id }}</p>
              {{ items.name }}</RouterLink
            >
          </li>
        </ul>
      </div>
      <div class="md:hidden fixed top-0 right-0 flex items-center justify-center">
        <button
          class="p-4 transition-all ease-in-out z-10"
          @click="toggleMenu"
          :class="{ 'rotate-45': isMenuOpen, 'rotate-0': !isMenuOpen }"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" v-if="!isMenuOpen">
            <g fill="#D0D6F9" fill-rule="evenodd">
              <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
            </g>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" v-else>
            <g fill="#D0D6F9" fill-rule="evenodd">
              <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
              <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
            </g>
          </svg>
        </button>

        <!-- dropdown menu -->
        <div class="text-center flex items-center justify-center text-white">
          <Transition name="dropdown" appear>
            <TransitionGroup
              tag="ul"
              name="fade"
              appear
              v-if="isMenuOpen"
              class="flex flex-col items-center justify-center h-screen w-screen my-auto space-y-5 absolute top-0 right-0 backdrop-blur-sm transition-all duration-300 ease-in-out"
            >
              <li
                v-for="items in navs"
                :key="items.id"
                :class="{ 'border-b-white border-b-2': isActive(items.path) }"
                class="hover:border-b-white hover:border-b-2 transition-all ease md:py-6"
              >
                <RouterLink :to="items.path" class="flex gap-2 text-lg"
                  ><p class="font-bold">{{ items.id }}</p>
                  {{ items.name }}</RouterLink
                >
              </li>
            </TransitionGroup>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.rotate-0 {
  transform: rotate(0deg);
  transition: all 0.4s ease-in-out;
}

.rotate-45 {
  transform: rotate(90deg);
  transition: all 0.4s ease-in-out;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(100px) scale(0.85);
}

.fade-leave-from {
  opacity: 1;
  transform: translateX(-70px) scale(0.86);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.6s ease-in-out 0.2s;
}

.dropdown-enter-to,
.dropdown-leave-from {
  opacity: 1;
  transform: scale(1);
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.6s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-50px) scale(0.95);
}
</style>
