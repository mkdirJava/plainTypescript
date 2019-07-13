import { put, takeEvery, all } from 'redux-saga/effects'

const delay = (ms:number) => new Promise(res => setTimeout(res, ms));

export default function* incrementAsync() {
    
    yield put({
        type:"ADD_TODO",
        priority:"low",
        todo: "Here"
    })
}