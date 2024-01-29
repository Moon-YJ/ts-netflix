import Image from 'next/image';
import { Movie } from '../../types';
import { useState, useEffect } from 'react';
import { baseURL } from '@/url';
import type { NextPage } from 'next';

interface Props {
	original: Movie[];
}

// Banner컴포넌트로 페이지 타입 지정
const Banner: NextPage<Props> = ({ original }: Props) => {
	const [Movie, setMovie] = useState<Movie | null>(null);

	console.log(Movie);

	useEffect(() => {
		const randomNum = Math.floor(Math.random() * original.length);

		setMovie(original[randomNum]);
	}, [original]);

	return (
		<section className='h-screen px-4 pb-20 pt-40 flex flex-col space-y-4'>
			{Movie && (
				<>
					{/* pic Frame */}
					<div className='absolute top-0 left-0 z-[1] w-full h-full'>
						<Image
							src={`${baseURL}original${Movie.backdrop_path}`}
							// alt값은 기본적으로 문자만 전달받도록 타입이 강제되어 있으므로
							// 템플릿 리터럴 안쪽에서 변수값이 문자로 반환되도록 처리
							alt={`${Movie.name || Movie.original_title}`}
							fill
							priority
							quality={70}
							sizes='(max-width:768px) 100vw, (max-width:1200) 70vw, 100vw'
							className='object-cover'
						/>
					</div>
					{/* gradient layer */}
					<div className='absolute top-0 left-0 w-full h-full z-[2] bg-gradient1'></div>
					{/* title */}
					<h1 className='relative z-[3] text-2xl font-bold md:text-4xl lg:text-7xl'>
						{Movie?.title || Movie?.name}
					</h1>
					{/* overview */}
					<p className='relative z-[3] text-xs md:text-lg lg:text-2xl'>
						{Movie?.overview}
					</p>
				</>
			)}
		</section>
	);
};

export default Banner;