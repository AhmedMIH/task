import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers/productsReducer'

const store = createStore(reducer,{}, applyMiddleware(ReduxThunk));

export default store;