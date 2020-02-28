import { all, call, takeEvery } from 'redux-saga/effects';

import { watchIncrementAsync } from './watchers';

export default function* rootSaga() {
    yield all([
        call(watchIncrementAsync)
    ])
}