import styles from './Test.module.scss'
export function Test() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
          Achievements
      </div>
      <div className={styles.achievements}>
        <div className={styles.achievement}>1</div>
        <div className={styles.achievement}>2</div>
        <div className={styles.achievement}>3</div>
        <div className={styles.achievement}>4</div>
        <div className={styles.achievement}>3</div>
        <div className={styles.achievement}>4</div>


      </div>
    </div>
  );
}

export default Test;
