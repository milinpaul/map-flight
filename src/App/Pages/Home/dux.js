/* ------ ACTION TYPES GOES HERE ------ */

export const GET_USER_DATA_REQUESTED = 'HOME/GET_USER_DATA_REQUESTED'
export const GET_USER_DATA_START = 'HOME/GET_USER_DATA_START'
export const GET_USER_DATA_SUCCESS = 'HOME/GET_USER_DATA_SUCCESS'
export const GET_USER_DATA_FAIL = 'HOME/GET_USER_DATA_FAIL'

/* ------ ACTION CREATORS GOES HERE ------ */

export const getUserDataRequest = () => ({
  type: GET_USER_DATA_REQUESTED
})

/* ------ INITIAL STATE GOES HERE ------ */

const initialState = {
  data: [],
  loading: false
}

/* ------ DEFAULT REDUCER GOES HERE ------ */

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_DATA_START: {
      return {
        ...state,
        loading: true
      }
    }
    case GET_USER_DATA_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: payload
      }
    }
    case GET_USER_DATA_FAIL: {
      return {
        ...state,
        loading: false,
        data: []
      }
    }

    default:
      break
  }
  return state
}
