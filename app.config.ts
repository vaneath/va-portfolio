import home from "./config/home.config";
import project from "./config/project.config";

export default defineAppConfig({
  name: "vaneath",
  blog: {
    enabled: false,
    name: "blogs",
    route: "/blogs",
  },
  description:
    "Hi, I'm Vaneath, a developer, guitarist, musician, programmer. I love to build things and solve problems. I'm currently working at BookMe+ as a junior full-stack developer, and also a student at the Cambodia Academy of Digital Technology.",
  domain: "vaneath.com",
  email: "vaneathzz@gmail.com",
  home: home,
  homeRoute: "/",
  image: "/images/vaneath.png",
  project: project,
  resume: {
    enabled: true,
    name: "resume",
    route: "/resume",
  },
  social: {
    enabled: true,
    facebook: {
      enabled: true,
      username: "vaneathzz",
    },
    github: {
      enabled: true,
      username: "vaneath",
    },
    instagram: {
      enabled: true,
      username: "va_neath",
    },
    linkedin: {
      enabled: true,
      username: "vaneath",
    },
    twitter: {
      enabled: false,
      username: "",
    },
  },
});
