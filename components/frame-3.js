import styles from "./frame-3.module.css";

const Frame = () => {
  return (
    <div className={styles.altMenuParent}>
      <div className={styles.altMenu}>
        <div className={styles.daire} />
        <div className={styles.daire} />
        <div className={styles.daire} />
        <div className={styles.daire} />
      </div>
      <div className={styles.plus} />
      <div className={styles.ustmenu}>
        <div className={styles.ustmenuChild} />
        <div className={styles.ustmenuItem} />
        <div className={styles.ustmenuInner} />
      </div>
      <div className={styles.header}>
        <img className={styles.headerChild} alt="" src="/polygon-1@2x.png" />
        <div className={styles.denemeDevam}>Deneme devam</div>
        <div className={styles.polygonParent}>
          <img className={styles.frameChild} alt="" src="/polygon-1@2x.png" />
          <div className={styles.frameItem} />
        </div>
      </div>
      <div className={styles.buttonicon}>
        <img className={styles.buttoniconChild} alt="" src="/star-1@2x.png" />
        <div className={styles.butonDeneme}>Buton deneme</div>
      </div>
      <div className={styles.buttonicon1}>
        <img className={styles.buttoniconChild} alt="" src="/star-1@2x.png" />
        <div className={styles.butonDeneme}>Buton Component</div>
      </div>
    </div>
  );
};

export default Frame;
