import { Word } from '$lib/constructors';
import type { WordList } from '$lib/types';

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

export function storageSave(list: WordList): boolean {
	// turn word objects to simple objects (with no functions)
	const storageReadyWords: { [key: string]: { en: string; vn: string; lvl: number; id: string } } =
		{};

	for (const wordId in list) {
		const id = list[wordId].id || generateId(list);
		storageReadyWords[id] = {
			en: list[wordId].en,
			vn: list[wordId].vn,
			lvl: list[wordId].lvl,
			id: id
		};
	}

	// save the words list to local storage
	localStorage.setItem('appWords', JSON.stringify(storageReadyWords));

	// return true if successfully saved and false otherwise
	return localStorage.getItem('appWords') && true ? true : false;
}

export function storageGet(): WordList {
	// get words from localStorage
	const storeString = localStorage.getItem('appWords') || 'null';

	// parse the words list string into JSON
	const wordsList = JSON.parse(storeString) as WordList | null;

	// prepare the list object (that will be returned from the function)
	let list: WordList = {};

	// if there are words in the state instantiate them as Word objects
	if (wordsList) {
		for (const word in wordsList) {
			const id = wordsList[word].id || generateId(wordsList);
			list[id] = new Word(wordsList[word].en, wordsList[word].vn, wordsList[word].lvl, id);
		}
	} else {
		console.warn("Couldn't find words data in localStorage");
	}

	// return either an array of words or an empty array
	return list;
}

export function generateId(existingIds: WordList): string {
	const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let generatedId = '';

	// 1. create a random 7 characters string (only lower and upper case letters)
	for (let i = 0; i < 7; i++) {
		generatedId += chars[Math.floor(Math.random() * chars.length)];
	}

	// 2. if id already exist add a random character
	while (existingIds[generatedId]) {
		generatedId += chars[Math.floor(Math.random() * chars.length)];

		// 3. prevent an infinite loop by throwing an error (when length becomes unreasonable)
		if (generateId.length > 20) {
			throw new Error('Something went wrong with word ID generation');
		}
	}

	return generatedId;
}

/**
 * 
 * @param wordList (makes no assumptions about type)
 * @param shapeVersion number
 * @returns `true` if shape is according to the version and `false` otherwise.
 * 
 * I'm thinking about turning this function into a much bigger thing that will:
 * - check if `wordList` shape is valid
 * - if valid, which version it is
 * - convert whichever version it is to current one
 */
export function isJsonShapeCorrect(wordList: any, shapeVersion: number = 2): boolean {
	switch (shapeVersion) {
		case 1:
			if(!Array.isArray(wordList)) return false;
			for (const word in wordList) {
				if (typeof wordList[word].en !== 'string') return false;
				if (typeof wordList[word].vn !== 'string') return false;
				if (typeof wordList[word].lvl !== 'number') return false;
			}
			break;

		case 2:
			if(Array.isArray(wordList)) return false;
			for (const word in wordList) {
				if (typeof wordList[word].id !== 'string') return false;
				if (typeof wordList[word].en !== 'string') return false;
				if (typeof wordList[word].vn !== 'string') return false;
				if (typeof wordList[word].lvl !== 'number') return false;
			}
			break;
	}

	return true;
}
