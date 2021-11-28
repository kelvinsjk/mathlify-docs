<script>
	import katex from 'katex';
	import { Polynomial, Fraction } from 'mathlify';
	const oneHalf = new Fraction(1,2); // 1/2 
	// constructor
	const threeX2MinusXPlusHalf = new Polynomial([3, -1, oneHalf]);
	// options
	const onePlusTwoX = new Polynomial([1, 2], {ascending: true});
	const x9MinusTwoX7 = new Polynomial([1, 0, 2], {degree: 9});
	const threeY2MinusYPlusHalf = new Polynomial([3, -1, oneHalf], {variableAtom: "y"});
	// typeset
	const z = `${threeX2MinusXPlusHalf}`;
	const a = `${onePlusTwoX}`;
	const b = `${x9MinusTwoX7}`;
	const c = `${threeY2MinusYPlusHalf}`;
</script>

<div>
	{@html katex.renderToString(z)}
	<br>{@html katex.renderToString(a)}
	<br>{@html katex.renderToString(b)}
	<br>{@html katex.renderToString(c)}
</div>

