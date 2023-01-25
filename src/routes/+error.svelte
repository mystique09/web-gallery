<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="m-auto min-h-screen h-screen w-full">
	<div class="flex flex-col items-center justify-center h-full">
		<h1 class="text-lg font-light">Error {$page.status}</h1>
		<p class="text-2xl text-error md:text-6xl">{$page.error?.message}</p>
		<a class="link link-primary mt-2" href="/">Go back</a>
	</div>
</div>
