<script setup lang="ts">
import { useHead } from '#app'

useHead({
  title: 'RainForces | Professional Construction & Restoration Services in Canada',
  meta: [
    {
      name: 'description',
      content: 'RainForces provides professional building restoration, waterproofing, concrete work, structural repairs, and high-quality construction services across residential and commercial properties in Canada.',
    },
    { name: 'keywords', content: 'construction, restoration, waterproofing, concrete, structural repairs, Canada, RainForces' },
    { name: 'author', content: 'RainForces Ltd.' },
    { property: 'og:title', content: 'RainForces | Professional Construction & Restoration Services' },
    { property: 'og:description', content: 'Providing top-quality building restoration, waterproofing, concrete work, and structural repairs across residential and commercial properties.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://www.rainforces.ca/' },
    { property: 'og:image', content: 'https://www.rainforces.ca/images/logo.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'RainForces | Professional Construction & Restoration Services' },
    { name: 'twitter:description', content: 'Providing top-quality building restoration, waterproofing, concrete work, and structural repairs across residential and commercial properties.' },
    { name: 'twitter:image', content: 'https://www.rainforces.ca/images/logo.jpg' },
  ],
  link: [
    { rel: 'canonical', href: 'https://www.rainforces.ca/' }
  ]
})
</script>

<template>
  <AppHero />
  <AppAbout />
  <AppServices />
  <AppWhyChooseUS />
  <AppPartners />
</template>
