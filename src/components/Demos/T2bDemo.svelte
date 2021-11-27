<script>
	import katex from 'katex';
	import { Expression, Term, Fraction } from 'mathlify';
	const oneHalf = new Fraction(1,2); // 1/2 
	const halfX = new Term(oneHalf, 'x'); // 1/2 x
	const xMinusTwo = new Expression('x', -2); // x - 2
	// add and subtract
	const xMinusTwoPlusY = xMinusTwo.add('y'); // x - 2 + y
	// scalar multiply
	const quarterX = halfX.multiply(oneHalf); // 1/4 x
	// demo below
	const a = `${halfX} - 1 + y \\equiv ${halfX.subtract(1).add('y')}`;
	const b = `3 ( ${xMinusTwo} ) = ${xMinusTwo.multiply(3)}`;
</script>

<div>
	{@html katex.renderToString(a)}
</div>
<div>
	{@html katex.renderToString(b)}
</div>

