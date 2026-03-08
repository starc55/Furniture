import React from "react";
import { motion } from "framer-motion";
import { GoArrowRight } from "react-icons/go";
import { CiStar } from "react-icons/ci";
import styles from "@/styles/Products.module.css";
import Section from "../components/ui/Section";

import p1 from "@/assets/img/p1.png";
import p2 from "@/assets/img/p2.png";
import p3 from "@/assets/img/p3.png";
import p4 from "@/assets/img/p4.png";

const products = [
  {
    id: 1,
    title: "LED Work Lamp",
    price: 40,
    image: p1,
    rating: 5,
    tag: "Hot deal",
  },
  {
    id: 2,
    title: "FEJKA Potted Plant",
    price: 24,
    image: p2,
    rating: 5,
    tag: "Fresh look",
  },
  {
    id: 3,
    title: "Modern Black Chair",
    price: 80,
    image: p3,
    rating: 5,
    tag: "Best comfort",
  },
  {
    id: 4,
    title: "MICKE Desk, Black",
    price: 120,
    image: p4,
    rating: 5,
    tag: "Top choice",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.92 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageVariants = {
  rest: { scale: 1, rotate: 0, y: 0 },
  hover: {
    scale: 1.08,
    y: -8,
    rotate: -2,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const badgeVariants = {
  rest: { opacity: 0.85, y: 0 },
  hover: {
    opacity: 1,
    y: -3,
    transition: { duration: 0.3 },
  },
};

const Products = () => {
  return (
    <section className={styles.productsSection}>
      <div className={styles.productsContainer}>
        <Section title="Best Selling Product" />

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className={styles.card}
              variants={cardVariants}
              initial="rest"
              whileHover="hover"
            >
              <motion.div className={styles.badge} variants={badgeVariants}>
                {product.tag}
              </motion.div>

              <div className={styles.imageWrap}>
                <motion.img
                  src={product.image}
                  alt={product.title}
                  className={styles.image}
                  variants={imageVariants}
                />

                <motion.div
                  className={styles.glow}
                  animate={{
                    scale: [1, 1.12, 1],
                    opacity: [0.28, 0.45, 0.28],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                />
              </div>

              <motion.h3
                className={styles.title}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.25 }}
              >
                {product.title}
              </motion.h3>

              <div className={styles.meta}>
                <motion.span
                  className={styles.price}
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.2 }}
                >
                  ${product.price}
                </motion.span>

                <div className={styles.rating}>
                  {[...Array(product.rating)].map((_, i) => (
                    <motion.span
                      key={i}
                      className={styles.starWrap}
                      initial={{ opacity: 0, y: 8, scale: 0.6 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        delay: 0.5 + index * 0.12 + i * 0.08,
                        duration: 0.35,
                      }}
                      whileHover={{
                        y: -3,
                        rotate: [0, -12, 12, 0],
                        scale: 1.2,
                        transition: { duration: 0.4 },
                      }}
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.18, 1],
                          filter: [
                            "drop-shadow(0 0 0px rgba(255,145,0,0.0))",
                            "drop-shadow(0 0 8px rgba(255,145,0,0.6))",
                            "drop-shadow(0 0 0px rgba(255,145,0,0.0))",
                          ],
                        }}
                        transition={{
                          duration: 1.8,
                          repeat: Infinity,
                          delay: i * 0.18,
                        }}
                      >
                        <CiStar
                          className={styles.star}
                          fill="currentColor"
                          size={16}
                        />
                      </motion.div>
                    </motion.span>
                  ))}
                </div>
              </div>

              <motion.div
                className={styles.bottomLine}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.35 }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.button
          className={styles.moreBtn}
          whileHover={{ y: -3, scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.25 }}
        >
          <span>More Product</span>
          <motion.span
            animate={{ x: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <GoArrowRight size={18} />
          </motion.span>
        </motion.button>
      </div>
    </section>
  );
};

export default Products;
