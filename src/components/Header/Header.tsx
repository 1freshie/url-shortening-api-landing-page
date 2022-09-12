import styles from './Header.module.css';
import img from '../../images/illustration-working.svg';

const Header: React.FunctionComponent = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>More than just shorter links</h1>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <button>Get Started</button>
        </div>
        <img src={img} alt="working" />
      </div>
    </section>
  );
};

export default Header;
