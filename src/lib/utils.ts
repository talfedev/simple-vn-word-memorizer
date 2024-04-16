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
	// turn word objects to simple objects (with no functions)
	const storageReadyWords = store.map(word => {
		return {en: word.en, vn: word.vn, lvl: word.lvl}
	})

	// save the store to local storage
	localStorage.setItem("appWords", JSON.stringify(storageReadyWords));

	// return true if successfully saved and false otherwise
	return localStorage.getItem("appWords") && true? true:false;
}

export function storageGet(): Word[] {
	// get words from localStorage
	const storeString = localStorage.getItem("appWords") || 'null';

	// parse the words list string into JSON
	const rawStore = JSON.parse(storeString) as {en: string, vn: string, lvl: number}[]|null;
	
	// prepare the array (that will be returned from the function)
	let store: Word[] = [];

	// if there are words in the state instantiate them as Word objects
	if(rawStore) {
		store = rawStore.map(word => new Word(word.en, word.vn, word.lvl))
	}
	
	// log warning if can't find data in localStorage
	store.length? '': console.warn("Couldn't find words data in localStorage");
	
	// return either an array of words or an empty array
	return store;
}