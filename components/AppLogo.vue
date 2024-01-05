<template>
  <div
    class="font-extrabold hover:text-hot-pink text-3xl animation-logo tracking-tighter text-yellow-600"
  >
    {{ config.name[0].toLowerCase() }}
  </div>
</template>

<script setup>
const config = useAppConfig();
</script>

<style scoped>
.animation-logo {
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(-5%);
    animationtimingfunction: cubic-bezier(0.4, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animationtimingfunction: cubic-bezier(0, 0, 0.2, 1);
  }
}
</style>
