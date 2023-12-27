import { useEffect } from "react";
import styles from "./menu.module.css";

const Menu = ({ onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className={styles.menu} data-animate-on-scroll>
      <div className={styles.wrapper}>
        <div className={styles.one}>
          <div className={styles.one1}>One</div>
        </div>
        <div className={styles.one}>
          <div className={styles.one1}>Two</div>
        </div>
        <div className={styles.one}>
          <div className={styles.one1}>Three</div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
