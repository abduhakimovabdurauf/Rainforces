<script setup lang="ts">
import { useServicesStore } from "~/stores/services";

const servicesStore = useServicesStore();
const services = servicesStore.get;
</script>

<template>
  <section class="py-16 space-y-20 max-w-7xl mx-auto px-6" id="services">
    <p class="text-3xl font-bold text-center">Services we Provide</p>
    <div
      v-for="(service, index) in services"
      :key="service.id"
      class="grid md:grid-cols-2 gap-10 mb-[50px]"
    >
      <!-- TEXT -->
      <div :class="index % 2 === 1 ? 'md:order-2' : ''">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">
          {{ service.name }}
        </h2>
        <p class="text-gray-600 text-base leading-relaxed">
          {{ service.description }}
        </p>
        <NuxtLink
          :to="`/services/${service.id}`"
          class="inline-block px-4 py-2 rounded-3xl text-[#f77c14] font-bold mt-6 border-2 border-[#f77c14] transition-all duration-300 hover:bg-[#f77c14] hover:text-white hover:shadow-md"
        >
          Learn More
        </NuxtLink>
      </div>

      <!-- IMAGE -->
      <div :class="index % 2 === 1 ? 'md:order-1' : ''" class="flex">
        <NuxtImg
          :src="service.image"
          alt="service image"
          class="rounded-tr-[80px] rounded-bl-[80px] shadow-lg w-full aspect-[4/3] object-cover"
        />
      </div>
    </div>
  </section>
</template>
