// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Oswald:400,500,700%7CRoboto:400,500,700%7CHerr+Von+Muellerhoff:400,500,700%7CQuattrocento+Sans:400,500,700",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  modules: ["@pinia/nuxt"],
  css: ["@/assets/css/style.css"],
});
