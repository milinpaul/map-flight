import { call, put, takeLatest } from 'redux-saga/effects'

import {
  GET_USER_DATA_REQUESTED,
  GET_USER_DATA_START,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_FAIL
} from './dux'

export function* fetchUserData() {
  try {
    yield put({ type: GET_USER_DATA_START })
    const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/users')
    const data = yield response.json()
    yield put({ type: GET_USER_DATA_SUCCESS, payload: data })
  } catch (error) {
    yield put({ type: GET_USER_DATA_FAIL, payload: error })
  }
}

export default [takeLatest(GET_USER_DATA_REQUESTED, fetchUserData)]