import { ADD_FAVORITE_REQUEST, ADD_FAVORITE_SUCCESS, ADD_FAVORITE_ERROR } from '../actions/addFavEventAction';
import { REMOVE_FAVORITE_REQUEST, REMOVE_FAVORITE_SUCCESS, REMOVE_FAVORITE_ERROR } from '../actions/removeFavEventAction';
import { GET_FAVORITE_STATUS_REQUEST, GET_FAVORITE_STATUS_SUCCESS, GET_FAVORITE_STATUS_ERROR } from '../actions/getStatusFavoriteAction';

const defaultState = {
  err: null,
  data: '',
  isFetching: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_FAVORITE_REQUEST:
      return {
        ...state,
        err: null,
        data: {},
        isFetching: true,
      };
    case ADD_FAVORITE_SUCCESS:
      return {
        ...state,
        err: null,
        data: 'favorite',
        isFetching: true,
      };
    case ADD_FAVORITE_ERROR:
      return {
        ...state,
        err: 'Impossible to add fav',
        data: null,
        isFetching: true,
      };
    case REMOVE_FAVORITE_REQUEST:
      return {
        ...state,
        err: null,
        data: {},
        isFetching: true,
      };
    case REMOVE_FAVORITE_SUCCESS:
      return {
        ...state,
        err: null,
        data: 'unfavorite',
        isFetching: true,
      };
    case REMOVE_FAVORITE_ERROR:
      return {
        ...state,
        err: 'Impossible to remove fav',
        data: null,
        isFetching: true,
      };
    case GET_FAVORITE_STATUS_REQUEST:
      return {
        ...state,
        err: null,
        data: {},
        isFetching: true,
      };
    case GET_FAVORITE_STATUS_SUCCESS:
      return {
        ...state,
        err: null,
        data: action.payload.data.favorite ? 'favorite' : 'unfavorite',
        isFetching: true,
      };
    case GET_FAVORITE_STATUS_ERROR:
      return {
        ...state,
        err: 'fav status error',
        data: null,
        isFetching: true,
      };
    default:
      return state;
  }
};
