import Navbar from './navbar';
import Search_Bar from './search_bar';
import styles from './styles.module.css';

function Header() {
  return (
    <div className={styles.body}>
      <Navbar />
      <div className={styles.content}>
        <h1>Один клик и работа в кармане</h1>
        <Search_Bar />
      </div>
    </div>
  );
}
export default Header;
