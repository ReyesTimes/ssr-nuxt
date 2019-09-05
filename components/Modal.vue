<template>
    <div v-if="showModal" class="modal" @click.prevent="clickModal($event)">
        <div class="scaffolding">
            <a href="#" class="close" @click.prevent="closeModal">✖</a>
            <div class="content">
                <h3>{{ info.title }}</h3>
                <div v-html="info.description"></div>
            </div>
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
            this.info = {};
            this.$store.commit('SWITCH_MODAL_STATE');
            this.$store.commit('CHANGE_TYPE_MODAL', '');
        },

        clickModal($event) {
            if ($event.target.classList.contains('modal')) {
                this.closeModal();
            }
        }
    },
}
</script>