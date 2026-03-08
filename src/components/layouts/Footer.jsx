import React from "react";
import { motion } from "framer-motion";
import styles from "@/styles/layouts/Footer.module.css";
import sofaFoot from "@/assets/img/sofaFoot.png";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

import { IoSend } from "react-icons/io5";

const footerLinks = {
  quick: ["Home", "Shop", "About Us", "Collections", "Blog"],
  support: ["Contact", "FAQs", "Privacy Policy", "Terms", "Help Center"],
  categories: ["Chair", "Table", "Lamp", "Sofa", "Decor"],
};

const socials = [
  { id: 1, icon: <FaFacebookF />, link: "#" },
  { id: 2, icon: <FaInstagram />, link: "#" },
  { id: 3, icon: <FaTwitter />, link: "#" },
  { id: 4, icon: <FaLinkedinIn />, link: "#" },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topGrid}>
          <div className={styles.brandCol}>
            <div className={styles.logo}>
              SOFF<span>.</span>
            </div>

            <p className={styles.desc}>
              Elegant furniture for modern living. Transform your space into a
              stylish and comfortable environment.
            </p>

            <div className={styles.socials}>
              {socials.map((item) => (
                <motion.a
                  key={item.id}
                  href={item.link}
                  className={styles.socialBtn}
                  whileHover={{ y: -4, scale: 1.1 }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className={styles.linkCol}>
            <h4>Quick Links</h4>

            <ul>
              {footerLinks.quick.map((link, i) => (
                <li key={i}>
                  <a href="#">
                    {link}
                    <FaArrowUpRightFromSquare />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linkCol}>
            <h4>Support</h4>

            <ul>
              {footerLinks.support.map((link, i) => (
                <li key={i}>
                  <a href="#">
                    {link}
                    <FaArrowUpRightFromSquare />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linkCol}>
            <h4>Categories</h4>

            <ul>
              {footerLinks.categories.map((link, i) => (
                <li key={i}>
                  <a href="#">
                    {link}
                    <FaArrowUpRightFromSquare />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.newsletterCol}>
            <h4>Newsletter</h4>

            <p>Subscribe to get updates about new furniture collections.</p>

            <form className={styles.form}>
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.input}
              />

              <button className={styles.submitBtn}>
                <IoSend />
              </button>
            </form>

            <div className={styles.contactMini}>
              <span>Email: hello@furni.com</span>
              <span>Phone: +998 90 123 45 67</span>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 SOFF. All rights reserved.</p>

          <div className={styles.bottomLinks}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
      <img src={sofaFoot} alt="" className={styles.sofaFoot}/>
    </footer>
  );
};

export default Footer;
