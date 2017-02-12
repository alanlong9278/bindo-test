import Dispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/UserContants';

export default {
  
  listUsers() {
    Dispatcher.dispatch({
      type: ActionTypes.LOAD_USERS
    });
    // TODO: Get data from json file
    .always((res, textStatus) => {
        Dispatcher.dispatch({
          type: ActionTypes.LOAD_COUNTRIES_DONE,
          res: res,
          textStatus: textStatus
        });
      });
  }

  getUserDetail(id) {
    Dispatcher.dispatch({
      type: ActionTypes.LOAD_USER_DETAIL
    });

    // TODO: Get data from json file
      .always((res, textStatus) => {
        Dispatcher.dispatch({
          type: ActionTypes.LOAD_USER_DETAIL_DONE,
          res: res,
          textStatus: textStatus
        });
   } 
  }
};
