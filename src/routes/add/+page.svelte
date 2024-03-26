<script lang="ts">
    import { Word } from "$lib/constructors";
    import { words } from "$lib/stores";
    const word = {
        en: '',
        vn: '',
    }

    const addWord = () => {
        if(word.en && word.vn) {
            // add the word object to the store
            words.update((words) => {
                words.push(new Word(word.en, word.vn));
                return words
            })

            // reset the add word fields
            word.en = '';
            word.vn = '';
        }

    }
</script>

<main>
    <h1>add words</h1>
    <label for="">
        English:
        <input bind:value={word.en} type="text">
    </label>
    <br>
    <label for="">
        Vietnamese:
        <input bind:value={word.vn} type="text">
    </label>
    <br><br>
    <button on:click={addWord}>Add</button>
    <br>
    <br>
    {#each $words as word}
        <ul>
            <li>{word.en} - {word.vn}</li>
        </ul>
    {/each}
    <br>
    <br>
    <a href="/">back</a>
</main>

<style lang="scss">
    main {
        max-width: 800px;
        margin: 0 auto;
        text-align: center;
        padding-top: 2rem;
    }
</style>