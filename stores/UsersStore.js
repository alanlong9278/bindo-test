import EventEmitter from 'events';
import assign from 'object-assign';
import Dispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/UserConstants';

let users = {
  data: [],
  meta: {
    total: 0,
    columns: [],
    timezone: {},
    name: 'user'
  }
};
let query = {
  order: '',
  limit: 25,
  offset: 0
};

let UsersStore = assign({}, EventEmitter.prototype, {
  getState() {
    return {
      data: users,
      query: query
    };
  }
});

UsersStore.dispatchToken = Dispatcher.register((payload) => {
  switch (payload.type) {
    case ActionTypes.LOAD_USERS:
      query = payload.query || query;
      break;
    case ActionTypes.LOAD_USERS_DONE:
      if (payload.textStatus === 'success') {
        users = payload.res;
      }
      UsersStore.emitChange();
      break;
    default:
      // Do nothing
  }
});

export default UsersStore;
