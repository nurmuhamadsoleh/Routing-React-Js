import { applyMiddleware, combineReducers, compose } from "redux";
import { createStore } from "redux";
import thunk from "redux-thunk";
// import { createSelectorHook } from "react-redux";
import CounterReducer from "./featuredCounter/reducer";

// melakukan combaind direducer
let rootReducers = combineReducers({
  //menampung value dari action reducer
  a: CounterReducer,
});
//harus mealkkan koneksi dengan rudex yang dibuat untuk melihat di devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//redux thunk merupakan middleware untuk menangani error pada proses ayncs
let store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk))); //bisa menggunakan middleware di dalam parameter
export default store;
