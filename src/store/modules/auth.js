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
        return {}
    }
}

const actions = {
    login: ({commit, dispatch}, user) => {
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
    logout: ({commit, dispatch}) => {
        return new Promise((resolve, reject) => {
            commit('loading',true)
            axios.post('logout')
            .finally(() => {
                commit('logout')
                localStorage.removeItem('token')
                delete axios.defaults.headers.common['Authorization']
                commit('loading',false)
                resolve()
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
