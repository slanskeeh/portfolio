import Container from "@/layouts/container";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import styles from "./About.module.sass";
import bgStyles from "@/styles/NoiseBackground.module.sass";

const AboutScreen = ({ setIsIntersecting }) => {
  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    setIsIntersecting(inView);
  }, [inView]);
  return (
    <section ref={ref} className={styles.about}>
      <div className={bgStyles.bg}></div>
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className={styles.about__wrapper}>About</div>
      </Container>
    </section>
  );
};

export default AboutScreen;
