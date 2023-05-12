import { push }  from 'connected-react-router';
import { authSuccess, authing, authFailure } from './authSlice';

export function login(email, password) {
    return dispatch => {
        dispatch(authing);
        setTimeout(() => {
            if (email === 'duycoi90@gmail.com' && password === 'admin') {
                const user = {
                  name: 'DuyMa',
                  email: 'duycoi90@gmail.com'
                }
                dispatch(authSuccess(user));
                dispatch(push('/main'));
            } else {
                dispatch(authFailure('Invalid username or password'));
            }
        }, 2000);
    };
}