import { writable } from "svelte/store";
import { Word } from "$lib/constructors";
import { storageGet } from "$lib/utils";
import type { WordList } from "$lib/types";

// const backupWords = [
//     new Word('hello', 'xin chao'),
//     new Word('mom', 'me'),
//     new Word('think', 'nghi')
// ]

// const wordsFromStorage = storageGet() || backupWords;

// export const words = writable<Word[]>(wordsFromStorage);

const backupWords = {
    fekas: new Word('hello', 'xin chao', 0, "fekas"),
    eivne: new Word('mom', 'me', 0, "eivne"),
    vnrua: new Word('think', 'nghi', 0 , "vnrua")
}

const wordsFromStorage = storageGet() || backupWords;

export const words = writable<WordList>(wordsFromStorage);