<script>
	import katex from 'katex';
	export let x;
	const xTex = katex.renderToString(x);
</script>

<div>
	{@html xTex}
</div>