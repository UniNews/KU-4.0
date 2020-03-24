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
      // map news field
      let newsArray = []
      for (const news of newsData) {
        const newsObject = {
          title: news.title,
          date: news.createdAt,
          user: news.user.displayName,
          imgUrl: news.imageURL[0],
          newsId: news._id,
          profileId: news.user._id,
        }
        newsArray.push(newsObject)
      }
      // featch all users
      const profile = await service.getAllUsers()
      const profileData = profile.data.filter(item => {
        const stringData = `${item.displayName?.toUpperCase()}`
        const queryData = query.toUpperCase()
        return stringData.indexOf(queryData) > -1
      })
      // map user field
      let profileArray = []
      for (const profile of profileData) {
        const profileObject = {
          id: profile._id,
          displayName: profile.displayName,
          avatarURL: profile.avatarURL,
        }
        profileArray.push(profileObject)
      }
      const searchObject = {
        news: newsArray,
        user: profileArray
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
