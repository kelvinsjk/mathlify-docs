<script>
	import katex from 'katex';
	import { xTerm, Fraction } from 'mathlify';
	const oneHalf = new Fraction(1,2);
	// xTerm constructor
	const threeX2 = new xTerm(3, 'x^2', (x)=>{
		const xFrac = typeof x === 'number' ? new Fraction(x) : x;
		return x.times(x);
	});
	// demo below: substituting values
	const a = `${threeX2} = 3 ( ${oneHalf} )^2 = ${threeX2.subXAs(oneHalf)}`;
</script>

<div>
	{@html katex.renderToString(a)}
</div>

