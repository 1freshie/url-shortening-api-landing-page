import styles from './Footer.module.css';
import logo from '../../images/logo.svg';
import fb_logo from '../../images/icon-facebook.svg';
import ig_logo from '../../images/icon-instagram.svg';
import pin_logo from '../../images/icon-pinterest.svg';
import twit_logo from '../../images/icon-twitter.svg';

const Footer: React.FunctionComponent = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.footer__container}>
        <img src={logo} alt="logo" className={styles.footer__logo} />
        <div className={styles.lists}>
          <ul className={styles.list}>
            <h1>Features</h1>
            <li className={styles.list__item}>Link Shortening</li>
            <li className={styles.list__item}>Branded Links</li>
            <li className={styles.list__item}>Analytics</li>
          </ul>
          <ul className={styles.list}>
            <h1>Resources</h1>
            <li className={styles.list__item}>Blog</li>
            <li className={styles.list__item}>Developers</li>
            <li className={styles.list__item}>Support</li>
          </ul>
          <ul className={styles.list}>
            <h1>Company</h1>
            <li className={styles.list__item}>About</li>
            <li className={styles.list__item}>Our Team</li>
            <li className={styles.list__item}>Careers</li>
            <li className={styles.list__item}>Contact</li>
          </ul>
        </div>
        <div className={styles.socials}>
          <ul className={styles.list__socials}>
            <li className={styles.li__social}>
              <img src={fb_logo} alt="facebook" />
            </li>
            <li className={styles.li__social}>
              <img src={twit_logo} alt="twitter" />
            </li>
            <li className={styles.li__social}>
              <img src={pin_logo} alt="pinterest" />
            </li>
            <li className={styles.li__social}>
              <img src={ig_logo} alt="instagram" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
