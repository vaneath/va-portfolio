<template>
  <div>
    {{ projects.value }}
  </div>
</template>

<script setup>
const { data: projects } = await useAsyncData("projects", () =>
  queryContent("projects").find(),
);
</script>
