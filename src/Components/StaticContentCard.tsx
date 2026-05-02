import React, { ReactNode, useState } from 'react';
import { useTheme, Modal, Box } from '@mui/material';
import styles from './StaticContentCard.module.css';

type StaticContentCardProps = {
    title: string;
    text?: string;
    icon?: ReactNode;
    modalContent?: {modalTitle: string, modalBody: ReactNode};
};

const StaticContentCard: React.FC<StaticContentCardProps> = ({ 
    title, 
    text, 
    icon,
    modalContent
}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [hover, setHover] = useState<boolean>(false);

    const { palette } = useTheme();

    const handleCardClick = () => {
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    const cardContent = (
        <>
            {icon && <div className={styles.staticCardIcon}>{icon}</div>}
            <div className={styles.staticCardContent}>
                <h3 className={styles.staticCardTitle} style={{ color: palette.primary.main }}>
                    {title}
                </h3>
                {text && (
                    <p className={styles.staticCardText} style={{ color: palette.text.primary }}>
                        {text}
                    </p>
                )}
            </div>
        </>
    );

    return (
        <>
            <div
                className={`${styles.staticContentCard} ${hover ? styles.hover : ''}`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={handleCardClick}
                role="button"
                tabIndex={0}
            >
                {cardContent}
                
            </div>
            {modalContent && (
                    <Modal
                        open={modalOpen}
                        onClose={handleModalClose}
                    >
                        <Box className={styles.staticCardModal}>
                            <h3 className={styles.staticCardTitle} style={{ color: palette.primary.main }}>
                                {modalContent.modalTitle}
                            </h3>
                            <div>
                                {modalContent.modalBody}
                            </div>
                        </Box>
                    </Modal>
                )
            }
        </>
    );
};

export default StaticContentCard;