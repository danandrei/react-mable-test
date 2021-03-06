import { history } from '../helpers';
import { userConstants } from '../constants';
import { userService } from '../services/';

const login = (username, password) => {

  return dispatch => {
    return userService.login(username, password)
    .then(user => {
      dispatch({
        type: userConstants.LOGIN_SUCCESS,
        user,
      });

      history.push('/');
    })
  };
};

const logout = () => {
  return dispatch => {
    userService.logout();

    dispatch({
      type: userConstants.LOGOUT,
    });
  };
}

export const userActions = {
  login,
  logout,
};
