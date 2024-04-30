<script lang="ts">
	import { Word } from '$lib/constructors';
	import { words } from '$lib/stores';
	import { generateId, storageSave } from '$lib/utils';
	import { base } from '$app/paths';

	const inputs = {
		en: '',
		vn: ''
	}

	let dialogRef: HTMLDialogElement | null = null;

	// runs whenever the the input elements change their value
	$: wordList = [...Object.values($words)].filter((word) => {
		//1. when both are not empty show the matches for both
		if(inputs.en && inputs.vn) {
			return word.en.toLowerCase().includes(inputs.en.toLowerCase()) || word.vn.includes(inputs.vn.toLowerCase())
		}
		
		//2. when one is not empty show its matches
		if(inputs.en && !inputs.vn) {
			return word.en.toLowerCase().includes(inputs.en.toLowerCase())
		}
		if(!inputs.en && inputs.vn) {
			return word.vn.toLowerCase().includes(inputs.vn.toLowerCase())
		}
		
		//3. when both empty show all words
		return true
	});

	let selectedWord = {
		en: '',
		vn: '',
		id: '',
		index: -1
	}

	// opens modal to edit words
	const editWord = (word: {index: number, en: string, vn: string, id: string}) => {
		selectedWord.en = word.en;
		selectedWord.vn = word.vn;
		selectedWord.id = word.id;
		selectedWord.index = word.index;
		dialogRef?.showModal();
	};

	// edit the words list
	const closeModal = (edit?: boolean) => {
		if(edit) {
			wordList[selectedWord.index].en = selectedWord.en.toLowerCase().trim();
			wordList[selectedWord.index].vn = selectedWord.vn.toLowerCase().trim();
			storageSave($words);
		}
		
		// cleanup
		selectedWord.en = '';
		selectedWord.vn = '';
		selectedWord.id = '';
		selectedWord.index = -1;
		dialogRef?.close();
	};

	const removeWord = (id: string) => {
		//delete word from state's words list
		delete $words[id];
		$words = $words;

		//save the updated state's words list to storage
		storageSave($words);

		//close the modal
		closeModal();
	}

	const addWord = () => {
        if(inputs.en && inputs.vn) {
            // add a new word object to the state's words list
			const newWord = new Word(inputs.en.toLowerCase().trim(), inputs.vn.toLowerCase().trim(), 0, generateId($words))
            words.update((words) => {
                words[newWord.id] = newWord;
                return words
            })

            // save the updated state's words list to localStorage, warn if fails
            let status = storageSave($words);
            if(!status) console.warn("Failed to save word");

            // reset the add word fields
            inputs.en = '';
            inputs.vn = '';
        } else {
			console.log('both English and Vietnamese must have values')
		}

    }
</script>

<div class="header-div">
	<a href="{base}/">back</a>
	<h1>Manage your words</h1>
</div>
<main>
	<br />
	<br />
	<div class="inputs-and-button">
		<div class="inputs-div">
			<input bind:value={inputs.en} placeholder="search / add - English" type="text" />
			<br><br>
			<input bind:value={inputs.vn} placeholder="search / add - Vietnamese" type="text" />
		</div>
		<div class="add-btn-div">
			<button on:click={addWord}>Add</button>
		</div>
	</div>
	<br />
	<br />
	<table>
		<thead>
			<tr>
				<th class="number-td">#</th>
				<th>English</th>
				<th>Vietnamese</th>
				<th class="level-td">Lv.</th>
				<th class="actions-td"></th>
			</tr>
		</thead>
		<tbody>
			{#each wordList as word, index (word.id)}
				<tr>
					<td class="number-td">{index + 1}</td>
					<td class="word">{word.en}</td>
					<td class="word">{word.vn}</td>
					<td class="level-td">{word.lvl}</td>
					<td class="actions-td"><button on:click={() => editWord({index, ...word})}>Edit</button></td>
				</tr>
			{/each}
		</tbody>
	</table>
	<br />
	<br />
</main>

<dialog bind:this={dialogRef}>
	<div>
		<h3>Edit word</h3>
		<label for="">
			English:
			<input bind:value={selectedWord.en} type="text">
		</label>
		<br>
		<label for="">
			Vietnamese:
			<input bind:value={selectedWord.vn} type="text">
		</label>
		<br><br>
		<div class="modal-buttons">
			<button class="good" on:click={() => closeModal(true)}>Edit</button>
			<button on:click={() => closeModal()}>close</button>
			<button class="bad" on:click={() => removeWord(selectedWord.id)}>Remove</button>
		</div>
	</div>
</dialog>

<style lang="scss">
	main {
		max-width: 800px;
		margin: 0 auto;
		text-align: center;
		padding: 0 20px;
		padding-top: 2rem;
	}

	.header-div {
		display: flex;
		background-color: rgb(194, 231, 208);
		padding: 10px;
		gap: 20px;

		h1 {
			font-size: 1.5rem;
		}

		a {
			text-decoration: none;
			background-color: rgb(239, 239, 239);
			color: black;
			padding: 5px 10px;
			border: 1px solid rgb(132, 191, 160);
			border-radius: 4px;
		}
	}

	.inputs-and-button {
		display:flex;

		.inputs-div {
			flex-grow: 2;
			text-align: left;

			input {
				padding: 5px;
				font-size: 0.9rem;
				width: 95%;
			}
		}

		.add-btn-div {
			display:flex;
			justify-content:center;
			align-items:center;
			flex-grow:1;

			button {
				padding: 6px 12px;
			}
		}
	}

	table,
	tr,
	td,
	th {
		border: 1px solid black;
	}

	table {
		border-collapse: collapse;
		width: 100%;
		table-layout: fixed;
	}

	tr {
		background-color: #c2e7d0;;
	}

	td,
	th {
		text-align: left;
		padding: 5px 10px;
		font-size: 14px;
	}

	.number-td {
		width: 50px;
	}

	.actions-td {
		width: 60px;

		button {
			padding: 5px;
			border-radius: 4px;
			border: 1px solid black;
		}
	}

	.level-td {
		width: 40px;
	}

	dialog {
		margin: 150px auto;
		background-color: rgb(194, 224, 198);
		padding: 10px;

		&::backdrop {
			background-color: rgba(0, 0, 0, 0.5);
		}
	}

	.modal-buttons {
		display: flex;
		justify-content: space-between;
		// padding: 10px;

		button {
			padding: 5px 10px;
			border: 1px solid black;
		}

		.good {
			background-color: rgb(132, 233, 132);
		}

		.bad {
			background-color: rgb(216, 112, 112);
		}
	}

	.word::first-letter {
		text-transform: capitalize;
	}
</style>
