import { createStore, createLogger } from 'vuex';

import users from './modules/users';
import persons from './modules/persons'
import word from './modules/word'
import counter from './modules/counter'

const NODE_ENV = 'dev';
const debug = NODE_ENV !== 'production';

export default createStore({
  modules: {
    users,
    persons,
    word,
    counter,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});