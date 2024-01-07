<template>
  <div class="bg-gray-800 overflow-hidden">
    <HeroSection v-if="config.heroSection.enabled" />
    <GithubContribution />
  </div>
</template>

<script setup>
const config = useAppConfig();

useSeoMeta({
  title: "home",
  description: "I'm Vaneath, as a web developer, I build web applications and websites.",
});
</script>
