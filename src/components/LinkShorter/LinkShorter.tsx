import React, { useEffect, useState } from 'react';
import ShortedLinksList from '../ShortedLinksList/ShortedLinksList';
import styles from './LinkShorter.module.css';

const LinkShorter: React.FunctionComponent = () => {
  // TODO: Functionality
  const [shortedLinks, setShortedLinks] = useState<string[]>([]);
  const [originalLinks, setOriginalLinks] = useState<string[]>([]);
  const [currentLink, setCurrentLink] = useState('');
  const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const data = window.localStorage.getItem('SHORTED_LINKS');
  //   console.log(data);
  //   if (data?.length !== 0 && data !== null) {
  //     setShortedLinks(JSON.parse(data));
  //   }
  // }, []);

  // useEffect(() => {
  //   if (shortedLinks.length !== 0) {
  //     window.localStorage.setItem(
  //       'SHORTED_LINKS',
  //       JSON.stringify(shortedLinks)
  //     );
  //   }
  // }, [shortedLinks]);

  const linkInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentLink(event.target.value);
  };

  const linkShorteningHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    setError(null);

    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${currentLink}`
      );

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error);
      }

      const data = await response.json();

      const shortedLink: string = data.result.full_short_link;

      setShortedLinks((prevShortedLinks) => [...prevShortedLinks, shortedLink]);
      setOriginalLinks((prevOriginalLinks) => [
        ...prevOriginalLinks,
        currentLink,
      ]);
    } catch (error: any) {
      setError(error.message);
    }

    setCurrentLink('');
  };

  let content = <p></p>;

  if (shortedLinks.length > 0) {
    content = <ShortedLinksList shortedLinks={shortedLinks} originalLinks={originalLinks} />;
  }

  if (error) {
    content = <p className={styles.text__error}>{error}</p>;
  }

  return (
    // <div className={`${styles.input__container} ${styles.input__error}`}>
    //   <div>
    //     <input type="text" placeholder="Shorten link a here..." />
    //     <p className={styles.text__error}>Please add a link</p>
    //   </div>
    //   <button>Shorten it!</button>
    // </div>
    <React.Fragment>
      <form
        className={
          error
            ? `${styles.input__container} ${styles.input__error}`
            : styles.input__container
        }
        onSubmit={linkShorteningHandler}
      >
        <div>
          <input
            type="text"
            placeholder="Shorten link a here..."
            onChange={linkInputHandler}
          />
          {error && content}
        </div>
        <button onClick={linkShorteningHandler}>Shorten it!</button>
      </form>
      <section>{content}</section>
    </React.Fragment>
  );
};

export default LinkShorter;
