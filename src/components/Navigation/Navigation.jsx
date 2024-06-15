import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";
import logo from "../../assets/logo/logo.png";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const LINKS = [
  {
    pathName: "/",
    label: "HOME",
  },
  {
    pathName: "/newStories",
    label: "NEW STORIES",
  },
  {
    pathName: "/bestStories",
    label: "BEST STORIES",
  },
  {
    pathName: "/askStories",
    label: "ASK",
  },
  {
    pathName: "/showStories",
    label: "SHOW",
  },
  {
    pathName: "/jobStories",
    label: "JOBS",
  },
];

function Navigation() {
  const location = useLocation();

  return (
    <nav className={styles.nav}>
      <img src={logo} alt="Hacker News Logo" className={styles.logo} />
      <ul className={styles.list}>
        {LINKS.map((link) => {
          return (
            <li key={link.pathName}>
              <NavLink to={link.pathName}>{link.label}</NavLink>
              {location.pathname === link.pathName && (
                <motion.div
                  className={styles.activeTabIndicator}
                  layoutId="activeTabId"
                />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navigation;
