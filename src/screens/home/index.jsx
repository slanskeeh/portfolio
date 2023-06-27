import Container from "@/layouts/container";
import CircleText from "@/components/svg/CircleText";
import Arrow from "@/components/svg/Arrow";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import { motion } from "framer-motion";

import styles from "./Home.module.sass";
import bgStyles from "@/styles/NoiseBackground.module.sass";

const HomeScreen = ({ setIsIntersecting }) => {
  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    setIsIntersecting(inView);
  }, [inView]);

  return (
    <section ref={ref} className={styles.home}>
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
            <div className={styles.home__title__wrapper}>
              {"Начинающий".split("").map((letter) => {
                return (
                  <motion.p
                    className={styles.home__title__p}
                    whileHover={{
                      scaleY: 0.9,
                      y: 4,
                    }}
                  >
                    {letter}
                  </motion.p>
                );
              })}
            </div>
            <br />
            <div className={styles.home__title__wrapper}>
              {"фронтенд".split("").map((letter) => {
                return (
                  <motion.p
                    className={styles.home__title__p}
                    whileHover={{
                      scaleY: 0.9,
                      y: 4,
                    }}
                  >
                    {letter}
                  </motion.p>
                );
              })}
            </div>
            <br />
            <div className={styles.home__title__wrapper}>
              {"разработчик".split("").map((letter) => {
                return (
                  <motion.p
                    className={styles.home__title__p}
                    whileHover={{
                      scaleY: 0.9,
                      y: 4,
                    }}
                  >
                    {letter}
                  </motion.p>
                );
              })}
            </div>
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
