<script>
	import katex from 'katex';
	import { Fraction } from 'mathlify';
	const oneHalf = new Fraction(1,2); // 1/2 
	const negativeThree = new Fraction(-3,1); // -3
	// toString method
	const a = oneHalf.toString(); // "\\frac{1}{2}"
	// using template literal
	const b = `${negativeThree} + ${oneHalf}`; // "- 3 + \\frac{1}{2}"
</script>

<div>
	{@html katex.renderToString(a)}, {@html katex.renderToString(b)}
</div>

