import styles from './styles.module.css';

function Cities() {
  const cities = [
    'Осака',
    'Коясан',
    'Токио',
    'Хаконэ ',
    'Наэба',
    'Томаму',
    'Йокогама',
    'Нагоя',
    'Саппоро',
    'Кобе',
  ];
  return (
    <div className={styles.city_container}>
      {cities.map((city) => {
        return <span className={styles.city}>{city}</span>;
      })}
    </div>
  );
}

export default Cities;
