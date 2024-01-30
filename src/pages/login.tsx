//rafce
import Head from 'next/head';
import Image from 'next/image';
import { FunctionComponent, useState } from 'react';
import logo from '@/public/logo.svg';
import firebase from '@/firebase';
console.log(firebase);
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
			<div className='relative flex items-center justify-center w-full h-screen p-5 overflow-hidden md:p-0'>
				{/* bg */}
				<Image
					src='https://rb.gy/p2hphi'
					fill
					priority
					className='relative opacity-40 object-cover z-[1] hidden md:block'
					alt='netflix login'
					onLoadingComplete={() => setIsLoading(false)}
				/>
				{/* loading bar */}
				<MoonLoader
					size={50}
					color='#36d7b7'
					loading={IsLoading}
					className='absolute top-[50%] left-[50%] ml-[-25px] mt-[-25px] z-[2]'
				/>
				{/* login */}
				<form className='relative z-[5] bg-black/70 py-10 px-8 space-y-8'>
					<h1 className='text-4xl font-semibold'>Sign In</h1>
					<div className='space-y-4'>
						<input type='email' placeholder='Email' className='input' />
						<input type='password' placeholder='Password' className='input' />
					</div>
					<button className='w-full rounded bg-[red] py-3 font-semibold'>
						Sign In
					</button>
					<div className='text-[gray]'>
						New to Nextflix?
						<button className='ml-4 text-white hover:underline'>
							Sign Up Now
						</button>
					</div>
				</form>
			</div>
			{/* logo */}
			<Image
				width={150}
				height={150}
				src={logo}
				className='absolute left-4 top-4 cursor-pointer md:left-10 md:top-6 z-[3]'
				alt='logo'
			/>
		</>
	);
};

export default Login;
