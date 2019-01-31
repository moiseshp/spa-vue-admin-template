const state = {
    visible: false,
    color: 'info',
    text: null,
    multiline: false,
}

const getters = {}

const actions = {
    show:({commit, dispatch},snackbar) => {
        return new Promise((resolve, reject) => {

            commit('show',snackbar)

            setTimeout(function () {
                commit('close')
            }, 7000)
        })
    }
}

const mutations = {
    show(state,payload) {
        state.text = payload.text;
        state.color = payload.color;
        state.multiline = (payload.text.length > 50) ? true : false;

        if (payload.multiline) {
            state.multiline = payload.multiline;
        }

        state.visible = true;
    },
    close(state) {
        state.visible = false;
        state.text = null;
        state.color = 'info';
        state.multiline = false;
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
