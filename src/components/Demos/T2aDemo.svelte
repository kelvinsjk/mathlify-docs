<script>
	import katex from 'katex';
	import { Term, Expression, Fraction } from 'mathlify';
	const oneHalf = new Fraction(1,2); // 1/2 
	// terms
	const negativeX = new Term(-1, 'x'); // - x
	const halfPi = new Term(oneHalf, '\\pi'); // 1/2 pi
	const zeroY = new Term(0, 'y'); // 0
	// term toString method
	const a = negativeX.toString() + `, ${halfPi}, ${zeroY}`; // "- x, \\frac{1}{2} \\pi, 0"
	// expression
	const yPlusHalfPiMinusOne = new Expression('y', negativeX, halfPi, -1, 'x'); // y + 0 x + 1/2 pi - 1;
	// expression toString method
	const c = `${yPlusHalfPiMinusOne}`; // "y + \\frac{1}{2} \\pi - \\frac{1}{2}"
</script>

<div>
	{@html katex.renderToString(a)}
</div>
<div>
	{@html katex.renderToString(c)}
</div>

