export default defineAppConfig({
  name: "vaneath",
  blog: {
    enabled: true,
    name: "blogs",
    route: "/blogs",
  },
  description:
    "Hi, I'm Vaneath, a developer, guitarist, musician, programmer. I love to build things and solve problems. I'm currently working at BookMe+ as a junior full-stack developer, and also a student at the Cambodia Academy of Digital Technology.",
  domain: "vaneath.com",
  email: "vaneathzz@gmail.com",
  heroSection: {
    enabled: true,
    aboutMe: true,
    blogToggle: {
      enabled: true,
      leftText: "i write blogs",
      rightText: "take a look",
    },
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
  image: "/images/vaneath.png",
  project: {
    enabled: true,
    name: "projects",
    route: "/projects",
  },
  resume: {
    enabled: false,
    name: "resume",
    route: "/resume",
  },
  social: {
    enabled: true,
    facebook: {
      enabled: true,
      url: "vaneathzz",
    },
    github: {
      enabled: true,
      url: "vaneath",
    },
    instagram: {
      enabled: true,
      url: "va_neath",
    },
    linkedin: {
      enabled: true,
      url: "vaneath",
    },
    twitter: {
      enabled: false,
      url: "",
    },
  },
});
