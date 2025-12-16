<!-- ~/app/pages/category/[id].vue -->
<script setup>
import { useServicesStore } from "@/stores/services";
import { useServiceCategoryStore } from "@/stores/serviceCategory";
import { useRoute } from "vue-router";

const route = useRoute();
const categoryId = Number(route.params.id);

const servicesStore = useServicesStore();
const serviceCategoryStore = useServiceCategoryStore();

// Store'dan to'g'ri getter'larni ishlatamiz
const services = servicesStore.getByCategoryId(categoryId);
const category = serviceCategoryStore.getCategoryById(categoryId);
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-7xl mx-auto">
      <!-- Header Section -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">
          {{ category?.name }}
        </h1>
        <div class="h-1 w-24 bg-orange-500 mx-auto rounded-full"></div>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <NuxtLink
          v-for="service in services"
          :key="service.id"
          :to="`/services/${service.id}`"
          class="group relative h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]"
        >
          <!-- Background Image -->
          <NuxtImg
            :src="service.image"
            :alt="service.name"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            @error="
              $event.target.src =
                'https://via.placeholder.com/800x600?text=Service+Image'
            "
          />

          <!-- Gradient Overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"
          ></div>

          <!-- Content -->
          <div class="absolute inset-0 p-8 flex flex-col justify-end">
            <h3
              class="text-3xl font-bold text-white mb-3 transform transition-transform duration-500 group-hover:translate-y-[-8px]"
            >
              {{ service.name }}
            </h3>
            <p
              class="text-gray-200 text-base line-clamp-3 transform transition-all duration-500 group-hover:line-clamp-4"
            >
              {{ service.description }}
            </p>

            <!-- Hover Arrow Indicator -->
            <div
              class="mt-4 flex items-center text-white opacity-0 group-hover:opacity-100 transform translate-x-[-20px] group-hover:translate-x-0 transition-all duration-500"
            >
              <span class="text-sm font-semibold mr-2">Learn More</span>
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-4 {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
