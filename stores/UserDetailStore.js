import EventEmitter from 'events';
import assign from 'object-assign';
import Dispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/UserConstants';

let user = {};

let UserDetailStore = assign({}, EventEmitter.prototype, {
  getInitState() {
    return {
      user: {}
    };
  },

  getState() {
    return {
      user: user
    };
  }
});

UserDetailStore.dispatchToken = Dispatcher.register((payload) => {
  switch (payload.type) {
    case ActionTypes.LOAD_USER_DETAIL:
      break;
    case ActionTypes.LOAD_USER_DETAIL_DONE:
      if (payload.textStatus === 'success') {
        user = payload.res.data;
      }
      UserDetailStore.emitChange();
      break;
    default:
      // Do nothing
  }
});

export default userDetailStore;
