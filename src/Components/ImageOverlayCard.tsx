import React, { useState } from 'react';
import { useTheme } from '@mui/material';
import styles from './ImageOverlayCard.module.css';

type ImageOverlayCardProps = {
  imageSrc: string,
  title: string,
  subtext: string
  projectURL?: string
};

const ImageOverlayCard = ({ imageSrc, title, subtext, projectURL = "" }: ImageOverlayCardProps) => {
  const [hovered, setHovered] = useState(false);
  const { palette } = useTheme();

  const cardContent = (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={imageSrc} alt={title} className={styles.cardImage} />
      <div
        className={`${styles.textPanel} ${hovered ? styles.expanded : styles.collapsed}`}
        style={{ background: palette.primary.main, color: palette.primary.contrastText }}
      >
        <h3 className={styles.title}>{title}</h3>
        <p className={`${styles.subtext} ${hovered ? '' : styles.truncated}`}>
          {subtext}
        </p>
      </div>
    </div>
  );

  return (
  <div className={styles.imageCard}>
    {projectURL ? (
      <a href={projectURL} target="_blank" rel="noopener noreferrer">
        {cardContent}
      </a>
      ) : (
        cardContent
      )
    }
  </div>
  );
};

export default ImageOverlayCard;