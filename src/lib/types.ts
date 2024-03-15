import {Word} from "$lib/constructors";

export interface App {
    deck: Word[];
    current: number;
    side: "en"|"vn";
    
    shuffle: () => void;
    next: () => void;
    previous: () => void;
}