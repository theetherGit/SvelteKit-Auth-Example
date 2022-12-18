import SvelteKitAuth from '@auth/sveltekit';
import GitHub from '@auth/core/providers/github';
import { GITHUB_APP_ID, GITHUB_APP_SECRET } from '$env/static/private';
import type { HandleServerError } from '@sveltejs/kit';

export const handle = SvelteKitAuth({
	providers: [GitHub({ clientId: GITHUB_APP_ID, clientSecret: GITHUB_APP_SECRET })]
});

export const handleError: HandleServerError = ({ error, event }) => {
	return {
		message: error.message
	};
};
