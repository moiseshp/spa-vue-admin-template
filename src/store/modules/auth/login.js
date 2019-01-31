const state = {
    token: localStorage.getItem('token') || '',
    loading: false
}

const getters = {
    isAuthenticated: state => !!state.token,
    user(state){
        if (state.token) {
            return JSON.parse(localStorage.getItem('user'))
        }
        return {}
    }
}

const actions = {
    login: ({commit, dispatch}, user) => {
        return new Promise((resolve, reject) => {
            commit('loading',true)
            axios.post('login',user)
            .then(resp => {
                let token = resp.data.access_token
                localStorage.setItem('token',token)
                localStorage.setItem('user',JSON.stringify(resp.data))
                // Here set the header of your ajax library to the token value.
                axios.defaults.headers.common['Authorization'] = token
                commit('login',token)
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
            .finally(() => { commit('loading',false) })
        })
    },
    logout: ({commit, dispatch}) => {
        return new Promise((resolve, reject) => {
            commit('loading',true)
            axios.post('logout')
            .then( resp => {
                resolve(resp)
            })
            .finally(() => {
                commit('logout')
                localStorage.removeItem('token')
                delete axios.defaults.headers.common['Authorization']
                commit('loading',false)
            })
        })
    }
}

const mutations = {
    loading: (state,status) => {
        state.loading = status
    },
    login: (state,token) => {
        state.token = token
    },
    logout: (state) => {
        state.token = ''
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
