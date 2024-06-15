/* eslint-disable react/prop-types */
import styles from "./ListItem.module.scss";
import { formatDistance, fromUnixTime } from "date-fns";

function ListItem({ title, score, by, time, descendants, url }) {
  const formattedTime = formatDistance(fromUnixTime(time), new Date(), {
    addSuffix: true,
    includeSeconds: true,
  });

  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        {title && url && (
          <a href={url} className={styles.title}>
            {title}
          </a>
        )}
        {title && !url && (
          <a href={url} className={styles.title}>
            {title}
          </a>
        )}
      </div>
      <div className={styles.divider} />
      <div className={styles.bottomSection}>
        {score && <span className={styles.subtitle}>{score} Score</span>}
        {by && <span className={styles.subtitle}>by {by}</span>}
        {time && <span className={styles.subtitle}>{formattedTime}</span>}
        {descendants && (
          <span className={styles.subtitle}>{descendants} comments</span>
        )}
      </div>
    </div>
  );
}

export default ListItem;
/*
{
    by: "dhouston",
    descendants: 71,
    id: k,
    kids: [9224],
    score: 104,
    time: 1175714200,
    title: "My YC app: Dropbox - Throw away your USB drive",
    type: "story",
    url: "http://www.getdropbox.com/u/2/screencast.html",
  } */
