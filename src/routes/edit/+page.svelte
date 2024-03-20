<script lang="ts">
	import type { Word } from '$lib/constructors';
	import { words } from '$lib/stores';

	let wordSearch = '';

	let dialogRef: HTMLDialogElement | null = null;

	$: wordList = [...$words].filter((word) => {
		return word.en.includes(wordSearch) || word.vn.includes(wordSearch);
	});

	let selectedWord = {
		en: '',
		vn: '',
		index: -1
	}

	const editWord = (word: {index: number, en: string, vn: string}) => {
		selectedWord.en = word.en;
		selectedWord.vn = word.vn;
		selectedWord.index = word.index;
		dialogRef?.showModal();
	};

	const closeModal = (edit?: boolean) => {
		if(edit) {
			wordList[selectedWord.index].en = selectedWord.en;
			wordList[selectedWord.index].vn = selectedWord.vn;
		}
		
		// cleanup
		selectedWord.en = '';
		selectedWord.vn = '';
		selectedWord.index = -1;
		dialogRef?.close();
	};
</script>

<main>
	<h1>edit words</h1>
	<br />
	<br />
	<input bind:value={wordSearch} placeholder="search word" type="text" />
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
			{#each wordList as word, index (word.en)}
				<tr>
					<td class="number-td">{index + 1}</td>
					<td>{word.en}</td>
					<td>{word.vn}</td>
					<td class="level-td">{word.lvl}</td>
					<td class="actions-td"><button on:click={() => editWord({index, ...word})}>Edit</button></td>
				</tr>
			{/each}
		</tbody>
	</table>
	<br />
	<br />
	<a href="/">back</a>
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
		<button on:click={() => closeModal(true)}>Edit</button>
		<button on:click={() => closeModal()}>close</button>
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
		background-color: #b9d1b9;
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
		margin: auto;

		&::backdrop {
			background-color: rgba(0, 0, 0, 0.5);
		}
	}
</style>
