<template>
  <section
    class="relative w-full min-h-[500px] md:h-[650px] bg-[url('/images/banner-1.jpg')] bg-cover bg-center flex items-center"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/50"></div>

    <!-- Content -->
    <div
      class="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-white text-center flex flex-col items-center"
    >
      <h1 class="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
        General Contractor
      </h1>

      <p class="text-base sm:text-lg md:text-xl font-medium mb-3">
        General Contractor and Professional Construction
      </p>

      <p class="max-w-2xl text-sm sm:text-base md:text-lg opacity-90 mb-8">
        Comprehensive building restoration and rehabilitation services in Ontario.
        Over 18 years of experience delivering quality results for residential and
        commercial properties.
      </p>

      <!-- Buttons -->
      <div
        class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
      >
        <a
          href="#contact"
          class="px-6 py-3 bg-[#019192] text-white font-semibold rounded-3xl hover:bg-[#017d7e] transition"
        >
          Contact Us
        </a>

        <a href="#services"
          class="px-6 py-3 bg-[#f77c14] text-white font-semibold rounded-3xl hover:bg-orange-600 transition"
        >
          View Our Work
        </a>
      </div>
    </div>
  </section>
</template>
