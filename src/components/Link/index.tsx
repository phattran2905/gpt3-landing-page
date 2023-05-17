import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../../shared/types";

type Props = {
	page: string;
	selectedPage: SelectedPage;
	setSelectedPage: (value: SelectedPage) => void;
};

function Link({ page, selectedPage, setSelectedPage }: Props) {
	const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

	return (
		<AnchorLink
offset={100}
			href={`#${lowerCasePage}`}
			className={`navbar__link ${selectedPage === lowerCasePage && "navbar__link--selected"}`}
			onClick={() => setSelectedPage(lowerCasePage)}
		>
			{page}
		</AnchorLink>
	);
}

export default Link;
