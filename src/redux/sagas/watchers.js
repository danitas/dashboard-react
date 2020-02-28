import { takeEvery } from 'redux-saga/effects';

import { incrementAsync } from "./generators";

export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}