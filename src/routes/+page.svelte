<script>
    import { signIn, signOut } from "@auth/sveltekit/client"
    import { page } from "$app/stores"
    import Github from "@auth/core/providers/github";

    console.log($page)
    $: if ($page.data.session){
        console.log(Github)
    }
</script>

{#if $page.data.session}
    <div class="card card-side bg-base-100 shadow-xl">
        {#if $page.data.session.user?.image}
            <figure><img src="{$page.data.session.user.image}" alt={$page.data.session.user?.name ?? "User"}/></figure>
        {/if}
        <div class="card-body">
            <h2 class="card-title">{$page.data.session.user?.name ?? "User"}</h2>
            <p>Expire Time: {new Date($page.data.session.expires)}</p>
            <div class="card-actions justify-end">
                <a href="https://github.com/theetherGit/SvelteKit-Auth-Example" target="_blank" rel="noreferrer" class="btn btn-primary hover:bg-white hover:border-error gap-2"><svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        width="32"
                        height="32"
                        class="h-6 w-6"
                        stroke="currentColor"
                ><path
                        fill-rule="evenodd"
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                /></svg
                >
                    Source</a>
            </div>
        </div>
    </div>
{/if}
<div class="mt-5 space-y-3 customs">
    <div class="alert alert-info shadow-lg">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>Start a new SvelteKit Project with TailwindCSS, DaisyUI and AuthJs (Formerly known as NextAuth) </span>
        </div>
    </div>
    <div>
        <div class="mockup-code">
            <pre data-prefix="~"><code>Creating new <a href="https://kit.svelte.dev/" target="_blank" rel="noreferrer" class="text-secondary">SvelteKit</a> project</code></pre>
            <pre data-prefix="$"><code>pnpm create svelte@latest SvelteKit-Auth-Example</code></pre>
            <pre data-prefix=">" class="text-warning"><code>creating...</code></pre>
            <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
        </div>
    </div>
    <div>
        <div class="mockup-code">
            <pre data-prefix="~"><code>Adding <a href="https://tailwindcss.com/docs/guides/sveltekit" target="_blank" rel="noreferrer" class="text-secondary">TailwindCSS</a> and <a href="https://daisyui.com/" target="_blank" rel="noreferrer" class="text-secondary">DaisyUI</a> to SvelteKit</code></pre>
            <pre data-prefix="$"><code>pnpm install -D tailwindcss postcss autoprefixer svelte-preprocess</code></pre>
            <pre data-prefix=">" class="text-warning"><code>installing...</code></pre>
            <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
            <br>
            <pre data-prefix="~"><code>Initiating tailwind.config.cjs</code></pre>
            <pre data-prefix="$"><code>pnpx tailwindcss init tailwind.config.cjs -p</code></pre>

        </div>
    </div>
</div>

