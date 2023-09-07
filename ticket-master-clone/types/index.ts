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
  events?: { [index: string]: any }[];
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


export type eventMapType = {
  [key: string]: any
  Date: string,
  Time: string,
  Tags: string[],
}

export type searchBarType = {
  location: string,
  date: Date | string,
  keyword: string,
  data?: any[],
}

export type UserType = {
  email: string,
  password: string,
  firstName?: string,
  lastName?: string,
  country?: string,
  zipCode?: string,
}