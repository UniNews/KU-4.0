import * as types from './actionTypes'

const setSearchQuery = (payload) => {
  return { type: types.SET_QUERY, payload }
}

const searchReset = () => {
  return { type: types.RESET_QUERY }
}

export function setQuery(query) {
  return async dispatch => {
    dispatch(setSearchQuery(query))
  }
}

export function reset() {
  return async dispatch => {
    dispatch(searchReset())
  }
}
