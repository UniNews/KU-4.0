import * as types from './actionTypes'
import { AsyncStorage } from 'react-native'

const setSearchQuery = (payload) => {
  return { type: types.QUERY_SET, payload }
}

const resetSearch = () => {
  return { type: types.QUERY_RESET }
}

const setHistory = (payload) => {
  return { type: types.HISTORY_SET, payload }
}

const searchFail = () => {
  return { type: types.SEARCH_FAIL }
}

const historyFail = () => {
  return { type: types.HISTORY_FAIL }
}

export function setQuery(query) {
  return async dispatch => {
    try {
      await dispatch(resetSearch())
      dispatch(setSearchQuery(query.trim()))
    }
    catch (err) {
      dispatch(searchFail())
    }
  }
}

export function reset() {
  return async dispatch => {
    try {
      dispatch(resetSearch())
    }
    catch (err) {
      dispatch(searchFail())
    }
  }
}

export function getHistory() {
  return async dispatch => {
    try {
      let history = await AsyncStorage.getItem('history')
      if (history) {
        history = JSON.parse(history)
        dispatch(setHistory(history))
      }
    }
    catch (err) {
      dispatch(historyFail())
    }
  }
}

export function addHistory(query) {
  return async (dispatch, getState) => {
    try {
      const { history } = getState().searchReducer
      const existedIndex = history.indexOf(query.trim())
      if (existedIndex > -1)
        history.splice(existedIndex, 1)
      const updatedHistory = [query.trim(), ...history]
      await AsyncStorage.setItem('history', JSON.stringify(updatedHistory))
      dispatch(setHistory([...updatedHistory]))
    }
    catch (err) {
      dispatch(historyFail())
    }
  }
}

export function deleteAllHistory() {
  return async (dispatch) => {
    try {
      await AsyncStorage.setItem('history', JSON.stringify([]))
      dispatch(setHistory([]))
    }
    catch (err) {
      dispatch(historyFail())
    }
  }
}

export function deleteHistory(index) {
  return async (dispatch, getState) => {
    try {
      const { history } = getState().searchReducer
      history.splice(index, 1)
      await AsyncStorage.setItem('history', JSON.stringify(history))
      dispatch(setHistory([...history]))
    }
    catch (err) {
      console.log(err)
      dispatch(historyFail())
    }
  }
}