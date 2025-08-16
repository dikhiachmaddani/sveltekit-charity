<script lang="ts">
	import error from '$lib/assets/images/error.png';
</script>

<svelte:head>
	<title>Error</title>
</svelte:head>

<section class="waypoint-tigger xs-section-padding">
    <div class="container">
        <div class="xs-heading row xs-mb-60 justify-content-center text-center">
            <div class="col-md-6 col-xl-6">
                <img src={error} alt="Error" width="410" height="410">
                <h2 class="xs-title">Oops!</h2>
                <p>There is something wrong with the page. I cannot find it.</p>
                <a href="/" class="btn btn-primary mt-4">
                    Back to the home page
                </a>
            </div>
        </div>
    </div>
</section>
