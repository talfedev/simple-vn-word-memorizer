import { writable } from "svelte/store";
import { Word } from "$lib/constructors";

export const words = writable<Word[]>([
    new Word('hello', 'xin chao'),
    new Word('mom', 'me'),
    new Word('think', 'nghi')
])