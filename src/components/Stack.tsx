/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import styles from "@/styles/Home.module.css";

const Stack: FC<{
  items: {
    title: string;
    description: string;
  }[];
}> = ({ items }) => {
  return (
    <section className={styles.stack}>
      {items.map((item) => (
        <div className={styles.card} key={item.title}>
          <img
            alt="placeholder"
            src="https://via.placeholder.com/1024x768/eee?text=4:3"
            width={372}
          ></img>
          <div className={styles.text}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Stack;
