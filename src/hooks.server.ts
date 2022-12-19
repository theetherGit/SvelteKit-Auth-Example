import SvelteKitAuth from '@auth/sveltekit';
import GitHub from '@auth/core/providers/github';
import CredentialsProvider from '@auth/core/providers/credentials';
import EmailProvider from '@auth/core/providers/email';
import {
	GITHUB_APP_ID,
	GITHUB_APP_SECRET,
	UPSTASH_REDIS_REST_URL,
	UPSTASH_REDIS_REST_TOKEN,
	EMAIL_SERVER_USER,
	EMAIL_SERVER_PASSWORD,
	EMAIL_SERVER_HOST,
	EMAIL_SERVER_PORT
} from '$env/static/private';
import type { HandleServerError } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { UpstashRedisAdapter } from '@next-auth/upstash-redis-adapter';
import { Redis } from '@upstash/redis';

const redis = new Redis({
	url: UPSTASH_REDIS_REST_URL,
	token: UPSTASH_REDIS_REST_TOKEN
});

const handleAuthJS = SvelteKitAuth({
	adapter: UpstashRedisAdapter(redis),
	providers: [
		GitHub({ clientId: GITHUB_APP_ID, clientSecret: GITHUB_APP_SECRET }),
		EmailProvider({
			server: {
				host: EMAIL_SERVER_HOST,
				port: EMAIL_SERVER_PORT,
				auth: {
					user: EMAIL_SERVER_USER,
					pass: EMAIL_SERVER_PASSWORD
				}
			},
			from: EMAIL_SERVER_USER
		}),
		CredentialsProvider({
			name: 'SvelteKit v1 Guide',
			credentials: {
				username: { label: 'Username', type: 'text', placeholder: '' },
				password: { label: 'Password', type: 'password' }
			},
			async authorize(credentials, req) {
				const user = {
					id: '1',
					name: 'Svelte Kit',
					email: 'kit@example.com',
					image: '/sveltekitLogo.webp'
				};

				if (user) {
					return user;
				} else {
					return null;
				}
			}
		})
	],
	theme: {
		colorScheme: 'light',
		brandColor: 'primary',
		logo: '/sveltekitLogo.webp'
	}
});

export const handleError: HandleServerError = ({ error }) => {
	return {
		message: error.message
	};
};

export const handle = sequence(handleAuthJS);
