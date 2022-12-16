import type { PageLoad } from './$types';

// https://vitejs.dev/guide/features.html#glob-import
const globs = import.meta.glob(`../lib/**/**.{svelte,ts,css}`, { as: 'raw' });

export const load: PageLoad = async ({ url, route }) => {
    const modules = Object.entries(globs)
        .filter(([k, v]) => k.startsWith(''))
        .map(([k, v]) =>
            v().then((result) => {
                const segments = k.split('/');

                return { filename: segments[segments.length - 1], source: result.split("\n") };
            })
        );
    let code = await Promise.all(modules);
    return {
        code
    };
};
