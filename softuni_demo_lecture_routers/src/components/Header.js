import { NavLink } from 'react-router-dom';
import styles from '../cssStyles/navLinkStyle.module.css';

export default function Header() {

    const addCSSClassToNavLink = (navData) => navData.isActive ? styles['active-nav-link'] : '';

    return (
        <>
            <NavLink className={addCSSClassToNavLink} to='/welcome'>Home Page</NavLink>
            <p></p>
            <NavLink className={addCSSClassToNavLink} to='/about'>About Page</NavLink>
            <p></p>
            <NavLink className={addCSSClassToNavLink} to='/shop'>Shop Page</NavLink>
            <p></p>
            <NavLink className={addCSSClassToNavLink} to='/custom'>My Custom Page</NavLink>
            <p></p>
            <NavLink className={addCSSClassToNavLink} to='/form'>Complete Form</NavLink>
        </>
    )
}