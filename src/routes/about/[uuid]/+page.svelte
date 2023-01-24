<script>
	import { page } from '$app/stores';
	import { gallery } from '$lib/stores/animals';
	let animalInfo = $gallery.find((animal) => animal.id === $page.params.uuid);
</script>

<div class="container container-lg min-h-screen  m-auto">
	<div class="w-full px-4 my-12">
		<figure class="md:w-1/2 m-auto">
			<img
				draggable="false"
				class="w-full max-h-[420px] object-cover"
				src={animalInfo?.url}
				alt={animalInfo?.title}
			/>
			<h1 class="font-bold text-4xl mt-2 text-white">{animalInfo?.title}</h1>
			<p class="text-sm mt-2">{animalInfo?.description}</p>
			<a
				target="_blank"
				rel="noreferrer"
				class="link link-primary text-xs"
				href={animalInfo?.unsplash}>View original on Unsplash</a
			>
		</figure>
	</div>
</div>