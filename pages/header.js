import { useEffect } from "react";
import CardHeader from "../components/kemik/card-header";
import styles from "./header.module.css";

const Header = ({ onClose }) => {
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
    <div className={styles.header}>
      <div className={styles.buttonicon}>
        <img className={styles.buttoniconChild} alt="" src="/star-1@2x.png" />
        <div className={styles.butonDeneme}>Buton deneme</div>
      </div>
      <CardHeader />
      <div className={styles.menu} data-animate-on-scroll>
        <div className={styles.wrapper}>
          <div className={styles.one}>
            <div className={styles.butonDeneme}>One</div>
          </div>
          <div className={styles.one}>
            <div className={styles.butonDeneme}>Two</div>
          </div>
          <div className={styles.one}>
            <div className={styles.butonDeneme}>Three</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
import { useEffect } from "react";
import CardHeader from "../components/card-header";
import styles from "./header.module.css";

const Header = ({ onClose }) => {
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
    <div className={styles.header}>
      <div className={styles.buttonicon}>
        <img className={styles.buttoniconChild} alt="" src="/star-1@2x.png" />
        <div className={styles.butonDeneme}>Buton deneme</div>
      </div>
      <CardHeader />
      <div className={styles.menu} data-animate-on-scroll>
        <div className={styles.wrapper}>
          <div className={styles.one}>
            <div className={styles.butonDeneme}>One</div>
          </div>
          <div className={styles.one}>
            <div className={styles.butonDeneme}>Two</div>
          </div>
          <div className={styles.one}>
            <div className={styles.butonDeneme}>Three</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
