<template>
  <div>
    <header>
      <div data-aos="fade-up" class="text-center">
        <h2 class="text-2xl tracking-tight font-extrabold text-gray-200">
          {{ projectConfig.title }}
        </h2>
        <p class="mt-2 px-2 max-w-2xl mx-auto text-sm leading-7 text-gray-400">
          {{ projectConfig.description }}
        </p>
      </div>
    </header>
    <section>
      <div
        data-aos="zoom-in"
        class="select-none px-4 items-center justify-center sm:justify-start overflow-hidden flex pt-4"
      >
        <nav
          class="flex flex-wrap items-center justify-center flex-row space-x-2 sm:space-x-4"
          aria-label="Tabs"
        >
          <template v-for="tech in techs" :key="tech">
            <button
              @click="currentTech = tech"
              :class="{ 'bg-gray-900 text-gray-300': tech === currentTech }"
              class="flex text-gray-300 focus:outline-none focus:ring-transparent focus:ring-offset-transparent hover:text-hot-pink px-3 py-2 font-medium text-sm rounded-xl"
            >
              {{ tech }}
            </button>
          </template>
        </nav>
      </div>
    </section>
    <section>
      <div
        data-aos="zoom-in"
        class="mt-5 gap-4 mx-4 grid max-w-none lg:grid-cols-3"
      >
        <template v-for="project in projects" :key="project">
          <template v-if="project.techs.includes(currentTech)">
            <pre>{{ project }}</pre>
          </template>
        </template>
      </div>
    </section>
  </div>
</template>

<script setup>
const projectConfig = useAppConfig().project;
const techs = projectConfig.techs;

const currentTech = ref(techs[0]);

const { data: projects } = await useAsyncData("projects", () =>
  queryContent("/projects").find()
);

// let myProjects = Object.keys(projects).map((key) => projects[key]);

// console.log(typeof myProjects);

// let filterProjects = computed(() => {
//   if (currentTech.value === "all") {
//     return projects;
//   }

//   return myProjects.filter((project) =>
//     project.techs.includes(currentTech.value)
//   );
// });

useSeoMeta({
  title: "projects",
  description:
    "I'm Vaneath, as a web developer, I build web applications and websites.",
});
</script>
