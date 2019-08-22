<template>
    <div v-if="showModal" class="modal">
        <div class="content">
            <h3>{{ info.title }}</h3>
            <p v-html="info.description"></p>
            <a href="#" class="close" @click.prevent="closeModal">✖</a>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
            info: {}        
        }
    },

    computed: {
        ...mapState(['showModal', 'typeModal'])
    },

    watch: {
        typeModal(newValue) {
            if (newValue) {
                import(`~/static/json/${newValue}.json`)
                .then(({ default: info }) => {
                    this.info = info;
                });
            }
        }
    },

    methods: {
        closeModal() {
            this.$store.commit('SWITCH_MODAL_STATE');
            this.$store.commit('CHANGE_TYPE_MODAL', '');
        }
    },
}
</script>