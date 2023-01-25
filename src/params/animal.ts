import { images } from "$lib/stores/animals";
import type { ParamMatcher } from "@sveltejs/kit";

export const match = ((param) => {
    return images.some((animal) => animal.id === param);
}) satisfies ParamMatcher;