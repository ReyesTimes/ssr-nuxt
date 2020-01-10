export const state = () => ({
    showModal: false,
    typeModal: '',
    typeJson: false,
});

export const mutations = {
    SWITCH_MODAL_STATE(state) {
        state.showModal = !state.showModal; 
    },

    CHANGE_TYPE_MODAL(state, type) {
        state.typeModal = type;
    },

    TYPE_JSON(state, value = false) {
        state.typeJson = value;
    },
};