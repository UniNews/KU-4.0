import * as types from './actionTypes'
import service from '../../services/news'

const searchLoading = () => {
  return { type: types.SEARCH_LOADING }
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
      dispatch(searchLoading())
      const res = await service.getAllNews()
      const newsData = res.data.filter(item => {
        const stringData = `${item.title?.toUpperCase()}   
          ${item.user?.displayName.toUpperCase()}`
        const queryData = query.toUpperCase()
        return stringData.indexOf(queryData) > -1
      })
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
      dispatch(searchOk(newsArray))
    }
    catch (err) {
      dispatch(searchFail())
    }
  }
}