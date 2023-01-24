<script>
	import { gallery } from '$lib/stores/animals';
</script>

<div class="hero min-h-screen">
	<div class="hero hero-content flex-col lg:flex-row-reverse">
		<div class="flex flex-0 flex-col items-center justify-center md:h-3/4">
			<div class="relative carousel w-full md:max-w-md">
				{#each $gallery as image}
					<div id={image.id} class="carousel-item relative w-full">
						<img
							draggable="false"
							class="rounded-lg object-cover w-full md:h-3/4 pt-2"
							src={image.url}
							alt="cat pic"
						/>
						<div
							class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
						>
							<a href={image.previous} class="btn btn-circle">❮</a>
							<a href={image.next} class="btn btn-circle">❯</a>
						</div>
					</div>
				{/each}
			</div>
		</div>
		<div class="w-full md:w-1/2 m-auto">
			<h1 class="text-6xl font-bold text-primary tracking-wider">Web Gallery</h1>
			<p class="text-sm font-light md:mt-2 tracking-wider">
				Explore the list of wonderful pictures captured by professional photographers. Showcases the
				beauty of nature and the world around us.
			</p>
			<a href="#about" class="btn btn-primary normal-case tracking-wide px-24 mt-4 rounded-sm"
				>See more</a
			>
		</div>
	</div>
</div>
