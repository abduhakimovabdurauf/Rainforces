<script setup>
import { useHead } from "#app";

useHead({
  title:
    "About RainForces | Trusted Construction & Restoration Company in Canada",
  meta: [
    {
      name: "description",
      content:
        "Learn more about RainForces, a trusted leader in construction and building restoration services across Canada. Discover our team, experience, and commitment to quality.",
    },
    {
      name: "keywords",
      content:
        "about RainForces, construction company, restoration services, waterproofing, concrete work, Canada",
    },
    { name: "author", content: "RainForces Ltd." },
    {
      property: "og:title",
      content: "About RainForces | Trusted Construction & Restoration Company",
    },
    {
      property: "og:description",
      content:
        "Discover RainForces team, experience, and high-quality construction and restoration services across residential and commercial properties in Canada.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.rainforces.ca/about" },
    {
      property: "og:image",
      content: "https://www.rainforces.ca/images/logo.jpg",
    },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "About RainForces | Trusted Construction & Restoration Company",
    },
    {
      name: "twitter:description",
      content:
        "Discover RainForces team, experience, and high-quality construction and restoration services across residential and commercial properties in Canada.",
    },
    {
      name: "twitter:image",
      content: "https://www.rainforces.ca/images/logo.jpg",
    },
  ],
  link: [{ rel: "canonical", href: "https://www.rainforces.ca/about" }],
});
const features = [
  {
    title: "High Quality",
    description: "We provide top-notch services with guaranteed quality.",
    icon: "✓",
  },
  {
    title: "Fast Support",
    description: "Our team is available 24/7 to help you anytime.",
    icon: "⚡",
  },
  {
    title: "Affordable Pricing",
    description: "We offer competitive prices without compromising quality.",
    icon: "💰",
  },
  {
    title: "Trusted & Reliable",
    description: "Thousands of clients trust us for consistent results.",
    icon: "🏆",
  },
];
</script>

<template>
  <!-- ABOUT HERO SECTION -->
  <section class="py-20 bg-[#f9f9f9]">
    <div
      class="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-10"
    >
      <!-- IMAGE LEFT -->
      <div class="lg:w-1/2">
        <NuxtImg
          src="/images/about-banner-2.jpg"
          alt="About RainForces"
          class="rounded-full shadow-lg w-full object-cover"
        />
      </div>

      <!-- TEXT RIGHT -->
      <div class="lg:w-1/2 space-y-6">
        <h1 class="text-4xl font-bold text-gray-800">About RainForces</h1>
        <p>
          Over the years, RainForces has established itself as a trusted leader
          in the construction and restoration industry. Our company is built on
          a strong foundation of integrity, craftsmanship, and innovation. We
          consistently adapt to new technologies, materials, and building
          techniques to ensure our clients receive solutions that are not only
          durable but also cost-effective.
        </p>

        <p>
          Our team consists of skilled engineers, technicians, and construction
          specialists who bring together decades of combined experience. We are
          committed to maintaining the highest level of safety, quality control,
          and project management. Every project is carefully planned, monitored,
          and completed in accordance with industry standards and provincial
          regulations.
        </p>
        <div class="max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-6 rounded-2xl bg-white shadow-md">
            <p class="text-3xl font-bold text-[#019192]">18+</p>
            <p class="text-gray-700 mt-2">Years Experience</p>
          </div>
          <div class="p-6 rounded-2xl bg-white shadow-md">
            <p class="text-3xl font-bold text-[#f77c14]">500+</p>
            <p class="text-gray-700 mt-2">Projects Completed</p>
          </div>
          <div class="p-6 rounded-2xl bg-white shadow-md">
            <p class="text-3xl font-bold text-[#019192]">100%</p>
            <p class="text-gray-700 mt-2">Client Satisfaction</p>
          </div>
          <div class="p-6 rounded-2xl bg-white shadow-md">
            <p class="text-3xl font-bold text-[#f77c14]">24/7</p>
            <p class="text-gray-700 mt-2">Support Available</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FEATURES HIGHLIGHT SECTION -->
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-6 text-center">
      <h2 class="text-3xl font-bold text-gray-900 mb-6">Our Core Strengths</h2>
      <p class="text-gray-600 mb-12">
        Here’s why clients choose us over and over again.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="p-6 rounded-2xl bg-[#fff6e7] shadow-lg hover:shadow-xl transition duration-300"
        >
          <div class="text-4xl mb-3 text-orange-500">{{ feature.icon }}</div>
          <h3 class="text-xl font-semibold text-[#f77c14] mb-2">
            {{ feature.title }}
          </h3>
          <p class="text-gray-700 text-sm">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- TEXT + CHART SECTION -->
  <section class="py-20 bg-gray-50">
    <div
      class="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-10 items-center"
    >
      <div class="lg:w-1/2 space-y-4">
        <h2 class="text-3xl font-bold text-gray-900">Our Commitment</h2>
        <p class="text-gray-700 leading-relaxed">
          We maintain the highest level of safety, quality control, and project
          management. Every project is carefully planned, monitored, and
          completed in accordance with industry standards.
        </p>
        <p class="text-gray-700 leading-relaxed">
          Our team combines decades of experience to deliver reliable and
          durable solutions for residential, commercial, and industrial clients.
        </p>
      </div>
      <div class="lg:w-1/2">
        <ProjectsChart />
      </div>
    </div>
  </section>
</template>
