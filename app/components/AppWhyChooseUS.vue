<script setup lang="ts">
// Feature ma'lumotlari
const features = [
  {
    title: 'High Quality',
    description: 'We provide top-notch services with guaranteed quality.',
    icon: '✓' // Siz bu yerga SVG yoki ikon qo‘shishingiz mumkin
  },
  {
    title: 'Fast Support',
    description: 'Our team is available 24/7 to help you anytime.',
    icon: '⚡'
  },
  {
    title: 'Affordable Pricing',
    description: 'We offer competitive prices without compromising quality.',
    icon: '💰'
  },
  {
    title: 'Trusted & Reliable',
    description: 'Thousands of clients trust us for consistent results.',
    icon: '🏆'
  }
]
</script>

<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
      <p class="text-gray-600 mb-12">
        Discover why our clients love working with us and keep coming back.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="p-6 py-8 rounded-[30px] bg-[#fff6e7] shadow-md relative overflow-hidden"
        >
          <div class="text-3xl mb-4 text-orange-500">{{ feature.icon }}</div>
          <h3 class="text-2xl font-semibold text-[#f77c14]">{{ feature.title }}</h3>
          <p class="text-black font-medium mt-2">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
