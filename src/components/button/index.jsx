import styles from './styles.module.css';

function Button({ padding, text }) {
  return <button style={{ padding: padding }}>{text}</button>;
}
export default Button;
