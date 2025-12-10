<script setup lang="ts">
import { ref } from "vue";
import { useServicesStore } from "~/stores/services";

const servicesStore = useServicesStore();
const services = servicesStore.get;

const navItems = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about" },
];

const isOpen = ref(false);
const isDropdownOpen = ref(false);

const closeMenu = () => {
  isOpen.value = false; 
  isDropdownOpen.value = false;
};
</script>

<template>
  <header class="w-full shadow-lg bg-white z-40">
    <!-- Top Bar -->
    <div class="bg-[#019192] text-white text-[17px]">
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col sm:flex-row justify-end items-end space-y-2 sm:space-y-0 sm:space-x-6"
      >
        <p class="font-medium">
          24/7 Emergency Services
          <span class="">| </span>
          <a href="tel:6473428600" class="hover:underline">(647) 342-8600</a>
        </p>
      </div>
    </div>

    <!-- Navbar -->
    <nav class="border-b border-gray-100 sticky top-0 z-50 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="flex justify-between items-center h-20">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center">
            <NuxtImg src="/images/logo.jpg" alt="Logo" width="200" />
          </NuxtLink>

          <!-- Desktop Menu -->
          <div class="hidden lg:flex items-center space-x-8">
            <div class="flex space-x-6 text-base font-medium relative">
              <NuxtLink
                v-for="item in navItems"
                :key="item.name"
                :to="item.link"
                class="text-lg text-slate-700 hover:text-orange-500 transition"
              >
                {{ item.name }}
              </NuxtLink>

              <div class="relative group">
                <!-- Button -->
                <button
                  class="text-lg text-slate-700 hover:text-orange-500 transition font-medium flex items-center gap-1"
                >
                  Services & Projects
                  <svg
                    class="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <!-- Dropdown Menu -->
                <ul
                  class="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg border rounded-md py-2 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 z-50"
                >
                  <li
                    v-for="service in services"
                    :key="service.id"
                    class="px-4 py-2 hover:bg-orange-50"
                  >
                    <NuxtLink
                      :to="`/services/${service.id}`"
                      class="block text-gray-700 hover:text-orange-500 transition"
                    >
                      {{ service.name }}
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Desktop Contact -->
          <a
            href="#contact"
            class="hidden lg:inline-block px-4 py-2 font-extrabold text-lg text-[#f77c14] hover:scale-105 transition"
          >
            Contact Us
          </a>

          <!-- Mobile Hamburger -->
          <button
            @click="isOpen = !isOpen"
            class="lg:hidden text-slate-600 hover:text-orange-500 focus:outline-none"
          >
            <svg
              v-if="!isOpen"
              class="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>

            <svg
              v-else
              class="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div
          v-show="isOpen"
          class="lg:hidden absolute left-0 right-0 bg-white border-b border-gray-200 shadow-xl transition-all duration-300 py-4 px-4 space-y-4"
        >
          <NuxtLink
            v-for="item in navItems"
            :key="'mob-' + item.name"
            :to="item.link"
            @click="closeMenu"
            class="block text-lg font-medium text-slate-700 hover:text-orange-500 transition"
          >
            {{ item.name }}
          </NuxtLink>

          <!-- Mobile Dropdown -->
          <div class="space-y-2">
            <p class="text-lg font-medium text-slate-700">
              Services & Projects
            </p>
            <ul class="pl-4">
              <li
                v-for="service in services"
                :key="'mob-service-' + service.id"
              >
                <NuxtLink
                  :to="`/services/${service.id}`"
                  @click="closeMenu"
                  class="block py-1 text-gray-700 hover:text-orange-500 transition"
                >
                  {{ service.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <a
            href="#contact"
            @click="closeMenu"
            class="block text-lg font-bold text-[#f77c14] hover:text-orange-600 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>
