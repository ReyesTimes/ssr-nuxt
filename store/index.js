export const state = () => ({
    showModal: false,
    typeModal: ''
});

export const mutations = {
    SWITCH_MODAL_STATE(state) {
        state.showModal = !state.showModal; 
    },

    CHANGE_TYPE_MODAL(state, type) {
        state.typeModal = type;
    },
};