import { FunctionComponent } from 'react';
import { modalState, movieState } from '@/recoil/globalAtom';
import { useRecoilState } from 'recoil';

const Modal: FunctionComponent = () => {
	const [_, setShowModal] = useRecoilState(modalState);
	return (
		<aside className='fixed top-0 left-0 z-50 items-center justify-center w-full h-screen bg-black/90 p01-'>
			<article className='w-[600px] h-full'>
				<h2>Modal</h2>
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
