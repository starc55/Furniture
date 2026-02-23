import React, { useState, useEffect } from "react";
import { FaRegUser } from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/styles/layouts/Navbar.module.css";
import sofa from "@/assets/img/sofa.png";
import chair from "@/assets/img/chair.png";

const NAV_LINKS = [
  { label: "Bosh sahifa", href: "/", active: true },
  { label: "Biz haqimizda", href: "/" },
  { label: "Akksessuarlar", href: "/" },
  { label: "Biz bilan bog'laning", href: "/" },
];

const PRODUCTS = [
  { id: 1, name: "Divan", price: "$250", img: sofa, alt: "Black Sofa" },
  { id: 2, name: "Stul", price: "$100", img: chair, alt: "Black Chair" },
];

const drawerVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.08 + i * 0.07,
      duration: 0.38,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.32 + i * 0.1,
      duration: 0.42,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.38, ease: [0.22, 1, 0.36, 1] },
  },
});

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <div
        className={`${styles.navbarContainer} ${
          scrolled ? styles.scrolled : ""
        }`}
      >
        <p className={styles.logoName}>Soff Mebel</p>

        <ul className={styles.navLinks}>
          {NAV_LINKS.map((link) => (
            <li key={link.label} className={link.active ? styles.active : ""}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className={styles.navRight}>
          <div className={styles.navbarUser}>
            <FaRegUser size={18} style={{ color: "#2D322B" }} />
          </div>

          <motion.button
            className={styles.hamburger}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Menyuni yopish" : "Menyuni ochish"}
            whileTap={{ scale: 0.91 }}
          >
            <motion.span
              className={styles.hLine}
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.span
              className={styles.hLine}
              animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className={styles.hLine}
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28 }}
              onClick={close}
            />

            <motion.nav
              className={styles.drawer}
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <p className={styles.drawerLogo}>Soff Mebel</p>

              <ul className={styles.drawerLinks}>
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.label}
                    custom={i}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    className={link.active ? styles.drawerActive : ""}
                  >
                    <a
                      href={link.href}
                      className={styles.drawerLink}
                      onClick={close}
                    >
                      {link.label}
                      <BsArrowRight size={14} className={styles.drawerArrow} />
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                className={styles.productsSection}
                variants={fadeUp(0.28)}
                initial="hidden"
                animate="visible"
              >
                <p className={styles.productsTitle}>Tavsiya etilgan</p>

                <div className={styles.productCards}>
                  {PRODUCTS.map((p, i) => (
                    <motion.div
                      key={p.id}
                      className={styles.productCard}
                      custom={i}
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover={{
                        scale: 1.03,
                        background: "rgba(255,255,255,0.16)",
                      }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <motion.img
                        src={p.img}
                        alt={p.alt}
                        className={styles.productImg}
                        animate={{ y: [0, -4, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 3 + i * 0.7,
                          ease: "easeInOut",
                        }}
                      />
                      <div className={styles.productInfo}>
                        <span className={styles.productName}>{p.name}</span>
                        <span className={styles.productPrice}>{p.price}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className={styles.drawerActions}>
                  <motion.button
                    className={styles.btnPrimary}
                    variants={fadeUp(0.48)}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={close}
                  >
                    Ko'proq mahsulot
                    <BsArrowRight size={15} />
                  </motion.button>

                  <motion.button
                    className={styles.btnSecondary}
                    variants={fadeUp(0.54)}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={close}
                  >
                    Katalogni ko'rish
                  </motion.button>
                </div>
              </motion.div>

              <motion.div
                className={styles.drawerUser}
                variants={fadeUp(0.6)}
                initial="hidden"
                animate="visible"
              >
                <div className={styles.navbarUser}>
                  <FaRegUser size={16} style={{ color: "#2D322B" }} />
                </div>
                <span className={styles.drawerUserText}>Profil</span>
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
