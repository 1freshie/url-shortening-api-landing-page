import LinkItem from '../LinkItem/LinkItem';
import styles from './ShortedLinksList.module.css';

type Props = {
  shortedLinks: string[];
  originalLinks: string[];
  removeLink: (id: number) => void;
};

const ShortedLinksList: React.FunctionComponent<Props> = (props) => {
  return (
    <ul className={styles.link__list}>
      {props.shortedLinks.map((shortLink, index) => (
        <LinkItem
          key={index}
          id={index}
          shortedLink={shortLink}
          originalLink={props.originalLinks[index]}
          removeLink={props.removeLink}
        />
      ))}
    </ul>
  );
};

export default ShortedLinksList;
