import Container from "@/layouts/container";
import CircleText from "@/components/svg/CircleText";
import Arrow from "@/components/svg/Arrow";

import styles from "./Home.module.sass";
import bgStyles from "@/styles/NoiseBackground.module.sass";

const HomeScreen = () => {
  return (
    <section className={styles.home}>
      <div className={bgStyles.bg}></div>
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className={styles.home__wrapper}>
          <h1 className={styles.home__title}>
            Начинающий
            <br />
            фронтенд
            <br />
            разработчик
            <br />
          </h1>

          <div className={styles.home__inner__wrapper}>
            <p className={styles.home__text}>Из Ростова-на-Дону</p>
            <a href="#">
              <CircleText />
              <Arrow />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeScreen;
