import Statistic from '../Statistic/Statistic';
import styles from './StatisticsSection.module.css';

const StatisticsSection: React.FunctionComponent = () => {
  return (
    <section className={styles.stats}>
      <div className={styles.stats__container}>
        <div className={styles.content}>
          <h1>Advanced Statistics</h1>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        
        <Statistic />
      </div>
    </section>
  );
};

export default StatisticsSection;
