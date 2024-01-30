//rafce
import Head from 'next/head';
import Image from 'next/image';
import { FunctionComponent } from 'react';

const Login: FunctionComponent = () => {
	return (
		<>
			<Head>
				<title>Nextflix | Login</title>
				<link rel='icon' href='/public/favicon.ico'></link>
			</Head>

			<Image
				src='https://rb.gy/p2hphi'
				fill
				priority
				className='w-full h-screen z-[10] opacity-40 object-cover'
				alt='netflix login'
			/>
		</>
	);
};

export default Login;
