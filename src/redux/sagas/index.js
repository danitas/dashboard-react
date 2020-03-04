import { all, call } from 'redux-saga/effects';

import { watchIncrementAsync } from './watchers';

export default function* rootSaga() {
    yield all([
        call(watchIncrementAsync)
    ])
}