import styles from './CompactIconCard.module.css';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { IconCardContent } from '../types';
import CardContent from '@mui/material/CardContent';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SignpostIcon from '@mui/icons-material/Signpost';
import Chip from '@mui/material/Chip';
import { LifeListCategories } from '../Utils/Constants';

const CompactIconCard: React.FC<IconCardContent> = ({ title, subtext, displayOptions }) => {
    const { palette } = useTheme();

  const renderCardIcon = () => {  
    switch (displayOptions?.actionCategory) {
      case LifeListCategories.OBJECTIVE:
        return <EmojiEventsIcon sx={{ fontSize: 40, color: palette.secondary.main }} />;
      case LifeListCategories.EXPERIENCE:
        return <SignpostIcon sx={{ fontSize: 40, color: palette.secondary.main }} />;
      default:
        return null;
    }
  };

  return (
    <CardContent className={styles.iconCard}>
      <div className={styles.iconContainer}>
        {renderCardIcon()}
      </div>
      <div
        className={styles.cardContent}
        style={{ color: palette.primary.main }}
      >
        <h3>{title}</h3>
        {subtext && 
          <p style={{ color: palette.primary.light }}>{subtext}</p>
        }
        <Chip
          className={styles.cardTag}
          variant="filled"
          label={displayOptions?.tagText ?? "to-do"}
          data-status={displayOptions?.tagText?.toLowerCase() ?? ""}
        />
      </div>
    </CardContent>
  );
};

export default CompactIconCard;