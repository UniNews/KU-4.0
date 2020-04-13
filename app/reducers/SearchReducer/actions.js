import * as types from './actionTypes'
import service from '../../services/search'

const setSearchQuery = (payload) => {
  return { type: types.SEARCH_QUERY, payload }
}

const articlesSearchOk = (payload, type) => {
  return { type: types.SEARCH_OK, payload }
}

const articlesSearchFail = (type) => {
  return { type: types.SEARCH_FAIL }
}

const searchReset = () => {
  return { type: types.SEARCH_RESET }
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
