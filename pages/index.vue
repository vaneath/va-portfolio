<template>
  <div class="bg-gray-800 overflow-hidden">
    <HeroSection v-if="home.heroSection.enabled" />
    <GithubContribution v-if="home.githubContributions.enabled" />
  </div>
</template>

<script setup>
const home = useAppConfig().home;

useSeoMeta({
  title: "home",
  description:
    "I'm Vaneath, as a web developer, I build web applications and websites.",
});
</script>
