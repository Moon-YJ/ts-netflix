import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// initializeApp(configOpt): firebase 인증 객체 생성시 필요한 초기정보값 등록
// getApp(): 초기 firebase 객체를 생성
// getApps(): firebase로 생성된 서비스앱의 배열을 반환

// 해당 코드는 firebase객체를 직접 가져와서 설정값을 초기화한 뒤,
// 초기화 설정이 완료된 firebase 객체 자체를 export
// 원하는 컴포넌트에서 firebase 객체를 import시 안쪽의 로그인, 로그아웃, 정보값 확인 가능
const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE,
	authDomain: 'test-d334b.firebaseapp.com',
	projectId: 'test-d334b',
	storageBucket: 'test-d334b.appspot.com',
	messagingSenderId: '692327173009',
	appId: '1:692327173009:web:53f35cc565853e8040e830',
};

// 초기에 firebase앱 생성시 기존에 사용되고있는 앱이 있으면 있는 앱을 불러옴, 없으면 초기 세팅 시작
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
// 반환된 인증정보 객체를 반환
const auth = getAuth();

// app 객체와 인증정보 객체 export
export default app;
export { auth };
