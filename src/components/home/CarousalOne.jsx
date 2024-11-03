"use client";
import React from "react";
import styles from "../../Styles/home/Carousal.module.css"; 

const CarousalOne = ({ images1, images2 }) => {
  // Duplicate images to ensure seamless scrolling
  const allImages = [...images1, ...images1];
  const all = [...images2, ...images2];

  return (
    <div>
      <section id="marquee">
        <div className={styles.container}>
          <div className={styles.picContainer}>
            {allImages.map((imageUrl, index) => (
              <div className={styles.pic} key={index}>
                <img className={styles.img} src={imageUrl} alt={`img${index}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="reverse-marquee">
        <div className={styles.container}>
          <div className={styles.reversePicContainer}>
            {all.map((image, i) => (
              <div className={styles.pic} key={i}>
                <img className={styles.img} src={image} alt={`img${i}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarousalOne;
