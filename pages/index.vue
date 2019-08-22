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
  </div>
</template>

<script>
import Header from '~/components/Header.vue'

import HomeServices from '~/components/HomeServices.vue'
import HomeValues from '~/components/HomeValues.vue'

import Contact from '~/components/Contact.vue'

import axios from 'axios';

export default {
  components: {
    Header,
    HomeServices,
    HomeValues,
    Contact,
  },

  head () {
    return {
      title: 'Mi titulo'
    }
  },
}
</script>

<style>
.links {
  padding-top: 15px;
}
</style>
