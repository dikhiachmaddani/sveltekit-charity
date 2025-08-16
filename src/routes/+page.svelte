<script lang="ts">
	import Header from '../components/Header.svelte';
	import Welcome from '../components/Welcome.svelte';
	import CharityList from '../components/CharityList.svelte';
	import Promo from '../components/Promo.svelte'; 
	import Footer from '../components/Footer.svelte';
	import HelloFunction from '../components/HelloFunction.svelte';
	import { charities } from '../data/charities';
</script>

<svelte:head>
	<title>Home | Charity</title>
</svelte:head>

<Header />
<Welcome />
<CharityList {charities} />
<HelloFunction />
<Promo />
<Footer />
