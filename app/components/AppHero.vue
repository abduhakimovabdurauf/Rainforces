<template>
  <section
    class="relative w-full min-h-[800px] md:h-[650px] bg-[url('/images/banner-1.jpg')] bg-cover bg-center flex items-center"
  >
    <div class="absolute inset-0 bg-black/50"></div>

    <div
      class="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-white text-center flex flex-col items-center"
    >
      <h1 class="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
        General Contractor and Professional Construction
      </h1>

      <p class="max-w-2xl text-sm sm:text-base md:text-lg opacity-90 mb-8">
        Comprehensive building restoration and rehabilitation services in
        Ontario. Over 18 years of experience delivering quality results for
        residential and commercial properties.
      </p>

      <!-- Buttons -->
      <div
        class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center mb-10"
      >
        <a
          href="#contact"
          class="px-6 py-3 bg-[#019192] text-white font-semibold rounded-3xl hover:bg-[#017d7e] transition"
        >
          Contact Us
        </a>

        <a
          href="#services"
          class="px-6 py-3 bg-[#f77c14] text-white font-semibold rounded-3xl hover:bg-orange-600 transition"
        >
          View Our Work
        </a>
      </div>

      <form
        @submit.prevent="handleSubmit"
        class="w-full max-w-4xl bg-white/40 backdrop-blur-lg p-6 mt-6 md:mt-20 rounded-[50px] text-gray-900 flex flex-col md:flex-row gap-4 md:gap-3 items-center shadow-lg"
      >
        <!-- Name -->
        <input
          v-model="name"
          type="text"
          placeholder="Name"
          required
          class="flex-1 w-full p-3 rounded-3xl border border-gray-300 focus:ring-2 focus:ring-[#019192] focus:outline-none"
        />

        <!-- Email -->
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          required
          class="flex-1 w-full p-3 rounded-3xl border border-gray-300 focus:ring-2 focus:ring-[#019192] focus:outline-none"
        />

        <!-- Phone -->
        <input
          v-model="phone"
          type="tel"
          placeholder="Phone"
          required
          class="flex-1 w-full p-3 rounded-3xl border border-gray-300 focus:ring-2 focus:ring-[#019192] focus:outline-none"
        />

        <!-- Message -->
        <input
          v-model="message"
          type="text"
          placeholder="Message"
          required
          class="flex-1 w-full p-3 rounded-3xl border border-gray-300 focus:ring-2 focus:ring-[#019192] focus:outline-none"
        />

        <!-- Button -->
        <button
          type="submit"
          :disabled="submitting"
          class="w-full md:w-auto px-8 py-3 bg-[#019192] hover:bg-[#017d7e] text-white font-semibold rounded-3xl transition"
        >
          {{ submitting ? "Sending..." : "Send" }}
        </button>
      </form>

      <!-- Messages -->
      <p v-if="success" class="text-green-300 mt-4">
        Message sent successfully!
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useContactForm } from "@/composables/useContactForm";

const { name, email, phone, message, submitting, success, handleSubmit } =
  useContactForm();
</script>
