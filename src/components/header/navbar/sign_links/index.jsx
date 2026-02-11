import styles from './styles.module.css';
function Sign_links() {
  return (
    <div className={styles.links}>
      <a href="#">Регистрация</a>
      <a className={styles.sign_in} href="#">
        Вход
      </a>
    </div>
  );
}
export default Sign_links;
