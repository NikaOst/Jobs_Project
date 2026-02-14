import sony from '../../../assets/icons/sony_color.svg';
import facebook from '../../../assets/icons/facebook_color.svg';
import cola from '../../../assets/icons/cola_color.svg';
import punkt_img from '../../../assets/icons/location_small.svg';
import styles from './styles.module.css';

function Vacancies() {
  const vacancies = [
    {
      categories: 'Финансы',
      color: '#5182FF',
      title: 'Менеджер по управлению финансами в крупной компании',
      location: 'Осака, Япония',
      company_name: 'Sony',
      company_logo: sony,
      time: '3 дня назад',
    },
    {
      categories: 'Продажи',
      color: '#FF51EE',
      title: 'Специалист по продажам',
      location: 'Коясан, Япония',
      company_name: 'Facebook',
      company_logo: facebook,
      time: '7 дней назад',
    },
    {
      categories: 'Служба поддержки',
      color: '#58D94D',
      title: 'Оператор колл центра',
      location: 'Томаму, Япония',
      company_name: 'CocaCola',
      company_logo: cola,
      time: '1 день назад',
    },
    {
      categories: 'Мультимедиа',
      color: '#FF9051',
      title: 'Системный администратор',
      location: 'Токио, Япония',
      company_name: 'Sony',
      company_logo: sony,
      time: '3 дня назад',
    },
    {
      categories: 'Дизайн',
      color: '#F84242',
      title: 'Дизайнер интерьера в профессиональную студию в центре города',
      location: 'Йокогама, Япония',
      company_name: 'Facebook',
      company_logo: facebook,
      time: '7 дней назад',
    },
    {
      categories: 'Грузоперевозки',
      color: '#383838',
      title: 'Водитель на дальние дистанции',
      location: 'Кобе. Япония',
      company_name: 'CocaCola',
      company_logo: cola,
      time: '1 день назад',
    },
  ];
  return (
    <div className={styles.grid}>
      {vacancies.map((vacancy) => {
        return (
          <div className={styles.card}>
            <div className={styles.category}>
              <div
                style={{
                  borderRadius: '50%',
                  backgroundColor: vacancy.color,
                  width: '10px',
                  height: '10px',
                }}></div>
              <span>{vacancy.categories}</span>
            </div>
            <div className={styles.card_title_location}>
              <h1>{vacancy.title}</h1>
              <div className={styles.location}>
                <img src={punkt_img} alt="punkt_img" />
                <span>{vacancy.location}</span>
              </div>
            </div>
            <div className={styles.company}>
              <img src={vacancy.company_logo} alt={vacancy.company_name} />
              <span>
                {vacancy.company_name}, {vacancy.time}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Vacancies;
