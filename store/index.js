export const state = () => ({
  users: [],
  page: 1
})

export const mutations = {
  setUsersData(state, data) {
    state.users = data
  },

  setPage(state, page) {
    state.page = page
  },
}

export const actions = {
  async loadData({commit}, page = 1) {
    const users = await fetch(`https://randomuser.me/api/?nat=dk&seed=KnowIt&results=12&page=${page}`).then((res) => res.json())
      .then(res => res.results)

    commit('setUsersData', users)
    commit('setPage', page)
  },
  async loadPage({dispatch, state}, page) { // Remove `commit` parameter
    if (page !== state.page) {
      await dispatch('loadData', page)
    }

    window.scrollTo(0, 0)
  },
}

export const getters = {
  getUserData: (state) => (username) => {
    return state.users.find((item) => item.login.username === username)
  },
  getUsers(state) {
    return state.users
  }
}
