import React from "react";
import styles from "@/styles/Header.module.css";
import { BsArrowRight } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import sofa from "@/assets/img/sofa.png";
import chair from "@/assets/img/chair.png";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  },
});

const slideLeft = {
  hidden: { opacity: 0, x: -36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.35 + i * 0.12,
    },
  }),
};

const Header = () => {
  return (
    <header className={styles.hero}>
      <div className={styles.container}>
        <motion.aside
          className={styles.left}
          variants={slideLeft}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className={styles.leftText}
            variants={fadeUp(0.2)}
            initial="hidden"
            animate="visible"
          >
            O'zingiz yoqtirgan uyga ega bo'lish siz bilan faxrlanadigan
            mebellarga ega bo'lishni anglatadi. Biz sizga har bir xona uchun
            zamonaviy mebellarni olib kelishdan faxrlanamiz.
          </motion.p>

          <motion.button
            className={styles.readMore}
            variants={fadeUp(0.32)}
            initial="hidden"
            animate="visible"
            whileHover={{ x: 3 }}
            whileTap={{ scale: 0.97 }}
          >
            Ko'proq <BsArrowRight size={18} className={styles.arrow} />
          </motion.button>
        </motion.aside>

        <motion.main
          className={styles.center}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className={styles.searchRow}
            variants={fadeUp(0.15)}
            initial="hidden"
            animate="visible"
          >
            <span className={styles.searchIcon} aria-hidden="true">
              <CiSearch size={18} style={{ color: "white" }} />
            </span>
            <input className={styles.search} placeholder="Qidiruv" />
          </motion.div>

          <motion.h1
            className={styles.title}
            variants={fadeUp(0.28)}
            initial="hidden"
            animate="visible"
          >
            Xonangizni <br />
            Qulay va Sirli
            <br />
            His qiling
          </motion.h1>
        </motion.main>

        <motion.aside
          className={styles.right}
          variants={slideRight}
          initial="hidden"
          animate="visible"
        >
          <motion.h3
            className={styles.featuredTitle}
            variants={fadeUp(0.2)}
            initial="hidden"
            animate="visible"
          >
            Tavsiya etilgan
          </motion.h3>

          <div className={styles.cards}>
            {[
              { src: sofa, alt: "Black Sofa", name: "Divan", price: "$250" },
              { src: chair, alt: "Black Chair", name: "Stul", price: "$100" },
            ].map((item, i) => (
              <motion.div
                key={item.name}
                className={styles.card}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={styles.cardIconWrap}>
                  <motion.img
                    src={item.src}
                    alt={item.alt}
                    className={styles.cardIcon}
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 3 + i * 0.6,
                      ease: "easeInOut",
                    }}
                  />
                </div>

                <div className={styles.cardInfo}>
                  <p className={styles.cardName}>{item.name}</p>
                  <p className={styles.cardPrice}>{item.price}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button
            className={styles.moreProduct}
            variants={fadeUp(0.6)}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.97 }}
          >
            Ko'proq mahsulot
          </motion.button>
        </motion.aside>
      </div>
    </header>
  );
};

export default Header;
