import Image from 'next/image';
import { Movie } from '../../types';
import { useState, useEffect, useRef, FunctionComponent } from 'react';
import { baseURL } from '@/url';
import { FaPlay, FaInfoCircle } from 'react-icons/fa';
import { modalState, movieState } from '@/recoil/globalAtom';
import { useRecoilState } from 'recoil';

interface Props {
	original: Movie[];
}

// index.tsx 제외한 compoents안쪽의 파일들은 page 컴포넌트가 아니기 때문에 NextPage type제거
const Banner: FunctionComponent<Props> = ({ original }) => {
	// useState는 초기값을 집어넣지 않더라도 추후 담기는 값을 인지해서 타입 추론
	// useState는 예외사항에 대한 값을 무조건 유니온타입으로 지정해야함
	const [Movie, setMovie] = useState<Movie | null>(null);
	// useRef에는 초기값이 없을수가 없으므로 직접 값을 수동으로 지정해야 되기 때문
	// useState와 다르게 useRef는 unionType을 지정하지 않더라도 인수로 지정한 초기값을 자동으로 유니온타입 설정
	const loading = useRef<any>(null);
	const [ShowModal, setShowModal] = useRecoilState(modalState);
	const [MovieInfo, setMovieInfo] = useRecoilState(movieState);
	//console.log(Movie);

	useEffect(() => {
		const randomNum = Math.floor(Math.random() * original.length);

		setMovie(original[randomNum]);
	}, [original]);

	return (
		<section className='relative flex flex-col h-[60vh] justify-end px-8 pb-[10vh] gap-8 md:h-[70vh] md:gap-12 md:px-10 lg:gap-16 lg:h-[85vh] lg:px-14 '>
			{Movie && (
				<>
					{/* pic Frame */}
					<div className='absolute top-0 left-0 z-[1] w-full h-full opacity-70'>
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
							onLoadingComplete={() => loading.current?.remove()}
						/>
					</div>
					{/* gradient layer */}
					<div className='absolute top-0 left-0 w-full h-full mt-0 z-[2] bg-gradient1'></div>
					{/* loading bar */}
					<div
						ref={loading}
						className='w-[40px] h-[40px] absolute top-[50%] left-[50%] translate-x-[-50%] trasnlate-y-[-50%] border-4 border-[orange] border-t-[transparent] rounded-[50%] z-[3] animate-ani-rotation'
					></div>
					{/* title */}
					<h1 className='relative z-[3] text-2xl font-bold md:text-4xl lg:text-7xl'>
						{Movie?.title || Movie?.name}
					</h1>
					{/* overview */}
					<p className='relative z-[3] text-xs  md:text-lg lg:text-2xl lg:w-[60%] '>
						{Movie?.overview}
					</p>
					{/* button set */}
					<nav className='relative z-[3] flex gap-3'>
						<button
							className='bannerButton bg-[red]'
							onClick={() => {
								setShowModal(true);
								setMovieInfo(Movie);
							}}
						>
							<FaPlay />
							Play
						</button>
						<button className='bannerButton'>
							<FaInfoCircle />
							More Info
						</button>
					</nav>
				</>
			)}
		</section>
	);
};

export default Banner;
