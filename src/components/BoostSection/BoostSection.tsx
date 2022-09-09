import styles from './BoostSection.module.css';

const BoostSection: React.FunctionComponent = () => {
  return (
    <section className={styles.boosts}>
      <div className={styles.boost__container}>
        <h1>Boost your links today</h1>
        <button>Get Started</button>
      </div>
    </section>
  );
};

export default BoostSection;
