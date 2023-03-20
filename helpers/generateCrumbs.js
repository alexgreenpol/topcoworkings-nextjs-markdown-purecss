import { useRouter } from "next/router";
import { crumbsLabels } from "../crumbsLabels";

export default function generateCrumbs() {
	const router = useRouter();
	const routesArr = router.asPath.split("/").slice(1);
	let currentPath = "";
	const crumbs = routesArr.map((item) => {
		currentPath += `/${item}`;

		const currentLabel = crumbsLabels[item]?.[routesArr[0]]

		return {
			path: currentPath,
			label: currentLabel ? currentLabel : item.split("-").join(" ")
		}
	})

	return crumbs;
}