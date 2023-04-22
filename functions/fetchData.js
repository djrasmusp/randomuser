const API_URL = `https://randomuser.me/api/?nat=dk&seed=KnowIt&results=12&page=`;

export async function fetchUsersData(page) {
  const users = await fetch(API_URL + page).then((res) => res.json())
    .then(res => res.results)

  return users;
}

export function storeUsersData(store, page) {
  return async function () {
    const data = await fetchUsersData(page)
    store.commit('setUsersData', data)
  }
}
