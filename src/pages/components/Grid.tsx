/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import styles from "@/styles/Home.module.css";

const Grid: FC<{
  items: {
    title: string;
    description: string;
  }[];
}> = ({ items }) => {
  return (
    <section className={styles.grid}>
      <div className={styles.featured}>
        <img
          alt="placeholder"
          src="https://via.placeholder.com/1024x768/eee?text=4:3"
          width={600}
        ></img>
        <div className={styles.text}>
          <h3>{items[0].title}</h3>
          <p>{items[0].description}</p>
        </div>
      </div>
      <div className={styles.first}>
        <img
          alt="placeholder"
          src="https://via.placeholder.com/1024x768/eee?text=4:3"
          width={230}
        ></img>
        <div className={styles.text}>
          <h3>{items[1].title}</h3>
          <p>{items[1].description}</p>
        </div>
      </div>
      <div className={styles.second}>
        <img
          alt="placeholder"
          src="https://via.placeholder.com/1024x768/eee?text=4:3"
          width={230}
        ></img>
        <div className={styles.text}>
          <h3>{items[2].title}</h3>
          <p>{items[2].description}</p>
        </div>
      </div>
      <div className={styles.third}>
        <img
          alt="placeholder"
          src="https://via.placeholder.com/1024x768/eee?text=4:3"
          width={230}
        ></img>
        <div className={styles.text}>
          <h3>{items[3].title}</h3>
          <p>{items[3].description}</p>
        </div>
      </div>
    </section>
  );
};

export default Grid;
