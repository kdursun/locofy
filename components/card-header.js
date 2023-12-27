import { useState, useCallback } from "react";
import Menu from "./menu";
import PortalDrawer from "./portal-drawer";
import styles from "./card-header.module.css";

const CardHeader = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const openMenu = useCallback(() => {
    setMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <>
      <div className={styles.navbarheader}>
        <div className={styles.logo}>
          <div className={styles.logo1}>Logo</div>
        </div>
        <div className={styles.right}>
          <button className={styles.hamburger} onClick={openMenu}>
            <div className={styles.hamburger1}>
              <img
                className={styles.hamburger1Icon}
                alt=""
                src="/hamburger-1@2x.png"
              />
            </div>
          </button>
          <div className={styles.navigationlinks}>
            <div className={styles.one}>one</div>
            <div className={styles.two}>two</div>
            <div className={styles.three}>three</div>
          </div>
          <div className={styles.bell}>
            <img className={styles.bell1Icon} alt="" src="/bell-1@2x.png" />
          </div>
          <div className={styles.bell}>
            <img
              className={styles.profile1Icon}
              alt=""
              src="/profile-1@2x.png"
            />
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeMenu}
        >
          <Menu onClose={closeMenu} />
        </PortalDrawer>
      )}
    </>
  );
};

export default CardHeader;
