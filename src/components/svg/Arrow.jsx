import styles from "@/styles/Arrow.module.sass";

const Arrow = () => {
  return (
    <svg
      className={styles.svg}
      width="69"
      height="69"
      viewBox="0 0 69 69"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={styles}
    >
      <path
        d="M68 68H1V51.25H40.0833L1 12.1667L12.1667 1L51.25 40.0833V1H68V68Z"
        stroke="#2A2A2A"
      />
    </svg>
  );
};

export default Arrow;
