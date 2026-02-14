import Button from '../../button';
import styles from './styles.module.css';

function Search_Bar() {
  return (
    <div className={styles.search_container}>
      <div className={styles.search_bar}>
        <input type="text" placeholder="Должность или компания" />
        <input type="text" placeholder="Город, Страна" />
      </div>
      <Button text={'Поиск'} padding={'0 4.37rem'} />
    </div>
  );
}
export default Search_Bar;
