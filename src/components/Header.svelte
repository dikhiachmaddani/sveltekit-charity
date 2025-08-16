<script lang="ts">
	import logo from '$lib/assets/images/logo.png';
</script>

<header class="xs-header header-transparent">
	<div class="container">
		<nav class="xs-menus">
			<div class="nav-menus-wrapper row">
				<div class="xs-logo-wraper col-lg-2 xs-padding-0">
					<a class="nav-brand" href="/">
						<img src={logo} alt="" />
					</a>
				</div>
				<div class="col-lg-7">
					<ul class="nav-menu">
						<li><a href="/">home</a></li>
						<li><a href="/about">about</a></li>
						<li><a href="/contact">Contact</a></li>
					</ul>
				</div>
				<div class="xs-navs-button d-flex-center-end col-lg-3">
					<a href="#popularcause" class="btn btn-primary">
						<span class="badge"><i class="fa fa-heart"></i></span> Donate Now
					</a>
				</div>
			</div>
		</nav>
	</div>
</header>
