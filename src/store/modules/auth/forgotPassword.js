const state = {
    loading: false
}

const getters = {}

const actions = {
    forgot: ({commit, dispatch}, user) => {
        return new Promise((resolve, reject) => {
            commit('loading',true)
            axios.post('password/email',user)
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
            .finally(() => { commit('loading',false) })
        })
    },
}

const mutations = {
    loading: (state,status) => {
        state.loading = status
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
