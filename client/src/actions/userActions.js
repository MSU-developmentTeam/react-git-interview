//import { API } from '../utils/API';
import { userConstants } from '../auth/userConstant';
// import { errorActions } from './alertActions';


export const loadUser = () => (dispatch: Function, getState: Function) => {
    dispatch({ type: userConstants.USER_LOADING });

    fetch('/api/auth/login', tokenConfig(getState))
    .then(res => 
        dispatch({
            type: userConstants.USER_LOADED,
            payload: res.data
        })
        )
        // .catch(err => {
        //     dispatch(returnErrors(err.response.data, err.response.status));
        //     dispatch({
        //         type: userConstants.AUTH_ERROR
        //     });
        // });
}

// Register User
export const register = ({ username, email, password }: IAuthFunction) => (
    dispatch: Function
  ) => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    // Request body
    const body = JSON.stringify({ username, email, password });
  
    
      fetch('/api/signup', body, config, {
          method: 'POST',
          headers: {
              'content-type' : 'application/json'
          }
      })
      .then(res =>
        dispatch({
          type: userConstants.REGISTER_SUCCESS,
          payload: res.data
        })
      )
    //   .catch(err => {
    //     dispatch(
    //       returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')
    //     );
    //     dispatch({
    //       type: userConstants.REGISTER_FAILURE
    //     });
    //   });
  };

// Login User
export const login = ({ username, password }: IAuthFunction) => (
    dispatch: Function
  ) => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    // Request body
    const body = JSON.stringify({ username, password });
  
    fetch('/api/auth/login', body, config, {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        }
    })
      .then(res =>
        dispatch({
          type: userConstants.LOGIN_SUCCESS,
          payload: res.data
        })
      )
//       .catch(err => {
//         dispatch(
//           returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
//         );
//         dispatch({
//           type: userConstants.LOGIN_FAIL
//         });
//       });
   };
  
  // Logout User
  export const logout = () => {
    return {
      type: userConstants.LOGOUT_SUCCESS
    };
  };
  
  // Setup config/headers and token
  export const tokenConfig = (getState: Function) => {
    // Get token from localstorage
    const token = getState().auth.token;
  
    // Headers
    const config: IConfigHeaders = {
      headers: {
        'Content-type': 'application/json'
      }
    };
  
    // If token, add to headers
    if (token) {
      config.headers['x-auth-token'] = token;
    }
  
    return config;
  };


