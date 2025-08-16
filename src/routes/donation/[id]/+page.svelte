<script lang="ts">
	import { onMount } from 'svelte';
	import Header from '../../../components/Header.svelte';
	import Footer from '../../../components/Footer.svelte';
	import { charities } from '../../../data/charities';
	import type { CharitiesType } from '../../../domain/CharitiesType';
	import DetailDonationSkeleton from '../../../components/skeleton/detail-donation-skeleton.svelte';

	export let params: { id: string };
	let data: CharitiesType | undefined;
	let loading = true;
	let error = false;

	let name = '';
	let email = '';
	let amount: number | undefined;
	let agreed = false;

	function getCharity(id: string) {
		return charities.find(function (charity) {
			return charity.id === parseInt(id);
		});
	}

	async function handleSubmit(event: Event) {
		event.preventDefault();
		if (!agreed) {
			alert('Please agree to the terms and conditions.');
			return;
		}
		if (amount && amount < 5) {
			alert('Minimum donation amount is $5.');
			return;
		}
		if (!name || !email) {
			alert('Please fill in all required fields.');
			return;
		}

		const resMid = await fetch('/.netlify/functions/payment', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				id: params.id,
				amount: amount,
				name,
				email
			})
		});
		const midtransData = await resMid.json();
		window.location.href = midtransData.url;
	}

	onMount(function () {
		setTimeout(() => {
			const charity = getCharity(params.id);
			if (charity) data = charity;
			else error = true;
			loading = false;
		}, 1000);
	});
</script>

<svelte:head>
	<title>Donate Now | {data?.title}</title>
</svelte:head>

<Header />

{#if loading}
	<DetailDonationSkeleton />
{:else if error}
	<div class="error-message">
		<h2>Charity Not Found</h2>
		<p>The charity you're looking for doesn't exist.</p>
		<a href="/donation" class="btn btn-primary">Back to Donations</a>
	</div>
{:else if data}
	<section
		class="xs-banner-inner-section parallax-window"
		style="background-image:url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3000&q=80 3000whttps://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80 1950w')"
	>
		<div class="xs-black-overlay"></div>
		<div class="container">
			<div class="color-white xs-inner-banner-content">
				<h2>Donate Now</h2>
				<p>{data.title}</p>
				<ul class="xs-breadcumb">
					<li class="badge badge-pill badge-primary">
						<a href="/" class="color-white">Home /</a> Donate
					</li>
				</ul>
			</div>
		</div>
	</section>
	<main class="xs-main">
		<section class="xs-section-padding bg-gray">
			<div class="container">
				<div class="row">
					<div class="col-lg-6">
						<div class="xs-donation-form-images">
							<img src={data.thumbnail} class="img-responsive" alt="Family Images" />
						</div>
					</div>
					<div class="col-lg-6">
						<div class="xs-donation-form-wraper">
							<div class="xs-heading xs-mb-30">
								<h2 class="xs-title">{data.title}</h2>
								<p class="small">
									To learn more about make donate charity with us visit our "<span
										class="color-green">Contact us</span
									>" site. By calling <span class="color-green">+44(0) 800 883 8450</span>.
								</p>
								<span class="xs-separetor v2"></span>
							</div>
							<form
								on:submit={handleSubmit}
								id="xs-donation-form"
								class="xs-donation-form"
								name="xs-donation-form"
							>
								<div class="xs-input-group">
									<label for="xs-donate-amount"
										>Donation Amount <span class="color-light-red">**</span></label
									>
									<input
										type="number"
										name="amount"
										id="xs-donate-amount"
										class="form-control"
										placeholder="Minimum of $5"
										bind:value={amount}
										min="5"
										step="0.01"
										required
									/>
								</div>
								<div class="xs-input-group">
									<label for="xs-donate-charity"
										>Your Name
										<span class="color-light-red">**</span></label
									>
									<input
										type="text"
										name="name"
										id="xs-donate-charity"
										class="form-control"
										bind:value={name}
									/>
								</div>
								<div class="xs-input-group">
									<label for="xs-donate-charity"
										>Your Email
										<span class="color-light-red">**</span></label
									>
									<input
										type="email"
										name="email"
										id="xs-donate-charity"
										class="form-control"
										bind:value={email}
									/>
								</div>
								<div class="xs-input-group" id="xs-input-checkbox">
									<input
										type="checkbox"
										name="agree"
										id="xs-donate-agree"
										required
										bind:checked={agreed}
									/>
									<label for="xs-donate-agree">
										I Agree to the terms and conditions
										<span class="color-light-red">**</span>
									</label>
								</div>
								<button type="submit" class="btn btn-warning"
									><span class="badge"><i class="fa fa-heart"></i></span>
									Donate now</button
								>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
{/if}
<Footer />

<style>
	#xs-input-checkbox {
		display: flex;
		align-items: center;
	}
	#xs-donate-agree {
		width: 30px;
	}
	label[for='xs-donate-agree'] {
		margin: 0;
		margin-left: 11px;
	}
	.error-message {
		color: #dc3545;
		text-align: center;
		padding: 2rem;
		font-size: 1.2rem;
	}
</style>
