import * as types from "./actionTypes"

const selectLoading = () => {
  return { type: types.SELECT_COMMUNITY_TAG_LOADING }
}

const selectOk = payload => {
  return { type: types.SELECT_COMMUNITY_TAG_OK, payload }
}

const selectFail = () => {
  return { type: types.SELECT_COMMUNITY_TAG_FAIL }
}

export function selectCommunityTag(tag) {
  return (dispatch) => {
    try {
      dispatch(selectLoading())
      dispatch(selectOk(tag))
    }
    catch (err) {
      dispatch(selectFail())
    }
  }
}
