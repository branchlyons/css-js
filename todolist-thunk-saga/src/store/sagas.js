import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { GET_SAGA } from './actiontypes'
import axios from 'axios'
import { axiosGet } from './actionCreaters'
function* getsagalist() {
    try {
        const res = yield axios.get('https://reqres.in/api/users/2')
        const action = axiosGet(res.data)
        yield put(action)
    } catch (error) {
        console.log('error');
        
    }



    // axios.get('https://reqres.in/api/users/2')
    //   .then((res) => {
    //     const data = res.data
    //     const action = axiosGet(data)
    //     // store.dispatch(action)
    //   })
}
function* mySaga() {
    yield takeEvery(GET_SAGA, getsagalist);

}

export default mySaga;