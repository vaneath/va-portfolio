// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: "vaneath - %s",
      charset: "utf-8",
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      viewport: "width=device-width, initial-scale=1",
      meta: [
        {
          key: "description",
          name: "description",
          content:
            "Hi, I'm Vaneath, a developer, guitarist, musician, programmer. I love to build things and solve problems. I'm currently working at BookMe+ as a junior full-stack developer, and also a student at the Cambodia Academy of Digital Technology.",
        },
      ],
    },
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  components: [
    "@/components",
    "@/components/home",
    "@/components/sub-components",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: false,
});
