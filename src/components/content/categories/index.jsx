import finance from '../../../assets/icons/finance.svg';
import design from '../../../assets/icons/design.svg';
import food from '../../../assets/icons/food.svg';
import management from '../../../assets/icons/management.svg';
import medicine from '../../../assets/icons/medicine.svg';
import multimedia from '../../../assets/icons/multimedia.svg';
import sales from '../../../assets/icons/sales.svg';
import support from '../../../assets/icons/support.svg';
import transportation from '../../../assets/icons/transportation.svg';
import next from '../../../assets/icons/next.svg';
import styles from './styles.module.css';

function Categories() {
  const categories = [
    { img: finance, title: 'Финансы' },
    { img: transportation, title: 'Грузоперевозки' },
    { img: design, title: 'Дизайн' },
    { img: food, title: 'Ресторанный бизнес' },
    { img: medicine, title: 'Медицина' },
    { img: multimedia, title: 'Мультимедиа' },
    { img: support, title: 'Служба поддержки' },
    { img: management, title: 'Менеджмент' },
    { img: sales, title: 'Продажи' },
  ];
  return (
    <div className={styles.grid}>
      {categories.map((category) => {
        return (
          <div key={Math.random()}>
            <img key={Math.random()} src={category.img} alt={category.title} />
            <span key={Math.random()}>{category.title}</span>
          </div>
        );
      })}
      <div className={styles.more_cards}>
        <img src={next} alt="next" />
        <span>Больше категорий</span>
      </div>
    </div>
  );
}
export default Categories;
