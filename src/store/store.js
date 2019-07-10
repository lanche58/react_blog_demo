import { createStore } from 'redux';
import reducer from './reducer';
const store = createStore(
        reducer, 
        // 启动redux-devtools
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
export default store;