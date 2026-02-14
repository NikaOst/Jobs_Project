import styles from './styles.module.css';

function Menu() {
  return (
    <div className={styles.jobs_options}>
      <span>Поиск работы</span>
      <span>Поиск стартапов</span>
    </div>
  );
}
export default Menu;
