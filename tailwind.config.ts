import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		// 기존의 preset을 커스텀 preset으로 덮어쓰기
		// screens: {
		// 	md: { max: '768px' } // 기본 설정인 min-width제거하고 max-width로 미디어쿼리 설정
		// },
		extend: {
			// extedn안쪽에 내가 쓰고 있는 커스텀 속성을 입력시
			// 기존의 tailwind preset을 유지하면서 나만의 preset을 추가
			screens: {
				mmd: { max: '768px' },
			},
			spacing: {
				//1단위를 1rem단위로 변경
				r1: '1rem',
				r2: '2rem',
			},
			backgroundImage: {
				gradient1:
					'linear-gradient(to bottom, rgba(20,20,20,0), rgba(20,20,20,1))',
			},
			keyframes: {
				rotation: {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
			},
			animation: {
				'ani-rotation': 'rotation 1s linear infinite',
			},
		},
	},
	plugins: [require('tailwind-scrollbar')],
};
export default config;
