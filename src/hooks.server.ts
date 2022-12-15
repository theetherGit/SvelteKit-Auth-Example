import SvelteKitAuth from "@auth/sveltekit"
import GitHub from "@auth/core/providers/github"
import { GITHUB_APP_ID, GITHUB_APP_SECRET } from "$env/static/private"


export const handle = SvelteKitAuth({
        providers: [
            GitHub({ clientId: GITHUB_APP_ID, clientSecret: GITHUB_APP_SECRET,
                authorization: {params: {			scope: "repo, user",
                    }}
            }),
        ],

})
