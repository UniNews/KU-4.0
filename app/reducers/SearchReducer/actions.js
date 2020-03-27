import * as types from './actionTypes'
import service from '../../services/search'

const searchLoading = payload => {
  return { type: types.SEARCH_LOADING, payload }
}

const searchOk = payload => {
  return { type: types.SEARCH_OK, payload }
}

const searchFail = () => {
  return { type: types.SEARCH_FAIL }
}

const searchReset = () => {
  return { type: types.SEARCH_RESET }
}

export function search(query) {
  return async dispatch => {
    try {
      dispatch(searchLoading(query))
      // fetch all news
      const news = await service.getAllNews()
      const newsData = news.data.filter(item => {
        const stringData = `${item.title?.toUpperCase()}`
        const queryData = query.toUpperCase()
        return stringData.indexOf(queryData) > -1
      })
      // fetch all users
      const profile = await service.getAllUsers()
      const profileData = profile.data.filter(item => {
        const stringData = `${item.displayName?.toUpperCase()}`
        const queryData = query.toUpperCase()
        return stringData.indexOf(queryData) > -1
      })
      const searchObject = {
        news: newsData,
        user: profileData
      }
      dispatch(searchOk(searchObject))
    }
    catch (err) {
      dispatch(searchFail())
    }
  }
}

export function reset() {
  return async dispatch => {
    try {
      dispatch(searchReset())
    }
    catch (err) {
      dispatch(searchFail())
    }
  }
}
