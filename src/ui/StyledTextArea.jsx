"use client";
import styles from "../Styles/TextArea.module.css";

const StyledTextArea = ({ placeholder, onChange }) => {
  return <textarea className={styles.textarea} placeholder={placeholder} onChange={onChange} />;
};

export default StyledTextArea;
