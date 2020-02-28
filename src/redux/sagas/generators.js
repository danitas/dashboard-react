import { put, delay } from 'redux-saga/effects';

import { INCREMENT } from '../types';

export function* incrementAsync() {
    yield delay(1000);
    yield put({type: INCREMENT});
}