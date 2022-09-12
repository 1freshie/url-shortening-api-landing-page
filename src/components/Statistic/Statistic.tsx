import styles from './Statistic.module.css';
import brand_img from '../../images/icon-brand-recognition.svg';
import records_img from '../../images/icon-detailed-records.svg';
import customization_img from '../../images/icon-fully-customizable.svg';

const Statistic: React.FunctionComponent = () => {
  return (
    <ul className={styles.cards}>
      <li className={styles.card__item}>
        <div className={styles.card__img}>
          <img src={brand_img} alt="" />
        </div>
        <h2>Brand Recognition</h2>
        <p>
          Boost your brand recognition with each click. Generic links don't mean
          a thing. Branded links help instil confidence in your content.
        </p>
      </li>
      <li className={styles.card__item}>
        <div className={styles.card__img}>
          <img src={records_img} alt="" />
        </div>
        <h2>Detailed Records</h2>
        <p>
          Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.
        </p>
      </li>
      <li className={styles.card__item}>
        <div className={styles.card__img}>
          <img src={customization_img} alt="" />
        </div>
        <h2>Fully Customizable</h2>
        <p>
          Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement.
        </p>
      </li>
    </ul>
  );
}

export default Statistic