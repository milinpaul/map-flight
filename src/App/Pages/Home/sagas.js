import { call, put, takeLatest } from 'redux-saga/effects'

import apiCaller from '../../Utils/apiCaller'
import {
  GET_USER_DATA_REQUESTED,
  GET_USER_DATA_START,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_FAIL
} from './dux'

const apiUrl = process.env.REACT_APP_API_URL

export function* fetchUserData() {
  try {
    yield put({ type: GET_USER_DATA_START })
    const response = yield call(apiCaller, apiUrl, 'GET')
    yield put({ type: GET_USER_DATA_SUCCESS, payload: response })
  } catch (error) {
    yield put({ type: GET_USER_DATA_FAIL, payload: error })
  }
}

export default [takeLatest(GET_USER_DATA_REQUESTED, fetchUserData)]
