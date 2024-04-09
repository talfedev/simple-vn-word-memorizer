<script lang="ts">
	import { Word } from '$lib/constructors';
	import { words } from '$lib/stores';
	import { storageGet, storageSave } from '$lib/utils';
	import { fade, fly } from 'svelte/transition';
	import { base } from '$app/paths';

	let language: 'en' | 'vn' = 'en';
	let copiedData = false;
	let fileInput: HTMLInputElement|null = null;
	let textInput = '';

	let app = {
		deck: $words.length? [...$words]: [new Word('empty list','add words')],
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

	const handleFileUpload = async () => {
		const messages = [
			"This will replace your current word list and can't be reveresed",
			"\n\nare you sure you wish to continue?"
		];
		const userAccepts = confirm(messages.join())
		if(fileInput && fileInput.files && userAccepts) {
			const file = fileInput.files[0];
			const content = await file.text();
			const uploadedList = JSON.parse(content);
			if(storageSave(uploadedList)) {
				console.log("loaded succefuly");
				$words = storageGet();
				app.deck = [...$words];
				app.shuffle();
			} else {
				console.warn("couldn't save to localStorage");
			}
		}
	}

	const loadPastedData = () => {
		const parsedList = JSON.parse(textInput);
		if(storageSave(parsedList)) {
			console.log("loaded succefuly");
			textInput = '';
			$words = storageGet();
			app.deck = [...$words];
			app.shuffle();
		} else {
			console.warn("couldn't save to localStorage");
		}
	}

	const toggleLanguage = () => {
		if(language === 'en'){
			language = 'vn';
			if(app.face === 'en') app.toggleFace();
			return;
		}

		if(language === 'vn'){
			language = 'en';
			if(app.face === 'vn') app.toggleFace();
			return;
		}
	}

	app.shuffle();
</script>

<div class="header">
	<button on:click={toggleLanguage}>Language: {language}</button>
	<div>
		<a href="{base}/manage-words">Manage words</a>
	</div>
</div>
<div class="container">
	<button type="button" class="current-word" on:click={() => flip()}>
	{#if app.face === 'en'}
		<h2>{app.deck[app.current].en}</h2>
	{:else}
		<h2>{app.deck[app.current].vn}</h2>
	{/if}
	</button>
	<br />
	<br />
	<button class="success" on:click={() => success()}>Got it</button>
	<button class="failure" on:click={() => fail()}>Failed</button>
	<br />
	<br />
	{#if copiedData}
	<p class="copy-message" in:fly={{y: 20, opacity: 0, duration:600}} out:fade>copied data!</p>
	{/if}
	<p>Save your words:</p>
	<div class="save-list">
		<button on:click={copyAppData}>Copy to clipboard</button>
		<button on:click={downloadWordList}>Download as text file</button>
	</div>
	<br><br>
	<p>Upload words-list text file:</p><br>
	<input bind:this={fileInput} on:change={handleFileUpload} type="file" accept=".txt">
	<br><br>- or -<br><br>
	<div>
		<p>Paste your list's JSON string:</p>
		<input bind:value={textInput} type="text">
		<!-- <br> -->
		<button on:click={loadPastedData}>Load data</button>
	</div>
</div>

<style lang="scss">
	.header {
		background-color: lightgray;
		padding: 5px;
		display: flex;
		justify-content: space-between;
		align-items: center;

		button {
			border: none;
			padding: 5px 10px;
			font-size: 0.875rem;
		}

		a {
			background-color: rgb(243, 243, 243);
			padding: 5px 10px;
			border-radius: 4px;
			text-decoration: none;
			color: black;
			font-size: 0.875rem;
		}
	}

	.container {
		max-width: 800px;
		margin: 0 auto;
		text-align: center;
		padding-top: 2rem;

		// h1 {
		// 	color: rgb(49, 201, 80);
		// 	padding: 5px;
		// 	border-radius: 15px;
		// 	margin-bottom: 20px;
		// }

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

		.current-word {
			background-color: transparent;
			font-size: 2rem;
			// text-transform: capitalize;

			&:hover {
				background-color: transparent;
			}

			&:active {
				background-color: transparent;
			}
		}

		.save-list {
			display: flex;
			justify-content: center;
			gap: 20px;
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