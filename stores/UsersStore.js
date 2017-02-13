import EventEmitter from 'eventemitter3';
import assign from 'object-assign';
import Dispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/UserConstants';
import sorty from 'sorty';

let users = [];

let UsersStore = assign({}, EventEmitter.prototype, {
  emitChange() {
    return this.emit('change');
  },

  addChangeListener(callback) {
    this.on('change', callback);
  },

  removeChangeListener(callback) {
    this.off('change', callback);
  },

  getState() {
    return {
      users
    };
  }
});

UsersStore.dispatchToken = Dispatcher.register((payload) => {
  switch (payload.type) {
    case ActionTypes.LOAD_USERS:
      break;
    case ActionTypes.LOAD_USERS_DONE:
      if (payload.textStatus === 'success') {
        users = payload.result.data;
      }
      UsersStore.emitChange();
      break;
    default:
      // Do nothing
  }
});

export default UsersStore;
