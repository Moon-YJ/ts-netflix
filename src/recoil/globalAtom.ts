// npm i recoil
import { atom } from 'recoil';
import { Movie } from '../../types';

export const modalState = atom<boolean>({
	key: 'modalStateKey',
	default: false,
});

export const movieState = atom<Movie | null>({
	key: 'movieStateKey',
	default: null,
});
