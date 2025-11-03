import React, { useState } from 'react';
import { useTheme } from '@mui/material';
import '../Styles/image-cards.css';

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
      <img src={imageSrc} alt={title} className="card-image" />
      <div
        className={`text-panel ${hovered ? 'expanded' : 'collapsed'}`}
        style={{ background: palette.primary.main, color: palette.primary.contrastText }}
      >
        <h3 className="title">{title}</h3>
        <p className={`subtext ${hovered ? 'expanded-text' : 'truncated'}`}>
          {subtext}
        </p>
      </div>
    </div>
  );

  return (
  <div className="image-card">
    {projectURL ? (
      <a href={projectURL} target="_blank">
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