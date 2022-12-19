import type { LayoutServerLoad } from './$types';
import { getToken } from '@auth/core/jwt';
import { GITHUB_APP_ID, GITHUB_APP_SECRET, AUTH_SECRET } from '$env/static/private';

export const load: LayoutServerLoad = async (event) => {
	return {
		session: await event.locals.getSession()
	};
};
