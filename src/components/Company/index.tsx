import './index.css';

type Props = {
	src: string;
	alt: string;
};

function Company({ src, alt }: Props) {
	return (
		<img
      className='company'
			src={src}
			alt={alt}
		/>
	);
}
export default Company;
