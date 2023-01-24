import { readable, type Readable } from "svelte/store";

type Image = {
	id: string;
	unsplash: string;
	url: string;
	title: string;
	description: string;
	next: string;
	previous: string;
};

export const gallery = readable([
	{
		id: "slide-1",
		unsplash: "https://unsplash.com/photos/nKC772R_qog",
		url: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
		title: "Cute litte cat",
		description:
			"A cat is a small carnivorous mammal. It is the only domesticated species in the family Felidae and often referred to as the domestic cat to distinguish it from wild members of the family. The cat is either a house cat, kept as a pet, or a feral cat, freely ranging and avoiding human contact. A house cat is valued by humans for companionship and for its ability to hunt rodents. About 60 cat breeds are recognized by various cat registries.",
		next: "#slide-2",
		previous: "#slide-4",
	},
	{
		id: "slide-2",
		unsplash: "https://unsplash.com/photos/qQWV91TTBrE",
		url: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
		title: "Polar bear",
		description:
			"The polar bear (Ursus maritimus) is a hypercarnivorous bear whose native range lies largely within the Arctic Circle, encompassing the Arctic Ocean, its surrounding seas and surrounding land masses. It is a large bear, approximately the same size as the omnivorous Kodiak bear (Ursus arctos middendorffi).",
		next: "#slide-3",
		previous: "#slide-1",
	},
	{
		id: "slide-3",
		unsplash: "https://unsplash.com/photos/Nbv7PkL_rvI",
		url: "https://images.unsplash.com/photo-1574068468668-a05a11f871da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1527&q=80",
		title: "Plumbeous Water Redstart",
		description:
			"The plumbeous water redstart (Rhyacornis fuliginosus) is a species of bird in the family Muscicapidae. It is found in Bhutan, China, India, Myanmar, Nepal, and Thailand. Its natural habitats are subtropical or tropical moist lowland forests and subtropical or tropical moist montane forests.",
		next: "#slide-4",
		previous: "#slide-2",
	},
	{
		id: "slide-4",
		unsplash: "https://unsplash.com/photos/_9a-3NO5KJE",
		url: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
		title: "Panda",
		description:
			"A panda bear (Ailuropoda melanoleuca; Chinese: 大熊猫; pinyin: dà xióng māo; literally: 'big bear cat') is a bear native to south central China. It is easily recognized by the large, distinctive black patches around its eyes, over the ears, and across its round body. The name 'giant panda' is sometimes used to distinguish it from the unrelated red panda. Though it belongs to the order Carnivora, the panda's diet is over 99% bamboo. Giant pandas in the wild will occasionally eat other grasses, wild tubers, or even meat in the form of birds, rodents, or carrion. In captivity, they may receive honey, eggs, fish, yams, shrub leaves, oranges, or bananas along with specially prepared food.",
		next: "#slide-1",
		previous: "#slide-3",
	},
]) satisfies Readable<Image[]>;
