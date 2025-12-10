<template>
  <section class="py-16 bg-gray-50" id="contact">
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:justify-between gap-12 items-stretch"
    >
      <!-- Left: Contact info + Map -->
      <div class="lg:w-1/2 flex flex-col space-y-6">
        <div>
          <h2 class="text-3xl font-bold text-gray-900">
            Start Your Project Today!
          </h2>
          <p class="text-gray-600 mt-2">
            Get a free consultation and professional solution for your building
            restoration needs. We're here to help!
          </p>

          <div class="space-y-2 text-gray-700 mt-4">
            <p class="flex items-center gap-2">
              <span class="text-xl">📞</span> (647) 342-8600
            </p>
            <p class="flex items-center gap-2">
              <span class="text-xl">✉️</span> info@rainforces.ca
            </p>
          </div>
        </div>

        <!-- Map embed -->
        <div class="w-full rounded-xl overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.875719130432!2d-79.24224617434385!3d43.77543861041582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d0544ca47d77%3A0x90f6d99f457a1022!2sRainforces%20Ltd.!5e0!3m2!1sen!2s!4v1765096739018!5m2!1sen!2s"
            width="100%"
            height="450"
            style="border: 0"
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <!-- Right: Contact form -->
      <div class="lg:w-1/2 w-full flex flex-col justify-center">
        <ContactForm />
      </div>
    </div>
  </section>
</template>
