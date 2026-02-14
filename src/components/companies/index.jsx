import styles from './styles.module.css';
import disney from '../../assets/icons/disney_logo.svg';
import facebook from '../../assets/icons/facebook_logo.svg';
import microsoft from '../../assets/icons/microsoft_logo.svg';
import sony from '../../assets/icons/sony_logo.svg';
import cocacola from '../../assets/icons/cocacola_logo.svg';

function Companies() {
  const companies = [
    { name: 'Disney', link: disney },
    { name: 'Facebook', link: facebook },
    { name: 'Microsoft', link: microsoft },
    { name: 'Sony', link: sony },
    { name: 'CocaCola', link: cocacola },
  ];
  return (
    <div className={styles.companies_container}>
      <span>Помогаем найти работу:</span>
      <div className={styles.companies}>
        {companies.map((company) => {
          return <img src={company.link} alt={company.name} />;
        })}
      </div>
    </div>
  );
}
export default Companies;
