import { createStore } from 'redux';

import menuReducer from '../reducers/menu';

const store = createStore(menuReducer);

export default store;