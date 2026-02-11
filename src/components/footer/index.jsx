import Logo from '../header/navbar/logo';
import Cities from './cities';
import styles from './styles.module.css';
import Social from './social';

function Footer() {
  return (
    <div className={styles.body}>
      <span className={styles.header}>Популярные города</span>
      <Cities />
      <div className={styles.logo_links}>
        <Logo color={'gray'} />
        <Social />
      </div>
    </div>
  );
}
export default Footer;
