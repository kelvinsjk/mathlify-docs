<script>
	import katex from 'katex';
	import { Fraction } from 'mathlify';
	const oneHalf = new Fraction(1,2); // 1/2
	const threeQuarter = new Fraction(3, 4); // 3/4
	// factorize
	const [[a,b], k] = Fraction.factorize(oneHalf, threeQuarter); // [[2, 3], 1/4]
	// demo below
	const c = `${oneHalf} + ${threeQuarter} = ${k} ( ${a} + ${b} )`;

</script>

<div>
	{@html katex.renderToString(c)}
</div>

