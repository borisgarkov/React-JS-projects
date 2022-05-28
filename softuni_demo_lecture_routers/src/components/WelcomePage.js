import { Routes, Route, NavLink, Outlet, Link } from 'react-router-dom';
import styles from '../cssStyles/navLinkStyle.module.css';
import MoreWelcomePage from './MoreWelcomePage';

export default function WelcomePage() {

    return (
        <>
            <h1>This is the welcome page!</h1>
            <h2>Here is the subtitle h2</h2>
            <Link to='more'>More welcome page</Link>

            <Routes>
                <Route path='/more' element={<MoreWelcomePage />} />
            </Routes>

            {/* <Outlet /> */}
        </>
    )
}