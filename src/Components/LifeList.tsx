import React from 'react';
import CompactIconCard from './CompactIconCard';
import styles from './LifeList.module.css';
import useLifeListData from '../hooks/useLifeListData';

const LifeList: React.FC = () => {
  const { data: listItems, loading, error } = useLifeListData();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Could not load life list: {error}</p>;

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