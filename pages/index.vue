<template>
  <div>
    <Header />
    <main>
      <article>
        <HomeServices />
        <HomeValues />
        <Contact />
      </article>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

import HomeServices from "~/components/HomeServices.vue";
import HomeValues from "~/components/HomeValues.vue";

import Contact from "~/components/Contact.vue";

export default {
  components: {
    Header,
    Footer,
    HomeServices,
    HomeValues,
    Contact
  },

  head() {
    return {
      title: "SSR Especialistas Fiscales | Defensa y asesoria legal",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Damos asesoría y resolvemos tus problemas para el crecimiento y desarrollo de tus negocios."
        }
      ]
    };
  }
};
</script>

<style>
.links {
  padding-top: 15px;
}
</style>
