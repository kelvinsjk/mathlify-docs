<script lang="ts">
	import katex from 'katex';
	import {Fraction, Polynomial, getRandomInt} from 'mathlify';
	import Prism from 'prismjs';

	// set up coefficients
	let a = new Fraction(1,2);
	let b = 1;
	let c = new Fraction(3,4);
	// setup ax+b polynomial
	let aXPlusB = new Polynomial([a, b]);
	// latex output
	let qn =  katex.renderToString(`${aXPlusB} = ${c}`);
	let ans = katex.renderToString(`x = ${c.minus(b).divide(a)}`);

	let code =
`import { Fraction, Polynomial } from 'mathlify';
// set up coefficients
const a = new Fraction(1,2);
const b = 1;
const c = new Fraction(3,4);
// setup ax+b polynomial
const aXPlusB = new Polynomial([a, b]);
// latex output
const qn = \`$\{aXPlusB\} = $\{c\}\`;
const ans = \`x = $\{c.minus(b).divide(a)\}\`;`;

	let codeHTML = Prism.highlight(code, Prism.languages.javascript, 'javascript');

	function randomize() {
		a = new Fraction(getRandomInt(-9,9,{avoid: [0]}), getRandomInt(-9,9,{avoid: [0]}));
		b = getRandomInt(-9,9);
		c = new Fraction(getRandomInt(-9,9), getRandomInt(-9,9,{avoid: [0]}));
		// setup ax+b polynomial
		aXPlusB = new Polynomial([a, b]);
		// latex output
		qn =  katex.renderToString(`${aXPlusB} = ${c}`);
		ans = katex.renderToString(`x = ${c.minus(b).divide(a)}`);

		code = 
`import { Fraction, Polynomial } from 'mathlify';
// set up coefficients
const a = new Fraction(${a.num},${a.den});
const b = ${b};
const c = new Fraction(${c.num},${c.den});
// setup ax+b polynomial
const aXPlusB = new Polynomial([a, b]);
// latex output
const qn = \`$\{aXPlusB\} = $\{c\}\`;
const ans = \`x = $\{c.minus(b).divide(a)\}\`;`;

		codeHTML = Prism.highlight(code, Prism.languages.javascript, 'javascript');
	}
</script>

<pre class="astro-code my-4">
	<code>{@html codeHTML}</code>
</pre>

<section class="flex flex-col gap-2 items-start">
	<div>
		<strong>Question:</strong> Solve the equation
	</div>
	<div class="self-center">
		{@html qn}
	</div>
	<div>
		<strong>Answer:</strong>
	</div>
	<div class="self-center">
		{@html ans}
	</div>
</section>

<button class="btn btn-primary mt-4" on:click={randomize}>
	New question
</button>

<style>
	pre {
		background-color: #0d1117;
		overflow-x: auto;
	}

	section {
		background-color: #346b31;
		color: white;
		padding: 1em;
		border: 6px solid #6E260E;
		font-size: 1.2em;
	}

	strong {
		color: yellow;
	}
</style>