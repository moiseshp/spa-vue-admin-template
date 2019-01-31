const state = {
    loading: {
        findToken: false,
        submit: false,
    }
}

const getters = {}

const actions = {
    findToken: ({commit, dispatch}, token) => {
        return new Promise((resolve, reject) => {
            commit('loadingFindToken',true)
            axios.get('password/reset/'+token)
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
            .finally(() => { commit('loadingFindToken',false) })
        })
    },
    reset: ({commit, dispatch}, user) => {
        return new Promise((resolve, reject) => {
            commit('loadingSubmit',true)
            axios.post('password/reset',user)
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
            .finally(() => { commit('loadingSubmit',false) })
        })
    },
}

const mutations = {
    loadingFindToken: (state,status) => {
        state.loading.findToken = status
    },
    loadingSubmit: (state,status) => {
        state.loading.submit = status
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
