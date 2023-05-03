import styles from "@/styles/Container.module.sass";

const Container = ({ children, style }) => {
  return (
    <div className={styles.container} style={style}>
      {children}
    </div>
  );
};

export default Container;
