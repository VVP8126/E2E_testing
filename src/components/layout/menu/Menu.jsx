import styles from './Menu.module.css';
import { NavLink } from 'react-router-dom'

const Menu = () => {
    return (
        <div className={styles.topnav}>
            <NavLink className={styles.topnavItem} to="/" >HOME</NavLink>
            <NavLink className={styles.topnavItem} to="/users" >USERS</NavLink>
        </div>
    );
}
export default Menu;
