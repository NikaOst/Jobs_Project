import Logo from '../header/navbar/logo';
import Cities from './cities';
import styles from './styles.module.css';
import Social from './social';
import line from '../../assets/icons/line_footer.svg';

function Footer() {
  return (
    <div className={styles.body}>
      <span className={styles.header}>Популярные города</span>
      <Cities />
      <img className={styles.line} src={line} alt="line_footer" />
      <div className={styles.logo_links}>
        <Logo color={'gray'} />
        <Social />
      </div>
    </div>
  );
}
export default Footer;
