/* eslint-disable react/prop-types */
import styles from "./CenterMessage.module.scss";

function CenterMessage({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default CenterMessage;
