import Dispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/UserConstants';
import $ from 'jquery';

export default {
  listUsers() {
    const url = 'data/user.json';
    Dispatcher.dispatch({
      type: ActionTypes.LOAD_USERS
    });
    // TODO
    $.ajax({
      url: url,
      method: 'GET',
      dataType: 'json'
    })
    .then((result, textStatus) => {
        Dispatcher.dispatch({
          type: ActionTypes.LOAD_USERS_DONE,
          result,
          textStatus
        });
      });
  }
};
