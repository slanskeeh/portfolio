import Container from "@/layouts/container";

import styles from "./Header.module.sass";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className={styles.header__logo}>
          <a href="#" className={styles.header__logo_link}>
            <svg
              width="50"
              height="32"
              viewBox="0 0 50 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.4142 1.58579L1.41421 27.5858C0.154284 28.8457 1.04662 31 2.82843 31H4.67157C5.20201 31 5.71071 30.7893 6.08579 30.4142L8.66421 27.8358C9.03929 27.4607 9.54799 27.25 10.0784 27.25H11.125C12.1605 27.25 13 28.0895 13 29.125C13 30.1605 13.8395 31 14.875 31H34.2639C35.0215 31 35.714 30.572 36.0528 29.8944L41.5528 18.8944C42.2177 17.5646 41.2507 16 39.7639 16H36.7361C35.9785 16 35.286 16.428 34.9472 17.1056L32.3028 22.3944C31.964 23.072 31.2715 23.5 30.5139 23.5H27.4861C25.9993 23.5 25.0323 21.9354 25.6972 20.6056L31.1972 9.60557C31.536 8.928 32.2285 8.5 32.9861 8.5H45.5139C46.2715 8.5 46.964 8.072 47.3028 7.39443L49.0528 3.89443C49.7177 2.56463 48.7507 1 47.2639 1H28.8284C28.298 1 27.7893 1.21071 27.4142 1.58579Z"
                // stroke="#2A2A2A"
              />
            </svg>
          </a>
        </div>
        <nav className={styles.header__nav}>
          <ul className={styles.header__nav__links}>
            <li className={styles.header__nav__links_link}>
              <a href="#">Обо мне</a>
            </li>
            <li className={styles.header__nav__links_link}>
              <a href="#">Работы</a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
