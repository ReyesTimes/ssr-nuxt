<template>
  <div v-if="showModal" class="modal" @click.prevent="clickModal($event)">
    <div class="scaffolding">
      <a href="#" class="close" @click.prevent="closeModal">✖</a>

      <div class="content">
        <div v-if="isLoading" class="skeleton-modal" aria-live="polite" aria-busy="true">
          <div class="title"></div>
          <div class="block"></div>
          <div class="block"></div>
          <div class="block"></div>
        </div>
        <div v-if="!isLoading">
          <h3>{{ info.title }}</h3>
          <div v-html="info.description"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import axios from "axios";

export default {
  data() {
    return {
      info: {},
      isLoading: false
    };
  },

  computed: {
    ...mapState(["showModal", "typeModal"])
  },

  watch: {
    typeModal(personName) {
      if (personName) {
        this.isLoading = true;
        axios
          .get(`https://mulantimes.herokuapp.com/personal/${personName}`)
          .then(({ data: { data: info } }) => {
            this.isLoading = false;
            this.info = { ...info };
          });
      }
    }
  },

  methods: {
    closeModal() {
      this.info = {};
      this.$store.commit("SWITCH_MODAL_STATE");
      this.$store.commit("CHANGE_TYPE_MODAL", "");
    },

    clickModal($event) {
      if ($event.target.classList.contains("modal")) {
        this.closeModal();
      }
    }
  }
};
</script>