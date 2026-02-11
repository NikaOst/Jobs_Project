import logo from '../../../../assets/icons/logo.svg';
import logo_gray from '../../../../assets/icons/logo_gray.svg';
import styles from './styles.module.css';

function Logo({ color }) {
  return color === 'blue' ? (
    <img src={logo} alt="logo"></img>
  ) : (
    <img src={logo_gray} alt="logo_gray" />
  );
}
export default Logo;
