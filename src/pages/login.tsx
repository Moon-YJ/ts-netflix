//rafce
import Head from 'next/head';
import Image from 'next/image';
import { FunctionComponent, useState } from 'react';
import logo from '@/public/logo.svg';
import { MoonLoader } from 'react-spinners';
import { SubmitHandler, useForm } from 'react-hook-form';
// npm i react-spinners
// npm i react-hook-form

interface Inputs {
	email: string;
	password: string;
}

const Login: FunctionComponent = () => {
	const [IsLoading, setIsLoading] = useState<boolean>(true);
	const [Login, setLogin] = useState<boolean>(false);

	// register: 원하는 input요소를 전개연산자로 등록해서 값을 관리
	// handleSubmit: submit이벤트 발생시 register에 등록된 input값들의 인증처리 핸들러함수를 콜백으로 전달받음
	// formState: 인증실패시 커스텀 에러메시지를 등록할 수 있는 객체
	const {
		register,
		handleSubmit,
		formState: { errors }, // formState객체값에서 다시 errors 프로퍼티에 등록되어있는 에러메시지만 추출
	} = useForm<Inputs>();

	const join: SubmitHandler<Inputs> = async ({ email, password }) => {
		console.log(email, '::email');
		console.log(password, '::pwd');
	};

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
				{/* submit 이벤트 발생시 handleSubmit이 인증처리를 해주고, 등록된 콜백함수에 인증 결과값을 전달 */}
				<form
					className='relative z-[5] bg-black/70 py-10 px-8 space-y-8'
					onSubmit={handleSubmit(join)}
				>
					<h1 className='text-4xl font-semibold'>Sign In</h1>
					<div className='space-y-4'>
						<input
							type='email'
							placeholder='Email'
							className='input'
							{...register('email', { required: true })}
						/>
						{/* 인증 실패시 비구조할당으로 뽑아낸 errors 객체에 전달한 property명으로 에러값 전달 */}
						{errors.email && <span>Enter valid Email address.</span>}
						<input
							type='password'
							placeholder='Password'
							className='input'
							{...register('password', { required: true })}
						/>
						{errors.password && <span>Enter valid Password.</span>}
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
