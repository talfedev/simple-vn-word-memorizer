<script lang="ts">
	import { Word } from '$lib/constructors';
	import { words } from '$lib/stores';

    let language: 'en'|'vn' = 'en';

	let app = {
		deck: $words,
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
		},

		next() {
            if(this.current < this.deck.length - 1) {
                this.current += 1;
            } else {
                this.current = 0;
                this.shuffle();
            }
		},

		previous() {
			if(this.current > 0) {
                this.current -= 1;
            } else {
                this.current = this.deck.length - 1;
            }
		},

        toggleFace (to: 'en'|'vn'|'none' = 'none') {
            if(to !== 'none') {
                this.face = to;
                return;
            }
            
            if(this.face === 'en') {
                this.face = "vn";
                return;
            }

            if(this.face === 'vn') {
                this.face = "en";
                return;
            }
        }
	};

    const success = () => {
        console.log(app.deck[app.current])
        app.deck[app.current].levelUp();
        app.next();
        app.toggleFace(language);
        app = app;
    }

    const fail = () => {
        console.log(app.deck[app.current])
        app.deck[app.current].reset();
        app.next();
        app.toggleFace(language);
        app = app;
    }

    const flip = () => {
        app.toggleFace();
        app = app;
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

	<br>
	<br>
	<a href="/add">add words</a>
	<br>
	<br>
	<a href="/edit">edit words</a>
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
</style>
