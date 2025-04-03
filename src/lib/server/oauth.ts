import { Google } from 'arctic';
import { env } from '$env/dynamic/private';

export const google = new Google(
	env.AUTH_GOOGLE_ID,
	env.AUTH_GOOGLE_SECRET,
	'https://localhost:5173/login/google/callback'
);
