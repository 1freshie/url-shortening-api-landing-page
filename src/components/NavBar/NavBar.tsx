import styles from './NavBar.module.css';
import logo from '../../images/logo.svg';

const NavBar: React.FunctionComponent = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.site__info}>
          <img className={styles.logo} src={logo} alt="logo" />
          <ul className={styles.nav}>
            <li>
              <button className={styles.nav__item}>Features</button>
            </li>
            <li>
              <button className={styles.nav__item}>Pricing</button>
            </li>
            <li>
              <button className={styles.nav__item}>Resources</button>
            </li>
          </ul>
        </div>
        <div className={styles.auth__info}>
          <ul className={styles.nav}>
            <li>
              <button className={styles.nav__item}>Login</button>
            </li>
            <li>
              <button className={styles.btn}>Sign Up</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
