import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers'
// import reportWebVitals from './reportWebVitals';
//persist 를 사용해 새로고침 시 데이터 날라감 방지
import { PersistGate } from 'redux-persist/integration/react';
import {persistReducer,persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import './styles/_typography.scss'
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//redux-persist
const persistConfig = {
  key:'root',
  storage
}
const enhancedReducer = persistReducer(persistConfig,rootReducer)

const store = createStore(enhancedReducer, composeEnhancer(applyMiddleware(thunk)))
const persistor = persistStore(store)
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
       <App />
    </PersistGate>

  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
