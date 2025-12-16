<!-- ~/app/components/AboutSection.vue -->
<template>
  <section class="bg-gray-50 py-16 px-6">
    <div class="max-w-7xl mx-auto">
      <!-- 2 ustunli ABOUT qismi -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <!-- MATN QISMI -->
        <div>
          <h2 class="text-3xl font-bold mb-4">About RainForces</h2>

          <div
            class="text-gray-700 leading-relaxed space-y-4 text-[15px] md:text-base"
          >
            <p>
              Over the years, RainForces has established itself as a trusted
              leader in the construction and restoration industry. Our company
              is built on a strong foundation of integrity, craftsmanship, and
              innovation. We consistently adapt to new technologies, materials,
              and building techniques to ensure our clients receive solutions
              that are not only durable but also cost-effective.
            </p>

            <p>
              Our team consists of skilled engineers, technicians, and
              construction specialists who bring together decades of combined
              experience. We are committed to maintaining the highest level of
              safety, quality control, and project management. Every project is
              carefully planned, monitored, and completed in accordance with
              industry standards and provincial regulations.
            </p>

            <p>
              At RainForces, we understand that every building tells a story—and
              our goal is to preserve, protect, and enhance that story. Whether
              it’s structural reinforcement, exterior restoration,
              waterproofing, or large-scale rehabilitation, we approach each job
              with meticulous attention to detail.
            </p>

            <p>
              As a customer-focused company, we believe in transparency,
              communication, and long-term relationships. Many of our clients
              have been with us for years, trusting us with multiple projects
              across different properties. Their continued loyalty is a
              testament to the consistency and reliability of our work.
            </p>

            <p>
              Looking ahead, RainForces remains dedicated to expanding our
              services, improving our processes, and investing in modern
              construction technologies to better serve residential, commercial,
              and industrial clients across Ontario. With a proven track record
              and a forward-thinking approach, we are committed to shaping
              stronger, safer, and more resilient communities.
            </p>
          </div>
        </div>

        <!-- RASM QISMI -->
        <div class="flex flex-col justify-between items-end">
          <NuxtImg
            src="/images/contactbanner.webp"
            alt="About RainForces"
            class="rounded-3xl shadow-lg w-full object-cover"
          />

          <!-- <ClientOnly> -->
            <ProjectsChart/>
          <!-- </ClientOnly> -->
        </div>
      </div>

      <!-- COUNT CARDS -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
        <!-- CARD 1 -->
        <div
          class="p-6 py-8 rounded-3xl bg-[#e0f4f3] shadow-md relative overflow-hidden"
        >
          <div
            class="absolute top-4 right-4 bg-white/70 p-2 rounded-full shadow"
          >
            <span class="text-[#019192] text-xl">🌿</span>
          </div>
          <p class="text-3xl font-bold text-[#019192]">18+</p>
          <p class="text-black font-medium mt-2">Years Experience</p>
        </div>

        <!-- CARD 2 -->
        <div
          class="p-6 py-8 rounded-3xl bg-[#fff1e6] shadow-md relative overflow-hidden"
        >
          <div
            class="absolute top-4 right-4 bg-white/70 p-2 rounded-full shadow"
          >
            <span class="text-[#f77c14] text-xl">📁</span>
          </div>
          <p class="text-3xl font-bold text-[#f77c14]">500+</p>
          <p class="text-black font-medium mt-2">Projects Completed</p>
        </div>

        <!-- CARD 3 -->
        <div
          class="p-6 py-8 rounded-3xl bg-[#e6f5f7] shadow-md relative overflow-hidden"
        >
          <div
            class="absolute top-4 right-4 bg-white/70 p-2 rounded-full shadow"
          >
            <span class="text-[#019192] text-xl">⭐</span>
          </div>
          <p class="text-3xl font-bold text-[#019192]">100%</p>
          <p class="text-black font-medium mt-2">Client Satisfaction</p>
        </div>

        <!-- CARD 4 -->
        <div
          class="p-6 py-8 rounded-3xl bg-[#fff6e7] shadow-md relative overflow-hidden"
        >
          <div
            class="absolute top-4 right-4 bg-white/70 p-2 rounded-full shadow"
          >
            <span class="text-[#f77c14] text-xl">⏱️</span>
          </div>
          <p class="text-3xl font-bold text-[#f77c14]">24/7</p>
          <p class="text-black font-medium mt-2">Support Available</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
