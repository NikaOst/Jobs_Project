import Categories from './categories';
import Vacancies from './vacancies';
import styles from './styles.module.css';
import Button from '../button';

function Content() {
  return (
    <div className={styles.categories_vacancies}>
      <div className={styles.categories_container}>
        <h1>Работа по категориям</h1>
        <Categories />
      </div>
      <div className={styles.vacancies_container}>
        <h1>Новые вакансии</h1>
        <p>Найди работу своей мечты прямо сейчас</p>
        <Vacancies />
        <div className={styles.button}>
          <Button text={'Все вакансии'} padding={'1.25rem 3.13rem'} />
        </div>
      </div>
    </div>
  );
}
export default Content;
