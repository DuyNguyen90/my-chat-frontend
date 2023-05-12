import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectAuthState } from '../features/auth/authSlice';
import { logout } from '../features/auth/authSlice';

 export default function NavigationBar() {
    const dispatch = useDispatch();
    const isAuthorized = useSelector(selectAuthState);
    const logout = () => dispatch(logout());

    if (!isAuthorized) return null;

    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark px-3">
            <div className="navbar-nav">
                <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                <button onClick={logout} className="btn btn-link nav-item nav-link">Logout</button>
            </div>
        </nav>
    );
}