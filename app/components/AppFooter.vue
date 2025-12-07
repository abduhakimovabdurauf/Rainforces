<script setup lang="ts">
import { useServicesStore } from "~/stores/services";

const servicesStore = useServicesStore();
const services = servicesStore.get;
</script>

<template>
  <footer class="text-gray-700 pt-16 pb-6 border-t bg-white">
    <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-12">

      <!-- SERVICES LIST -->
      <div class="w-full md:w-1/3">
        <h3 class="text-gray-900 text-xl font-semibold mb-4">Our Services</h3>
        <ul class="space-y-2">
          <li v-for="service in services" :key="service.id" class="border-b">
            <NuxtLink
              :to="`/services/${service.id}`"
              class="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {{ service.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- LOGO + ABOUT -->
      <div class="w-full md:w-1/3 space-y-4 text-center md:text-left">
        <NuxtImg src="/images/logo.jpg" alt="Rainforces Logo" class="w-40 mx-auto md:mx-0" />
        <p class="text-gray-600 leading-relaxed">
          Rainforces provides building restoration, waterproofing,
          concrete work, structural repairs, and high-quality construction
          services for residential and commercial properties.
        </p>
      </div>

      <!-- CONTACT -->
      <div class="w-full md:w-1/3 text-center md:text-left">
        <h3 class="text-gray-900 text-xl font-semibold mb-4">Contact</h3>

        <a href="tel:6473428600" class="flex items-center justify-center md:justify-start gap-2 text-gray-600">
          📞 (647) 342-8600
        </a>
        <a href="mailto:info@rainforces.ca" class="flex items-center justify-center md:justify-start gap-2 text-gray-600 mt-2">
          ✉️ info@rainforces.ca
        </a>
        <p class="mt-2">Mon - Fri: 8:00 AM - 6:00 PM</p>
      </div>
    </div>

    <!-- COPYRIGHT -->
    <div class="border-t mt-12 pt-6 text-center text-gray-500 text-sm">
      © 2007 - {{ new Date().getFullYear() }} Rainforces Ltd. All rights reserved.
    </div>
  </footer>
</template>
