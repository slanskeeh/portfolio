import Container from "@/layouts/container";
import Logo from "../svg/Logo";

import styles from "./Header.module.sass";

const Header = ({ isIntersectingHomeScreen, isIntersectingAboutScreen }) => {
  return (
    <header className={styles.header}>
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          className={
            !isIntersectingHomeScreen && isIntersectingAboutScreen
              ? styles.header__logo_dark
              : styles.header__logo
          }
        >
          <a href="#" className={styles.header__logo_link}>
            <Logo />
          </a>
        </div>
        <nav className={styles.header__nav}>
          <ul className={styles.header__nav__links}>
            <li>
              <a
                className={
                  !isIntersectingHomeScreen && isIntersectingAboutScreen
                    ? styles.header__nav__links_dark
                    : null
                }
                href="#"
              >
                Обо мне
              </a>
            </li>
            <li>
              <a
                className={
                  !isIntersectingHomeScreen && isIntersectingAboutScreen
                    ? styles.header__nav__links_dark
                    : null
                }
                href="#"
              >
                Работы
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
