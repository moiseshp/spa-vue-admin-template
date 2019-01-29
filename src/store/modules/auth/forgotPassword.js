const state = {
    status: 'Forgot Password',
    loading: false
}

const getters = {
    forgot: state => !!state.status,
    status(state){
        return state.status
    }
}

const actions = {
    forgot: ({commit, dispatch}, user) => {
        return new Promise((resolve, reject) => {
            commit('loading',true)
            axios.post('login',user)
            .then(resp => {
                let token = resp.data.token
                localStorage.setItem('token',token)
                localStorage.setItem('user',JSON.stringify(resp.data))
                // Here set the header of your ajax library to the token value.
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
                commit('login',token)
                resolve(resp)
            })
            .catch(err => {
                console.log('module/auth')
                // commit(error, err.data)
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
    forgot: (state,token) => {
        state.token = token
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
