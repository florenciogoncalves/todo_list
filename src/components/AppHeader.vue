<template>
	<div class="header px-3 px-sm-5 py-2">
		<div class="container d-flex mx-auto my-auto">
			<div class="ms-auto">
				<a v-if="isSign === 'up'" href="">Sign {{ isSign }}</a>
				<a v-else-if="isSign === 'in'" href="" class="d-flex align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-person-fill me-1" viewBox="0 0 16 16"> <path 	d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" /></svg>
          Sign {{ isSign }}
        </a>
				<div v-else href="" class="d-flex align-items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						class="bi bi-person-fill me-1"
						viewBox="0 0 16 16">
						<path
							d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
					</svg>
					{{ username }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "AppHeader",
		data() {
			return {
				isSign: "in",
				username: "Username",
			};
		},
		props: {
			logged: Boolean,
		},
	};
</script>
