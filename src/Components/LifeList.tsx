import React, { useEffect, useState } from 'react';
import CompactIconCard from './CompactIconCard';
import { LifeListItem } from '../types';
import styles from './LifeList.module.css';

const LifeList: React.FC = () => {
  const [listItems, setListItems] = useState<LifeListItem[]>([]);
  
  // Fetch using useEffect for demo instead of loading in local file content
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('/data/lifeListData.json');
        const items = await response.json();
        setListItems(items);
      } catch (error) {
        console.error("Error fetching life list items:", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <>
      <div className="page-header">
        <h1>Life List</h1>
        <p>What better way to get to know me than the things I aim to do and experience? Items are tagged with their status and icons indicate their category (experience or objective).</p>
      </div>      
        <div className={styles.iconCardsGrid}>
        {listItems.map((item) => (
          <CompactIconCard
            key={item.id}
            title={item.title}
            subtext={item.notes}
            displayOptions={{ actionCategory: item.category, tagText: item.status }}
          />
        ))}
      </div>
    </>
  );
};

export default LifeList;