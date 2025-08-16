<script lang="ts">
	import Header from '../../components/Header.svelte';
	import Footer from '../../components/Footer.svelte';
	import contact_bg from '$lib/assets/images/contact_bg.png';
	import { onMount } from 'svelte';
	import L from 'leaflet';

	let mapElement: HTMLElement;
	let mapError = '';
	let isLoading = true;

	onMount(async function () {
		try {
			const charityLocation = { lat: -6.2088, lng: 106.8456 };
			const map = L.map(mapElement).setView([charityLocation.lat, charityLocation.lng], 15);
			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
				maxZoom: 19
			}).addTo(map);
			L.marker([charityLocation.lat, charityLocation.lng])
				.addTo(map)
				.bindPopup('Charity Location')
				.openPopup();
			isLoading = false;
		} catch (error) {
			mapError = 'Failed to load map. Please try again later.';
			isLoading = false;
		}
	});
</script>

<svelte:head>
	<title>Contact Us | Charity</title>
	<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
</svelte:head>

<Header />

<section
	class="xs-banner-inner-section parallax-window"
	style="background-image:url({contact_bg})"
>
	<div class="xs-black-overlay"></div>
	<div class="container">
		<div class="color-white xs-inner-banner-content">
			<h2>Contact Us</h2>
			<p>Give a helping hand for poor people</p>
			<ul class="xs-breadcumb">
				<li class="badge badge-pill badge-primary">
					<a href="/" class="color-white"> Home /</a> Contact
				</li>
			</ul>
		</div>
	</div>
</section>

<main class="xs-main">
	<section class="xs-contact-section-v2">
		<div class="container">
			<div class="xs-contact-container">
				<div class="row">
					<div class="col-lg-6">
						<div class="xs-contact-form-wraper">
							<h4>Drop us a line</h4>
							<form
								action="#"
								method="POST"
								id="xs-contact-form"
								class="xs-contact-form contact-form-v2"
							>
								<div class="input-group">
									<input
										type="text"
										name="name"
										id="xs-name"
										class="form-control"
										placeholder="Enter Your Name..."
										required
									/>
									<div class="input-group-append">
										<div class="input-group-text"><i class="fa fa-user"></i></div>
									</div>
								</div>
								<div class="input-group">
									<input
										type="email"
										name="email"
										id="xs-email"
										class="form-control"
										placeholder="Enter Your Email..."
										required
									/>
									<div class="input-group-append">
										<div class="input-group-text"><i class="fa fa-envelope-o"></i></div>
									</div>
								</div>
								<div class="input-group massage-group">
									<textarea
										name="message"
										placeholder="Enter Your Message....."
										id="xs-message"
										class="form-control"
										cols="30"
										rows="10"
										required
									></textarea>
									<div class="input-group-append">
										<div class="input-group-text"><i class="fa fa-pencil"></i></div>
									</div>
								</div>
								<button class="btn btn-success" type="submit" id="xs-submit">Submit</button>
							</form>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="xs-maps-wraper map-wraper-v2">
							<div bind:this={mapElement} class="xs-box-shadow-2 map-container">
								{#if isLoading}
									<div class="map-loading">
										<i class="fa fa-spinner fa-spin"></i>
										<p>Loading map...</p>
									</div>
								{:else if mapError}
									<div class="map-error">
										<i class="fa fa-exclamation-triangle"></i>
										<p>{mapError}</p>
									</div>
								{/if}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>

<style>
	.map-container {
		width: 100%;
		height: 400px;
		position: relative;
		background-color: #f8f9fa;
		border-radius: 8px;
		overflow: hidden;
	}

	.map-loading,
	.map-error {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		color: #6c757d;
		text-align: center;
	}

	.map-loading i,
	.map-error i {
		font-size: 2rem;
		margin-bottom: 1rem;
	}

	.map-error {
		color: #dc3545;
	}

	.map-error i {
		color: #dc3545;
	}

	.map-container > div:first-child {
		width: 100% !important;
		height: 100% !important;
	}

	:global(.leaflet-container) {
		width: 100% !important;
		height: 100% !important;
	}
</style>

<Footer />
