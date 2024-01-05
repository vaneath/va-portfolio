export default defineAppConfig({
  name: "vaneath",
  blog: {
    enabled: true,
    route: "/blogs",
    slug: "blogs",
  },
  domain: "vaneath.com",
  email: "vaneathzz@gmail.com",
  heroSection: {
    enabled: true,
    blogToggle: {
      enabled: true,
      leftText: "i write blogs",
      rightText: "take a look",
    },
    title: "Hi, I'm Vaneath",
    description: "I'm a full-stack developer",
    workedAt: {
      enabled: true,
      meta: [
        {
          name: "BookMe+",
          src: "/images/work-at/bookmeplus.png",
          url: "https://bookme.plus",
        },
        {
          name: "BookMeBus",
          src: "/images/work-at/bookmebus.jpg",
          url: "https://bookmebus.com",
        },
      ],
    },
  },
  homeRoute: "/",
  image:
    "https://cdn.pixabay.com/photo/2023/07/23/20/09/female-8145765_1280.jpg",
  project: {
    enabled: false,
    route: "/projects",
    slug: "projects",
  },
  resume: {
    enabled: false,
    route: "/resume",
    slug: "resume",
  },
  firebase: {
    enabled: false,
  },
});
