import Logo from './logo';
import Menu from './menu';
import Sign_links from './sign_links';
import styles from './styles.module.css';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo_menu}>
        <Logo />
        <Menu />
      </div>
      <div className={styles.links}>
        <Sign_links />
      </div>
    </div>
  );
}
export default Navbar;
