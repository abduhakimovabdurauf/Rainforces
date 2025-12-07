<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { useServicesStore } from "~/stores/services";
import { useProjectsStore } from "~/stores/projects";
import { ref } from "vue";

const route = useRoute();
const router = useRouter();

const servicesStore = useServicesStore();
const projectsStore = useProjectsStore();

const id = Number(route.params.id);
const service = servicesStore.getById(id);

// Service topilmasa 404
if (!service) {
  router.push("/404");
}

// Shu service ga tegishli projectlar
const projects = projectsStore.getByServiceId(id);

// Lightbox state
const lightboxOpen = ref(false)
const currentImage = ref("")

const openLightbox = (img: string) => {
  currentImage.value = img
  lightboxOpen.value = true
}

const closeLightbox = () => {
  lightboxOpen.value = false
}
</script>

<template>
  <section class="max-w-7xl mx-auto px-6 py-16">
    <!-- TITLE -->
    <div class="grid md:grid-cols-2 gap-12 items-start">
      <div>
        <NuxtImg
          :src="service!.image"
          :alt="service!.name"
          class="rounded-tr-[80px] rounded-bl-[80px] shadow-lg w-full aspect-[4/3] object-cover"
        />
      </div>

      <div>
        <h1
          class="text-4xl font-bold text-gray-800 mb-4 text-center md:text-left"
        >
          {{ service!.name }}
        </h1>
        <p class="text-gray-700 leading-loose text-base">
          {{ service!.description }}
        </p>
      </div>
    </div>

    <!-- PORTFOLIO GALLERY -->
    <div v-if="projects.length" class="mt-20 w-full">
      <h2 class="text-3xl font-bold text-gray-800 mb-8">Project Portfolio</h2>
      <!-- Each project's images -->
      <div v-for="project in projects" :key="project.id" class="space-y-3">
        <p class="font-semibold text-gray-700">{{ project.title }}</p>

        <div class="flex flex-wrap gap-1">
          <NuxtImg
            v-for="img in project.images"
            :key="img"
            :src="img"
            width="150"
            height="150"
            class="shadow-md object-cover cursor-zoom-in transition duration-300"
            @click="openLightbox(img)"
          />
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <div
      v-if="lightboxOpen"
      class="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      @click.self="closeLightbox"
    >
      <img
        :src="currentImage"
        class="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
      />
      <button
        class="absolute top-5 right-5 text-white text-3xl font-bold"
        @click="closeLightbox"
      >
        &times;
      </button>
    </div>
  </section>

</template>
