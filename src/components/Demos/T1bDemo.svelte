<script>
	import katex from 'katex';
	import { Fraction } from 'mathlify';
	const oneHalf = new Fraction(1,2); // 1/2 
	const threeQuarter = new Fraction(3,4); // 3/4
	// demo below
	const a = `${oneHalf}^2 \\times ${threeQuarter} = ${oneHalf.pow(2).times(threeQuarter)}`;
</script>

<div>
	{@html katex.renderToString(a)}
</div>

