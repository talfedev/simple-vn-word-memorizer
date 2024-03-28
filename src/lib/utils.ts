import { Word } from '$lib/constructors';

// place files you want to import through the `$lib` alias in this folder.
export function shuffle<T>(array: T[]): T[] {
	let currentIndex = array.length;
	let temporaryValue: T, randomIndex: number;

	// While there remain elements to shuffle
	while (0 !== currentIndex) {
		// Pick a remaining element
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

export function storageSave(store: Word[]): boolean {
	const storageReadyWords = store.map(word => {
		return {en: word.en, vn: word.vn}
	})

	// save the store to local storage
	localStorage.setItem("appWords", JSON.stringify(storageReadyWords));

	// return true if successfully saved and false otherwise
	return localStorage.getItem("appWords") && true? true:false;
}

export function storageGet(): Word[]|null {
	// get words from localStorage
	const storeString = localStorage.getItem("appWords") || 'null';
	const rawStore = JSON.parse(storeString) as {en: string, vn: string}[];
	const store = rawStore.map(word => {
		return new Word(word.en, word.vn);
	})

	// log warning if can't find data
	store? '': console.warn("Couldn't find words data in localStorage");
	return store;
}