import styles from "./style.module.scss";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const link: Array<{ route: string; text: string }> = ([] = [
    {
      route: "#home-wed",
      text: "Home",
    },
    {
      route: "#add-wed",
      text: "Address",
    },
    {
      route: "#gal-wed",
      text: "Photo",
    },
  ]);

  return (
    <nav id="scrl" className={styles.nav}>
      <div className={styles["icon-menu"]}>
        {showHamburgerMenu ? (
          <FaTimes
            size={25}
            onClick={() => setShowHamburgerMenu(!showHamburgerMenu)}
          />
        ) : (
          <FaBars
            size={25}
            onClick={() => setShowHamburgerMenu(!showHamburgerMenu)}
          />
        )}
      </div>
      <div className={styles.logo}>
        <h1>WEDDINGS</h1>
      </div>

      <div className={styles.menu}>
        <ul className={showHamburgerMenu ? styles.showing : ""}>
          {link.map((data: { route: string; text: string }, key: number) => (
            <li className={styles["bg-biru"]} key={key}>
              <a href={data.route}>
                <span> {data.text} </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
