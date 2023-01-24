<script lang="ts">
	type CardInfo = {
		title: string;
		description: string;
		image: string;
		id: string;
	};

	export let card: CardInfo;
</script>

<div class="card w-96 bg-base-200 shadow-xl max-h-[450px] m-4 group duration-150">
	<div class="card-body">
		<h2
			class="card-title tracking-wider group-hover:text-primary duration-200 font-normal text-base"
		>
			{card.title}
		</h2>
		<!-- <p class="text-xs tracking-wider font-light hidden">
            {card.description}
        </p> -->
	</div>
	<figure draggable="false" class="group-hover:cursor-pointer">
		<a draggable="false" href="/about/{card.id}">
			<img draggable="false" class="hover:scale-150 duration-200" src={card.image} alt="Shoes" />
		</a>
	</figure>
</div>
