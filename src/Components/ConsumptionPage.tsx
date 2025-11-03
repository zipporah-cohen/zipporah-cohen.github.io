import React, { useEffect, useState } from 'react';
import StaticContentCard from './StaticContentCard';
import { ConsumptionData } from '../types';
import useConsumptionData from '../hooks/useConsumptionData';
import '../Styles/static-content-card.css';

const ConsumptionPage: React.FC = () => {
    const [consumptionItems, setConsumptionItems] = useState<ConsumptionData>([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch('/data/consumptionData.json');
                const items: ConsumptionData = await response.json();
                setConsumptionItems(items);
            } catch (error) {
                console.error("Error fetching consumption data:", error);
            }
        };

        fetchItems();
    }, []);

    const { 
        formattedBooksContent,
        formattedWinesContent,
        formattedRecipesContent,
        formattedLanguageContent
    } = useConsumptionData(consumptionItems);

    return (
        <>
            <div className="page-header">
                <h1>Consuming Under Capitalism</h1>
                <p>Things I've been eating, drinking, and learning of late.</p>
            </div>
            <div className="content-cards-grid" >
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