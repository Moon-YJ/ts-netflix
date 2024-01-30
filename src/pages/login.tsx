//rafce
import Head from 'next/head';
import Image from 'next/image';
import { FunctionComponent, useState } from 'react';
import { MoonLoader } from 'react-spinners';
// npm i react-spinners

const Login: FunctionComponent = () => {
	const [IsLoading, setIsLoading] = useState(true);

	return (
		<>
			<Head>
				<title>Nextflix | Login</title>
				<link rel='icon' href='/public/favicon.ico'></link>
			</Head>

			<div className='relative w-full h-screen'>
				<Image
					src='https://rb.gy/p2hphi'
					fill
					priority
					className='relative opacity-40 object-cover z-[1]'
					alt='netflix login'
					onLoadingComplete={() => setIsLoading(false)}
				/>
				<MoonLoader
					size={50}
					color='#36d7b7'
					loading={IsLoading}
					className='absolute top-[50%] left-[50%] ml-[-25px] mt-[-25px] z-[2]'
				/>
			</div>
		</>
	);
};

export default Login;
