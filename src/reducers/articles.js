import { HOME_PAGE_LOADED } from '../actions/type'

export default (state = [], action) => {
  switch (action.type) {
    case HOME_PAGE_LOADED:
      return [...action.payload.articles]
    default:
      return state
  }
}
