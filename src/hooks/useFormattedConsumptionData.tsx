import { BooksGroup, ConsumptionData, RecipesGroup, WinesGroup, LanguagesGroup } from '../types';
import { AutoStories, Language, RamenDining, WineBar } from '@mui/icons-material';
import { FormattedConsumptionItem } from '../types';

const isBooksGroup = (group: ConsumptionData[number]): group is BooksGroup => group.id === 'books';
const isWinesGroup = (group: ConsumptionData[number]): group is WinesGroup => group.id === 'wines';
const isRecipesGroup = (group: ConsumptionData[number]): group is RecipesGroup => group.id === 'recipes';
const isLanguagesGroup = (group: ConsumptionData[number]): group is LanguagesGroup => group.id === 'languages';

const useFormattedConsumptionData = (consumptionData: ConsumptionData) => {
    const booksGroup = consumptionData.find(isBooksGroup);
    const winesGroup = consumptionData.find(isWinesGroup);
    const recipesGroup = consumptionData.find(isRecipesGroup);
    const languagesGroup = consumptionData.find(isLanguagesGroup);

    const formattedBooksContent: FormattedConsumptionItem = 
        booksGroup ? {
            icon: <AutoStories fontSize="large" />,
            title: booksGroup.consumptionCategory,
            subtext: `Book tally so far this year: ${booksGroup.items.length}`,
            formattedFullText: (
                <ol>
                    {booksGroup.items.map((book) => (
                        <li key={book.title}>
                            <strong>{book.title}</strong> by {book.author}
                        </li>
                    ))}
                </ol>
            )
        } : {
            icon: <AutoStories fontSize="large" />,
            title: 'Books',
            subtext: 'No data',
            formattedFullText: <ul />
        };

        const formattedWinesContent: FormattedConsumptionItem = 
        winesGroup ? {
            icon: <WineBar fontSize="large" />,
            title: winesGroup.consumptionCategory,
            subtext: `Some of my favorite wines of late!`,
            formattedFullText: (
                <ol>
                    {winesGroup.items.map((wine) => (
                        <li key={`${wine.varietal}+${wine.vintage}`}>
                            <strong>{wine.producer}{wine.producer[wine.producer.length - 1] === 's' ? "'" : "'s"} {wine.varietal}</strong>, {wine.vintage}, {wine.region}
                        </li>
                    ))}
                </ol>
            )
        } : {
            icon: <WineBar fontSize="large" />,
            title: 'Wines',
            subtext: 'No data',
            formattedFullText: <ul />
        };

    const formattedRecipesContent: FormattedConsumptionItem = 
        recipesGroup ? {
            icon: <RamenDining fontSize="large" />,
            title: recipesGroup.consumptionCategory,
            subtext: `Some of my go-to recieps`,
            formattedFullText: (
                <ol>
                    {recipesGroup.items.map((recipe) => (
                        <li key={recipe}>
                            {recipe}
                        </li>
                    ))}
                </ol>
            )
        } : {
            icon: <RamenDining fontSize="large" />,
            title: 'Recipes',
            subtext: 'No data',
            formattedFullText: <ul />
        };

    const formattedLanguageContent: FormattedConsumptionItem = 
        languagesGroup ? {
            icon: <Language fontSize="large" />,
            title: languagesGroup.consumptionCategory,
            subtext: `Various languages with varying degrees of measured progress`,
            formattedFullText: (
                <ol>
                    {languagesGroup.items.map((duoLanguage) => (
                        <li key={duoLanguage.language}>
                            <strong>{duoLanguage.language}</strong> at {duoLanguage.level}
                        </li>
                    ))}
                </ol>
            )
        } : {
            icon: <Language fontSize="large" />,
            title: 'Languages',
            subtext: 'No data',
            formattedFullText: <ul />
        };

    return { 
        formattedBooksContent, 
        formattedWinesContent, 
        formattedRecipesContent, 
        formattedLanguageContent 
    };
}

export default useFormattedConsumptionData;
