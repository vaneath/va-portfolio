// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "apple-touch-icon",
          type: "image/png",
          href: "/images/vaneath.png",
        },
      ],
      meta: [
        {
          key: "description",
          name: "description",
          content:
            "Hi, I'm Vaneath, a developer, guitarist, musician, programmer. I love to build things and solve problems. I'm currently working at BookMe+ as a junior full-stack developer, and also a student at the Cambodia Academy of Digital Technology.",
        },
        {
          hid: "description",
          name: "description",
          content:
            "Hi, I'm Vaneath, a developer, guitarist, musician, programmer. I love to build things and solve problems. I'm currently working at BookMe+ as a junior full-stack developer, and also a student at the Cambodia Academy of Digital Technology.",
        },
        { hid: "og:title", property: "og:title", content: "Vaneath" },
        { hid: "og:url", property: "og:url", content: "https://vaneath.com" },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "Hi, I'm Vaneath, a developer, guitarist, musician, programmer. I love to build things and solve problems. I'm currently working at BookMe+ as a junior full-stack developer, and also a student at the Cambodia Academy of Digital Technology.",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://vaneath.com/images/vaneath.png",
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "website",
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
  modules: ["@nuxt/content", "nuxt-schema-org"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    multiAvatarApiKey: "HyN9v0JeFp2imV",
  },
  site: {
    url: "https://vaneath.com",
    name: "Vaneath",
  },
  ssr: false,
});
