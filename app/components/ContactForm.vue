<script setup lang="ts">
import { useContactForm } from '@/composables/useContactForm'

const {
  name,
  email,
  phone,
  message,
  submitting,
  success,
  error,
  handleSubmit
} = useContactForm()
</script>

<template>
  <form @submit.prevent="handleSubmit" class="bg-white p-8 rounded-3xl shadow-md w-full">
    <h3 class="text-2xl font-bold mb-6">Contact Us</h3>

    <div class="mb-4">
      <label class="block text-gray-700 font-medium mb-1">Name</label>
      <input v-model="name" type="text" required class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"/>
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 font-medium mb-1">Email</label>
      <input v-model="email" type="email" required class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"/>
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 font-medium mb-1">Phone</label>
      <input v-model="phone" type="tel" required class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"/>
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 font-medium mb-1">Message</label>
      <textarea v-model="message" required rows="4" class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"></textarea>
    </div>

    <button type="submit" :disabled="submitting" class="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-colors duration-300">
      {{ submitting ? 'Sending...' : 'Send Message' }}
    </button>

    <p v-if="success" class="text-green-600 mt-4">Message sent successfully!</p>
    <p v-if="error" class="text-red-600 mt-4">{{ error }}</p>
  </form>
</template>
