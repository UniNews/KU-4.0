import * as types from './actionTypes'

export function showModal() {
  return async dispatch => {
    dispatch({ type: types.SHOW_MODAL })
  }
}

export function hideModal() {
  return async dispatch => {
    dispatch({ type: types.HIDE_MODAL })
  }
}
