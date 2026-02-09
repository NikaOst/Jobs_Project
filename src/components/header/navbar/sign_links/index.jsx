import styles from './styles.module.css';
function Sign_links() {
  return (
    <div className={styles.links}>
      <a href="#">Register</a>
      <a className={styles.sign_in} href="#">
        Sign in
      </a>
    </div>
  );
}
export default Sign_links;
