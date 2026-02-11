import lindn from '../../../assets/icons/in.svg';
import google from '../../../assets/icons/google.svg';
import twitter from '../../../assets/icons/twitter.svg';
import facebook from '../../../assets/icons/facebook.svg';
import styles from './styles.module.css';

function Social() {
  const links = [lindn, google, twitter, facebook];
  return (
    <div className={styles.links}>
      {links.map((link, indx) => {
        return <img src={link} alt={`link_${indx}`} />;
      })}
    </div>
  );
}
export default Social;
