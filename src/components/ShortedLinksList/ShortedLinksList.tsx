import LinkItem from '../LinkItem/LinkItem';
import styles from './ShortedLinksList.module.css';

type Props = {
  shortedLinks: string[];
  originalLinks: string[];
};

const ShortedLinksList: React.FunctionComponent<Props> = (props) => {
  return (
    <ul className={styles.link__list}>
      {props.shortedLinks.map((shortLink, index) => (
        <LinkItem
          key={index}
          shortedLink={shortLink}
          originalLink={props.originalLinks[index]}
        />
      ))}
    </ul>
  );
};

export default ShortedLinksList;
