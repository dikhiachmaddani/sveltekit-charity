<div class="loading">
	<!-- Skeleton for banner section -->
	<section class="xs-banner-inner-section skeleton-banner">
		<div class="container">
			<div class="skeleton-content">
				<div class="skeleton-title"></div>
				<div class="skeleton-subtitle"></div>
				<div class="skeleton-breadcrumb"></div>
			</div>
		</div>
	</section>

	<!-- Skeleton for main content -->
	<main class="xs-main">
		<section class="xs-section-padding bg-gray">
			<div class="container">
				<div class="row">
					<div class="col-lg-6">
						<div class="skeleton-image"></div>
					</div>
					<div class="col-lg-6">
						<div class="skeleton-form">
							<div class="skeleton-heading"></div>
							<div class="skeleton-text"></div>
							<div class="skeleton-separator"></div>
							<div class="skeleton-input"></div>
							<div class="skeleton-input"></div>
							<div class="skeleton-checkbox"></div>
							<div class="skeleton-button"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
</div>

<style>
	.loading {
		min-height: 100vh;
	}
    
	.skeleton-banner {
		background: #f0f0f0;
		padding: 279px 0;
		position: relative;
		overflow: hidden;
	}

	.skeleton-banner::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
		animation: shimmer 1.5s infinite;
	}

	.skeleton-content {
		text-align: center;
	}

	.skeleton-title {
		width: 200px;
		height: 32px;
		background: #e0e0e0;
		margin: 0 auto 20px;
		border-radius: 4px;
		animation: pulse 1.5s ease-in-out infinite;
	}

	.skeleton-subtitle {
		width: 300px;
		height: 20px;
		background: #e0e0e0;
		margin: 0 auto 15px;
		border-radius: 4px;
		animation: pulse 1.5s ease-in-out infinite;
	}

	.skeleton-breadcrumb {
		width: 150px;
		height: 16px;
		background: #e0e0e0;
		margin: 0 auto;
		border-radius: 4px;
		animation: pulse 1.5s ease-in-out infinite;
	}

	/* Skeleton Main Content */
	.skeleton-image {
		width: 100%;
		height: 400px;
		background: #e0e0e0;
		border-radius: 8px;
		margin-bottom: 20px;
		animation: pulse 1.5s ease-in-out infinite;
	}

	.skeleton-form {
		padding: 20px;
	}

	.skeleton-heading {
		width: 80%;
		height: 28px;
		background: #e0e0e0;
		margin-bottom: 15px;
		border-radius: 4px;
		animation: pulse 1.5s ease-in-out infinite;
	}

	.skeleton-text {
		width: 100%;
		height: 16px;
		background: #e0e0e0;
		margin-bottom: 10px;
		border-radius: 4px;
		animation: pulse 1.5s ease-in-out infinite;
	}

	.skeleton-separator {
		width: 60px;
		height: 3px;
		background: #e0e0e0;
		margin: 20px 0;
		border-radius: 2px;
		animation: pulse 1.5s ease-in-out infinite;
	}

	.skeleton-input {
		width: 100%;
		height: 45px;
		background: #e0e0e0;
		margin-bottom: 20px;
		border-radius: 4px;
		animation: pulse 1.5s ease-in-out infinite;
	}

	.skeleton-checkbox {
		display: flex;
		align-items: center;
		margin-bottom: 20px;
	}

	.skeleton-checkbox::before {
		content: '';
		width: 20px;
		height: 20px;
		background: #e0e0e0;
		margin-right: 10px;
		border-radius: 3px;
		animation: pulse 1.5s ease-in-out infinite;
	}

	.skeleton-checkbox::after {
		content: '';
		width: 150px;
		height: 16px;
		background: #e0e0e0;
		border-radius: 4px;
		animation: pulse 1.5s ease-in-out infinite;
	}

	.skeleton-button {
		width: 150px;
		height: 50px;
		background: #e0e0e0;
		border-radius: 25px;
		animation: pulse 1.5s ease-in-out infinite;
	}

	/* Animations */
	@keyframes shimmer {
		0% {
			left: -100%;
		}
		100% {
			left: 100%;
		}
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
	}
</style>
