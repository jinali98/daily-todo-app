import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const middleWares = [logger, sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middleWares));

//root saga which containes all the sagas
sagaMiddleware.run(rootSaga);

export default store;
