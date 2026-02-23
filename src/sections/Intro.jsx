import React from "react";
import { motion } from "framer-motion";
import styles from "@/styles/Intro.module.css";

import f1 from "@/assets/img/f1.png";
import f2 from "@/assets/img/f2.png";
import f3 from "@/assets/img/f3.png";

const products = [
  { id: 1, title: "Modern Chair", price: "$60.00", image: f1 },
  { id: 2, title: "Kruzo Aero Chair", price: "$78.00", image: f2 },
  { id: 3, title: "Ergonomic Chair", price: "$88.00", image: f3 },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardAnim = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const floatImg = {
  rest: { y: 0, rotate: 0 },
  hover: {
    y: -6,
    rotate: -0.6,
    transition: { type: "spring", stiffness: 260, damping: 18 },
  },
};

const Intro = () => {
  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        <motion.div
          className={styles.left}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        >
          <motion.h2 className={styles.title} variants={fadeUp}>
            Ajoyib materiallar
            <br /> bilan <br /> yaratilgan.
          </motion.h2>

          <motion.p className={styles.desc} variants={fadeUp}>
            Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
            vivethe as it was for us to know what was to be done.
          </motion.p>

          <motion.button
            className={styles.btn}
            variants={fadeUp}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            Mahsulotlar
          </motion.button>
        </motion.div>

        <motion.div
          className={styles.right}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          {products.map((p, idx) => (
            <motion.article
              key={p.id}
              className={styles.card}
              variants={cardAnim}
              whileHover="hover"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.03 }}
            >
              <div className={styles.cardBg} />

              <motion.img
                className={styles.img}
                src={p.image}
                alt={p.title}
                variants={floatImg}
                initial="rest"
                whileHover="hover"
              />

              <div className={styles.meta}>
                <div className={styles.name}>{p.title}</div>
                <div className={styles.price}>{p.price}</div>
              </div>

              <div
                className={styles.dot}
                aria-hidden="true"
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300, damping: 16 }}
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
