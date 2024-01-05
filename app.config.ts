export default defineAppConfig({
  name: "vaneath",
  blog: {
    enabled: true,
    title: "Blog",
    description: "My blog",
    url: "https://blog.vaneath.com",
  },
  domain: "vaneath.com",
  image:
    "https://cdn.pixabay.com/photo/2023/07/23/20/09/female-8145765_1280.jpg",
  email: "vaneathzz@gmail.com",
  heroSection: {
    enabled: true,
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
});
