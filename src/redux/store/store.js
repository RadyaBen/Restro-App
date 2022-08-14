import { createStore } from 'redux';

import { menuReducer } from '../reducers';

const store = createStore(menuReducer);

export default store;