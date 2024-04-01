<script lang="ts">
	import { Word } from '$lib/constructors';
	import { words } from '$lib/stores';
	import { storageSave } from '$lib/utils';
	import { fade, fly } from 'svelte/transition';

	let language: 'en' | 'vn' = 'en';
	let copiedData = false;

	let app = {
		deck: [...$words],
		current: 0,
		face: 'en',

		shuffle() {
			let currentIndex = this.deck.length;
			let temporaryValue: Word, randomIndex: number;

			// While there remain elements to shuffle
			while (0 !== currentIndex) {
				// Pick a remaining element
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex--;

				// And swap it with the current element
				temporaryValue = this.deck[currentIndex];
				this.deck[currentIndex] = this.deck[randomIndex];
				this.deck[randomIndex] = temporaryValue;
			}
			this.deck.sort((a, b) => a.lvl - b.lvl);
			console.log(this.deck);
		},

		next() {
			if (this.current < this.deck.length - 1) {
				this.current += 1;
			} else {
				this.current = 0;
				this.shuffle();
			}
		},

		previous() {
			if (this.current > 0) {
				this.current -= 1;
			} else {
				this.current = this.deck.length - 1;
			}
		},

		toggleFace(to: 'en' | 'vn' | 'none' = 'none') {
			if (to !== 'none') {
				this.face = to;
				return;
			}

			if (this.face === 'en') {
				this.face = 'vn';
				return;
			}

			if (this.face === 'vn') {
				this.face = 'en';
				return;
			}
		}
	};

	const success = () => {
		// console.log(app.deck[app.current])
		app.deck[app.current].levelUp();
		app.next();
		app.toggleFace(language);
		app = app;

		// save word level change to localStorage
		storageSave($words);
	};

	const fail = () => {
		// console.log(app.deck[app.current])
		app.deck[app.current].reset();
		app.next();
		app.toggleFace(language);
		app = app;

		// save word level change to localStorage
		storageSave($words);
	};

	const flip = () => {
		app.toggleFace();
		app = app;
	};

	const copyAppData = () => {
		// get the data
		const data = localStorage.getItem('appWords');

		// put it in the clipboard
		if (data) {
			navigator.clipboard.writeText(data);
			copiedData = true;
			setTimeout(() => {
				copiedData = false;
			}, 1000);
		} else {
			console.log('There is no app data to copy');
		}
	};

	const downloadWordList = () => {
		// get list as string
		const list = localStorage.getItem('appWords');
		if (list) {
			const blob = new Blob([list],{type: 'text/plain'});
			
			// create anchor element
			const element = document.createElement('a');

			// create a temporary address for the file
			const url = URL.createObjectURL(blob);

			// attach file to anchor tag
			element.href = url;
			element.setAttribute('download', 'en-vn-wordlist.txt');

			// make sure it does not appear on screen
			element.style.display = 'none';

			// add it to the DOM
			document.body.appendChild(element);

			// simulate a user click
			element.click();

			// remove element from DOM
			document.body.removeChild(element);

			// clear the address from the document
			URL.revokeObjectURL(url);
		} else {
			console.warn("won't download since there are no words in the list")
		}
	}

	app.shuffle();
</script>

<div class="container">
	<h1>Memorize!</h1>
	{#if app.face === 'en'}
		<h2>{app.deck[app.current].en}</h2>
	{:else}
		<h2>{app.deck[app.current].vn}</h2>
	{/if}
	<button on:click={() => flip()}>Flip</button>
	<br />
	<br />
	<button class="success" on:click={() => success()}>Got it</button>
	<button class="failure" on:click={() => fail()}>Failed</button>

	<br />
	<br />
	<a href="/add">add words</a>
	<br />
	<br />
	<a href="/edit">edit words</a>
	<br />
	<br />
	{#if copiedData}
	<p class="copy-message" in:fly={{y: 20, opacity: 0, duration:600}} out:fade>copied data!</p>
	{/if}
	<button on:click={copyAppData}>Copy app data</button>
	<br><br>
	<button on:click={downloadWordList}>Download your words</button>
</div>

<style lang="scss">
	.container {
		max-width: 800px;
		margin: 0 auto;
		text-align: center;
		padding-top: 3rem;

		h1 {
			color: rgb(49, 201, 80);
			padding: 5px;
			border-radius: 15px;
			margin-bottom: 20px;
		}

		button {
			color: black;
			padding: 10px;
			border: none;
			border-radius: 5px;
			margin-top: 20px;
			background-color: rgb(198, 198, 198);

			&:hover {
				background-color: rgb(227, 227, 227);
			}

			&:active {
				background-color: rgb(156, 156, 156);
			}
		}

		.success {
			background-color: rgb(49, 201, 80);
			&:hover {
				background-color: rgb(56, 222, 90);
			}
			&:active {
				background-color: rgb(39, 153, 61);
			}
		}

		.failure {
			background-color: rgb(201, 49, 49);
			&:hover {
				background-color: rgb(222, 56, 56);
			}
			&:active {
				background-color: rgb(153, 39, 39);
			}
		}
	}

	.copy-message {
		display: inline-block;
		max-width: 120px;
		left: 50%;
		translate: -50%;
		background-color: black;
		color: white;
		padding: 5px 10px;
		border-radius: 5px;
		position: absolute;
	}
</style>
