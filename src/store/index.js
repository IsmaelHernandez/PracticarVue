import { createStore, createLogger } from 'vuex';

import users from './modules/users';
const NODE_ENV = 'dev';
const debug = NODE_ENV !== 'production';

export default createStore({
  modules: {
    users,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});