"use client";
import { useState } from "react";
import styles from "../../Styles/home/StyledTab.module.css";
import serviceDetails from "../../assets/json/serviceDetails";
import ServiceCard from "@/ui/home/ServiceCard";

const StyledTab = () => {
  const [activetab, setactivetab] = useState(0);
  const [renderKey, setRenderKey] = useState(0);
  const tabs = serviceDetails.map((detail) => detail.tabName);

  const handleTabClick = (index) => {
    setactivetab(index);
    setRenderKey((prevKey) => prevKey + 1);
  };

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabHeader}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${styles.tabButton} ${
              activetab === index ? styles.active : ""
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className={styles.tabContent} key={renderKey} activetab={activetab}>
        {serviceDetails[activetab].services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            image={service.image}
            description={service.description}
            activetab={activetab}
          />
        ))}
      </div>
    </div>
  );
};

export default StyledTab;
