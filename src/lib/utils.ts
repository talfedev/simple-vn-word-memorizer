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