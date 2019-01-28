const state = {
    token: localStorage.getItem('token') || '',
    status: '',
    loading: false
}

const getters = {
    isAuthenticated: state => !!state.token,
    user(state){
        if (state.token) {
            return JSON.parse(localStorage.getItem('user'))
        }
    }
}

const actions = {
    login: ({commit, dispatch}, user) => {
        return new Promise((resolve, reject) => {
            commit('loading',true)
            axios.post('login',user)
            .then(resp => {
                localStorage.setItem('token', resp.data.token)
                localStorage.setItem('user',JSON.stringify(resp.data))
                // Here set the header of your ajax library to the token value.
                axios.defaults.headers.common['Authorization'] = resp.data.token
                commit('login',resp.data)
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
    logout: ({commit, dispatch}) => {
        return new Promise((resolve, reject) => {
            commit('loading',true)
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            delete axios.defaults.headers.common['Authorization']
            commit('logout')
            commit('loading',false)
            resolve()
        })
    }
}

const mutations = {
    loading: (state,status) => {
        state.loading = status
    },
    login: (state, resp) => {
        state.token = resp.token
        state.user = resp
    },
    logout: (state) => {
        state.token = ''
    }
    // request: (state) => {
    //     state.status = 'loading'
    // },
    // error: (state) => {
    //     state.status = 'error'
    // },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
