import { useState } from 'react';

import styles from './LinkItem.module.css';

type Props = {
  id: number;
  originalLink: string;
  shortedLink: string;
  removeLink: (id: number) => void;
};

const copyLinkToClipboard = async (link: string) => {
  if ('clipboard' in navigator) {
    return await navigator.clipboard.writeText(link);
  } else {
    return document.execCommand('copy', true, link);
  }
};

const LinkItem: React.FunctionComponent<Props> = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const copyClickHandler = () => {
    copyLinkToClipboard(props.shortedLink)
      .then(() => {
        setIsClicked(true);
        setTimeout(() => {
          setIsClicked(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removeLinkHandler = () => {
    props.removeLink(props.id);
  };

  return (
    <li
      className={styles.link__item__container}
      onDoubleClick={removeLinkHandler}
    >
      <p>{props.originalLink}</p>
      <div className={styles.short__link__container}>
        <p>{props.shortedLink}</p>
        <button
          onClick={copyClickHandler}
          className={
            isClicked ? `${styles.copy} ${styles.copied}` : styles.copy
          }
        >
          <span>{isClicked ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>
    </li>
  );
};

export default LinkItem;
