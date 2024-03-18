<script lang="ts">
	import type { Word } from '$lib/constructors';
	import { words } from '$lib/stores';

    let wordSearch = '';
    
    $: wordList = [...$words].filter((word) => {
        return word.en.includes(wordSearch) || word.vn.includes(wordSearch);
    });
</script>

<main>
	<h1>edit words</h1>
	<br />
	<br />
    <input bind:value={wordSearch} placeholder="search word" type="text">
    <br>
    <br>
	<table>
		<thead>
			<tr>
				<th>#</th>
				<th>English</th>
				<th>Vietnamese</th>
			</tr>
		</thead>
		<tbody>
			{#each wordList as word, index (word.en)}
				<tr>
					<td>{index}</td>
					<td>{word.en}</td>
					<td>{word.vn}</td>
				</tr>
			{/each}
		</tbody>
	</table>
	<br />
	<br />
	<a href="/">back</a>
</main>

<style lang="scss">
	main {
		max-width: 800px;
		margin: 0 auto;
		text-align: center;
		padding: 0 20px;
		padding-top: 2rem;
	}

    table, tr, td, th {
        border: 1px solid black;
    }

    table {
        border-collapse: collapse;
        width: 100%;
    }

	tr {
		background-color: #b9d1b9;
	}

	td, th {
		text-align: left;
        padding: 5px 10px;
	}
</style>
