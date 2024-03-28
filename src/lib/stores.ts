import { writable } from "svelte/store";
import { Word } from "$lib/constructors";
import { storageGet } from "./utils";

const backupWords = [
    new Word('hello', 'xin chao'),
    new Word('mom', 'me'),
    new Word('think', 'nghi')
]

const wordsFromStorage = storageGet() || backupWords;

export const words = writable<Word[]>(wordsFromStorage);