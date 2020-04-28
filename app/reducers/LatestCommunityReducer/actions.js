import * as types from './actionTypes'
import service from '../../services/news'

let page = 1

const communityFetching = () => {
  return { type: types.COMMUNITY_FETCHING }
}

const communityRefreshing = () => {
  return { type: types.COMMUNITY_REFRESHING }
}

const communityOk = payload => {
  return { type: types.COMMUNITY_OK, payload }
}

const communityFail = () => {
  return { type: types.COMMUNITY_FAIL }
}

export function fetchCommunities() {
  return async (dispatch, getState) => {
    try {
      dispatch(communityFetching())
      page += 1
      const res = await service.getLatestCommunities(page)
      const { communities } = getState().communityReducer
      dispatch(communityOk(
        page === 1 ? res.data.articles
          : [
            ...communities,
            ...res.data.articles.filter(n => !communities.some(p => p._id === n._id))
          ],
      ))
    } catch (err) {
      dispatch(communityFail())
    }
  }
}

export function refreshCommunities() {
  return async (dispatch) => {
    try {
      dispatch(communityRefreshing())
      page = 1
      const res = await service.getLatestCommunities(page)
      dispatch(communityOk(
        res.data.articles
      ))
    } catch (err) {
      dispatch(communityFail())
    }
  }
}