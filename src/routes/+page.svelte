<script>
	import Card from '$lib/components/card.svelte';
	import Home from '$lib/components/home.svelte';
	import { gallery } from '$lib/stores/animals';

	let images = $gallery.map((image) => {
		return {
			id: image.id,
			image: image.url,
			description: image.description,
			title: image.title
		};
	});
</script>

<Home />
<div id="about" class="mb-12 container w-full">
	<div class="w-full m-auto">
		<div class="flex md:flex-row flex-wrap items-center justify-evenly w-full">
			{#each images as image}
				<Card card={image} />
			{/each}
		</div>
	</div>
</div>
