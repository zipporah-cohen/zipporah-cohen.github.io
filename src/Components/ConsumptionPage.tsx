import React from 'react';
import StaticContentCard from './StaticContentCard';
import useConsumptionData from '../hooks/useConsumptionData';
import useFormattedConsumptionData from '../hooks/useFormattedConsumptionData';
import styles from './ConsumptionPage.module.css';

const ConsumptionPage: React.FC = () => {
    const { data: consumptionItems, loading, error } = useConsumptionData();

    const { 
        formattedBooksContent,
        formattedWinesContent,
        formattedRecipesContent,
        formattedLanguageContent
    } = useFormattedConsumptionData(consumptionItems);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Could not load consumption data: {error}</p>;

    return (
        <>
            <div className="page-header">
                <h1>Consuming Under Capitalism</h1>
                <p>Things I've been eating, drinking, and learning of late.</p>
            </div>
            <div className={styles.contentCardsGrid}>
                <StaticContentCard
                    key="wines"
                    icon={formattedWinesContent.icon}
                    title={formattedWinesContent.title}
                    text={formattedWinesContent.subtext}
                    modalContent={{ modalTitle: formattedWinesContent.title, modalBody: formattedWinesContent.formattedFullText }}
                />
                <StaticContentCard
                    key="books"
                    icon={formattedBooksContent.icon}
                    title={formattedBooksContent.title}
                    text={formattedBooksContent.subtext}
                    modalContent={{ modalTitle: formattedBooksContent.title, modalBody: formattedBooksContent.formattedFullText }}
                />
                <StaticContentCard
                    key="recipes"
                    icon={formattedRecipesContent.icon}
                    title={formattedRecipesContent.title}
                    text={formattedRecipesContent.subtext}
                    modalContent={{ modalTitle: formattedRecipesContent.title, modalBody: formattedRecipesContent.formattedFullText }}
                />
                <StaticContentCard
                    key="languages"
                    icon={formattedLanguageContent.icon}
                    title={formattedLanguageContent.title}
                    text={formattedLanguageContent.subtext}
                    modalContent={{ modalTitle: formattedLanguageContent.title, modalBody: formattedLanguageContent.formattedFullText }}
                />
            </div>
        </>
    );
};

export default ConsumptionPage;