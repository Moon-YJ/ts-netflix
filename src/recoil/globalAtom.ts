// npm i recoil
import { atom } from 'recoil';
import { Movie } from '../../types';
import { v1 } from 'uuid';

export const modalState = atom<boolean>({
	key: `modalStateKey/${v1()}`,
	default: false,
});

export const movieState = atom<Movie | null>({
	key: `movieStateKey/${v1()}`,
	default: null,
});
