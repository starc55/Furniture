import React from "react";
import styles from "@/styles/ui/Section.module.css";

const Section = ({ title, subtitle }) => {
  return (
    <div className={styles.sectionContainer}>
      <p className={styles.sectionTitle}>{title}</p>
      <p className={styles.sectionSubtitle}>{subtitle}</p>
    </div>
  );
};

export default Section;
