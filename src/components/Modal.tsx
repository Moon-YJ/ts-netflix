import { FunctionComponent, useState } from 'react';
import { modalState, movieState } from '@/recoil/globalAtom';
import { useRecoilState, useRecoilValue } from 'recoil';
import Image from 'next/image';
import { baseURL } from '@/url';
import { BounceLoader } from 'react-spinners';

const Modal: FunctionComponent = () => {
	const [Loaded, setLoaded] = useState(false);
	const [_, setShowModal] = useRecoilState(modalState);
	const MovieData = useRecoilValue(movieState);

	return (
		<aside className='fixed top-0 left-0 z-50 flex items-center justify-center w-full h-screen p-10 bg-black/90'>
			<article className='w-full h-full flex justify-center flex-wrap content-center gap-20'>
				<div className='w-full h-[50%]  overflow-hidden relative lg:w-[40%] lg:h-full text-right'>
					<Image
						src={`${baseURL}original${MovieData?.poster_path}`}
						alt='image'
						priority
						fill
						className='object-contain'
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
				</div>
				<div className='w-full flex flex-wrap content-center gap-10 lg:w-[40%] lg:h-full'>
					<h2 className='w-full text-4xl'>
						{MovieData?.original_title || MovieData?.origin_name}
					</h2>
					<p>{MovieData?.overview}</p>
				</div>
				<span
					className='absolute text-base font-bold text-white cursor-pointer top-10 right-10'
					onClick={() => setShowModal(false)}
				>
					close
				</span>
			</article>
		</aside>
	);
};

export default Modal;
