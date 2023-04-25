import Container from "./Container";
import CircleText from "./svg/CircleText";
import Arrow from "./svg/Arrow";

import styles from "@/styles/Main.module.sass";

const Main = () => {
  return (
    <section className={styles.main}>
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className={styles.main__wrapper}>
          <h1 className={styles.main__title}>
            Начинающий
            <br />
            фронтенд
            <br />
            разработчик
            <br />
          </h1>

          <div className={styles.main__inner__wrapper}>
            <p className={styles.main__text}>Из Ростова-на-Дону</p>
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

export default Main;
