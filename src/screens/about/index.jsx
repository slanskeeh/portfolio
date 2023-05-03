import Container from "@/layouts/container";

import styles from "./About.module.sass";
import bgStyles from "@/styles/NoiseBackground.module.sass";

const AboutScreen = () => {
  return (
    <section className={styles.about}>
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
