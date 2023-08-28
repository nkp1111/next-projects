export type navDataType = {
  id: number;
  title: string;
  link: string;
}

export interface categoryItem {
  id: string;
  link: string;
  name: string;
  image?: string;
}

export interface genreCategoryItem extends categoryItem {
  subgenre: categoryItem[]
}

export interface genreCategory extends categoryItem {
  genres: genreCategoryItem[]
}

export interface typeCategoryItem extends categoryItem {
  subtypes: categoryItem[]
}

export type formattedCategoryType = {
  segment: genreCategory[],
  types: typeCategoryItem[],
}
