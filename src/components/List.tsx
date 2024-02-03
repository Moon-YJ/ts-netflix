import { Movie } from '../../types';
import Image from 'next/image';
import { baseURL } from '@/url';
import { FunctionComponent, useRef, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useRecoilState } from 'recoil';
import { modalState, movieState } from '@/recoil/globalAtom';
import { BounceLoader } from 'react-spinners';

interface Props {
	title: string;
	movies: Movie[];
}

interface ScrollProps {
	scrollLeft: number | null;
	clientWidth: number | null;
}

const List: FunctionComponent<Props> = ({ movies, title }) => {
	const [Loaded, setLoaded] = useState<boolean>(false);
	const [ShowModal, setShowModal] = useRecoilState(modalState);
	const [MovieInfo, setMovieInfo] = useRecoilState(movieState);
	// listFrame에는 UL요소가 담기도록 type지정
	const listFrame = useRef<HTMLUListElement>(null);
	const handleClick = (direction: string) => {
		// listFrame으로 가져오는 DOM속성객체를 담을 타입을 추가 지정
		const scrollValue: ScrollProps | null = listFrame.current;
		// 각 객체값이 없을때를 대비한 예외처리로 0값 옵셔널 처리
		const scrollLeft = scrollValue?.scrollLeft || 0;
		const clientWidth = scrollValue?.clientWidth || 0;
		// 좌우버튼 클릭시 인수로 전달되는 방향값에 따라 가로축으로 이동할 타겟 위치값 구해서 scrollTo 이동처리
		const targetPos =
			direction === 'left'
				? scrollLeft - clientWidth
				: scrollLeft + clientWidth;
		//console.log(targetPos);
		listFrame.current?.scrollTo({ left: targetPos, behavior: 'smooth' });
	};

	return (
		// 부모에 group지정시 자식요소에서 group-hover: 호버되는 영역을 지정 가능
		<article className='relative z-[5] pl-7 group'>
			<h2 className='mb-2 text-lg md:text-xl lg:text-2xl'>{title}</h2>
			<ul
				ref={listFrame}
				className='flex mb-4 overflow-x-auto scrollbar-thin scrollbar-thumb-[transparent] scrollbar-track-[transparent] md:mb-8 lg:mb-10 group-hover:scrollbar-thumb-[red]'
			>
				{movies.map((movie) => {
					return (
						<li
							key={movie.id}
							className='min-w-[180px] min-h-[80px] relative cursor-pointer md:min-w-[200px] md:min-h-[100px] lg:min-w-[240px] lg:min-h-[120px] opacity-50 hover:opacity-100 '
							onClick={() => {
								setShowModal(true);
								setMovieInfo(movie);
							}}
						>
							<Image
								src={`${baseURL}w300${movie.backdrop_path}`}
								alt={`${movie.title || movie.name}`}
								fill
								className='object-cover'
								onLoadingComplete={() => setLoaded(true)}
							/>
							<BounceLoader
								color={'orange'}
								cssOverride={{
									position: 'absolute',
									top: '50%',
									left: '50%',
									transform: 'translate(-50%, -50%)',
								}}
								loading={!Loaded}
							/>
						</li>
					);
				})}
			</ul>
			<FaAngleLeft
				className='absolute top-0 bottom-0 left-2 z-[5] m-auto h-12 cursor-pointer opacity-0 transition-opacity duration-500 group-hover:opacity-100'
				onClick={() => handleClick('left')}
			/>
			<FaAngleRight
				className='absolute top-0 bottom-0 right-2 z-[5] m-auto h-12 cursor-pointer opacity-0 transition-opacity duration-500 group-hover:opacity-100'
				onClick={() => handleClick('right')}
			/>
		</article>
	);
};

export default List;
