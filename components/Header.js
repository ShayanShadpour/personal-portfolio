import React from "react";
import styles from "../styles/Header.module.scss";
import Link from "next/link";

const Header = () => {
  const [isActive, setActive] = React.useState("false");
  const ToggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div className={styles.header}>
      <div className={styles.name}>
        <Link href="/">
          <a>
            <h1>Shayan Shadpour</h1>
          </a>
        </Link>
      </div>

      <div className={styles.flexmenu}>
        <ul className={styles.navbar}>
          <li>
            <Link href="/experience">
              <a>
                <h3>Projects</h3>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>
                <h3>Contact</h3>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
