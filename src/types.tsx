import { ReactNode } from "react";

// LIFE LIST TYPES
export interface IconCardContent {
  title: string;
  subtext?: string;
  displayOptions?: {
    actionCategory: string;
    tagText: string;
  };
};
export type LifeListItemStatus = 'complete' | 'in progress' | 'planned' | 'todo';
export type LifeListItemCategory = 'experience' | 'objective';
export type LifeListItem = {
  id: number;
  category: LifeListItemCategory;
  status: LifeListItemStatus;
  title: string;
  notes: string;
};

// CONSUMPTION TYPES
export type FormattedConsumptionItem = {
    icon: ReactNode;
    title: string;
    subtext?: string;
    formattedFullText: ReactNode;
}

export interface BookItem {
  title: string;
  author: string;
}

export interface LanguageItem {
  language: string;
  level: string;
}

export type RecipeItem = string;

export interface WineItem {
  varietal: string;
  producer: string;
  vintage: number;
  region: string;
}

export interface ConsumptionGroup<T> {
  id: string;
  consumptionCategory: string;
  items: T[];
}

export type BooksGroup = ConsumptionGroup<BookItem>;
export type LanguagesGroup = ConsumptionGroup<LanguageItem>;
export type RecipesGroup = ConsumptionGroup<RecipeItem>;
export type WinesGroup = ConsumptionGroup<WineItem>;
export type ConsumptionData = Array<BooksGroup | LanguagesGroup | RecipesGroup | WinesGroup>;

