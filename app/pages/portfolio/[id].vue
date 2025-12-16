<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-10"
  >
    <div class="mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">
          {{ project.title }}
        </h1>
        <div class="h-1 w-24 bg-orange-500 mx-auto rounded-full"></div>
      </div>

      <!-- Gallery Grid -->
      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
      >
        <div
          v-for="img in project.images"
          :key="img"
          class="group relative overflow-hidden rounded-xl shadow-md bg-gray-200"
        >
          <NuxtImg
            :src="img"
            class="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />

          <!-- Overlay -->
          <div
            class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { useRoute } from "vue-router";
import { usePortfolio } from "@/stores/infrastructurePortfolio";
const route = useRoute();
const id = Number(route.params.id);
const projectStore = usePortfolio();
const project = projectStore.getById(id);
</script>
