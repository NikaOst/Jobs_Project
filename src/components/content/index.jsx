import Categories from './categories';
import Vacancies from './vacancies';
import styles from './styles.module.css';

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
      </div>
    </div>
  );
}
export default Content;
