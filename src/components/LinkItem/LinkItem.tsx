import { useState } from 'react';

import styles from './LinkItem.module.css';

type Props = {
  originalLink: string;
  shortedLink: string;
};

const LinkItem: React.FunctionComponent<Props> = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <li className={styles.link__item__container}>
      <p>{props.originalLink}</p>
      <div className={styles.short__link__container}>
        <p>{props.shortedLink}</p>
        <button>Copy</button>
      </div>
    </li>
  );
};

export default LinkItem;
