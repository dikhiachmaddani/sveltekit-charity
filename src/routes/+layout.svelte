<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '$lib/assets/css/font-awesome.min.css';
	import '$lib/assets/css/bootstrap.min.css';
	import '$lib/assets/css/xsIcon.css';
	import '$lib/assets/css/isotope.css';
	import '$lib/assets/css/magnific-popup.css';
	import '$lib/assets/css/owl.carousel.min.css';
	import '$lib/assets/css/owl.theme.default.min.css';
	import '$lib/assets/css/animate.css';
	import '$lib/assets/css/plugins.css';
	import '$lib/assets/css/style.css';
	import '$lib/assets/css/responsive.css';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700%7CRoboto+Slab:400,700"
		rel="stylesheet">
</svelte:head>

{@render children?.()}
