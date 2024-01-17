// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      meta: [
        {
          key: "description",
          name: "description",
          content:
            "Hi, I'm Vaneath, a developer, guitarist, musician, programmer. I love to build things and solve problems. I'm currently working at BookMe+ as a junior full-stack developer, and also a student at the Cambodia Academy of Digital Technology.",
        },
      ],
      titleTemplate: "vaneath - %s",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  components: [
    "@/components",
    "@/components/home",
    "@/components/sub-components",
  ],
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  modules: ["@nuxt/content"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    multiAvatarApiKey: "HyN9v0JeFp2imV",
  },
  ssr: false,
});
