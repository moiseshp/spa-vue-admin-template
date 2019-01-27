import { AUTH_REQUEST, AUTH_ERROR, AUTH_SUCCESS, AUTH_LOGOUT } from '../actions/auth'
// import { USER_REQUEST } from '../actions/user'

const state = {
    token: localStorage.getItem('token') || '',
    status: '',
    user: {},
    hasLoadedOnce: false
}

const getters = {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status,
}

const actions = {
    [AUTH_REQUEST]: ({commit, dispatch}, user) => {
        return new Promise((resolve, reject) => {
            commit(AUTH_REQUEST)
            // apiCall({url: 'auth', data: user, method: 'POST'})
            // console.log(this.form)
            axios.post('login',user)
            .then(resp => {
                console.log('resp',resp.data)
                localStorage.setItem('token', resp.data.token)
                localStorage.setItem('user',JSON.stringify(resp.data))
                // Here set the header of your ajax library to the token value.
                // example with axios
                axios.defaults.headers.common['Authorization'] = resp.data.token
                commit(AUTH_SUCCESS,resp.data)
                // dispatch(USER_REQUEST)
                resolve(resp)
            })
            .catch(err => {
                console.log('err',err.response)
                commit(AUTH_ERROR, err.data)
                localStorage.removeItem('token')
                reject(err)
            })
        })
    },
    [AUTH_LOGOUT]: ({commit, dispatch}) => {
        return new Promise((resolve, reject) => {
            commit(AUTH_LOGOUT)
            localStorage.removeItem('token')
            delete axios.defaults.headers.common['Authorization']
            resolve()
        })
    }
}

const mutations = {
    [AUTH_REQUEST]: (state) => {
        state.status = 'loading'
    },
    [AUTH_SUCCESS]: (state, resp) => {
        state.status = 'success'
        state.token = resp.token
        state.user = resp
        state.hasLoadedOnce = true
    },
    [AUTH_ERROR]: (state) => {
        state.status = 'error'
        state.hasLoadedOnce = true
    },
    [AUTH_LOGOUT]: (state) => {
        state.token = ''
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}
