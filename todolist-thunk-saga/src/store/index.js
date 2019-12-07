import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import todoSaga from './sagas'
// import thunk from 'redux-thunk'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
    //     applyMiddleware(thunk),
    //     other store enhancers if any
    applyMiddleware(sagaMiddleware)
);

const store = createStore(reducer, enhancer )
sagaMiddleware.run(todoSaga)
export default store;