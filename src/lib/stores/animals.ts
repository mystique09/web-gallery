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

export const images = [
    {
        id: "slide-1",
        unsplash: "https://unsplash.com/photos/nKC772R_qog",
        url: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
        title: "Tabby cat",
        description:
            `A tabby is any domestic cat (Felis catus) with a distinctive 'M'-shaped marking on its forehead; stripes by its eyes and across its cheeks, along its back, and around its legs and tail; and (differing by tabby type), characteristic striped, dotted, lined, flecked, banded, or swirled patterns on the body—neck, shoulders, sides, flanks, chest, and abdomen. "Tabby" is not a breed of cat, but a coat type seen in almost all genetic lines of domestic cats, regardless of status.`,
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
        next: "#slide-5",
        previous: "#slide-3",
    },
    {
        id: "slide-5",
        unsplash: "https://unsplash.com/photos/xUUZcpQlqpM",
        url: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
        title: "Eastern American Fox",
        description: "The American red fox is a North American subspecies of the red fox. It is the largest of the true foxes and one of the most widely distributed members of the order Carnivora, occurring in North America. This subspecies is most likely the ancestor of the domesticated silver fox.",
        next: "#slide-6",
        previous: "slide-4",
    },
    {
        id: "slide-6",
        unsplash: "https://unsplash.com/photos/L-2p8fapOA8",
        url: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
        title: "Loggerhead sea turtle",
        description: "The loggerhead sea turtle is a species of oceanic turtle distributed throughout the world. It is a marine reptile, belonging to the family Cheloniidae. The average loggerhead measures around 90 cm in carapace length when fully grown. ",
        next: "#slide-7",
        previous: "#slide-5",
    },
    {
        id: "slide-7",
        unsplash: "https://unsplash.com/photos/vjFC9OjrOtA",
        url: "https://images.unsplash.com/photo-1619038779484-a27362fb82cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
        title: "Toco toucan",
        description: "The toco toucan, also known as the common toucan or giant toucan, is the largest and probably the best known species in the toucan family. It is found in semi-open habitats throughout a large part of central and eastern South America. It is a common attraction in zoos.",
        next: "#slide-1",
        previous: "#slide-6",
    }
];

export const gallery = readable(images) satisfies Readable<Image[]>;
