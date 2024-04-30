import { Word } from "./constructors";

export interface StoredWord {
    en: string;
    vn: string;
    lvl: number;
}

export interface WordList {
    [key: string]: Word
}